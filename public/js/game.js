function resetGame() {
    // Reset game data
    gameData.players = [];
    gameData.teams = [];
    gameData.selectedCategories = [];
    gameData.currentRound = 1;
    gameData.currentTeam = 0;
    gameData.currentPlayerIndex = 0;
    gameData.gameCards = [];
    gameData.roundCards = [];
    gameData.scores = [];
    gameData.passedCards = [];

    // Réinitialiser les statistiques
    initGameStats();

    // Reset UI
    gameOverPhase.classList.add('hidden');
    setupPhase.classList.remove('hidden');

    // Supprimer les statistiques affichées
    const statsContainer = document.querySelector('.game-stats');
    if (statsContainer) {
        statsContainer.remove();
    }

    // Supprimer les messages de fin de manche
    const endRoundMessage = document.querySelector('.end-round-message');
    if (endRoundMessage) {
        endRoundMessage.remove();
    }

    // Clear player list
    playerList.innerHTML = '';

    // Reset inputs
    playerNameInput.value = '';
    teamCountSelect.value = '2';
    timerSecondsInput.value = '60';
    cardsPerPlayerInput.value = '5';
}

// Gestion des sons
function playSound(soundType) {
    try {
        if (!gameData.soundEnabled) return;

        let soundPath;
        switch(soundType) {
            case 'card-found':
                soundPath = '/sounds/correct.wav';
                break;
            case 'card-pass':
                soundPath = '/sounds/pass.wav';
                break;
            case 'timer-end':
                soundPath = '/sounds/times-up.mp3';
                break;
            case 'score':
                soundPath = '/sounds/applause.wav';
                break;
            case 'next-round':
                soundPath = '/sounds/next-round.mp3';
                break;
            case 'game-end':
                soundPath = '/sounds/game-end.mp3';
                break;
            default:
                soundPath = '/sounds/click.wav';
        }

        // Vérifier si le fichier son existe
        fetch(soundPath)
            .then(response => {
                if (response.ok) {
                    // Le fichier son existe, on peut le jouer
                    const sound = new Audio(soundPath);
                    sound.play().catch(e => {
                        console.warn("Impossible de jouer le son. Cela peut être dû à des restrictions du navigateur:", e);
                    });
                } else {
                    console.warn(`Le fichier son ${soundPath} n'existe pas ou n'est pas accessible`);
                }
            })
            .catch(error => {
                console.warn(`Erreur lors de la vérification du fichier son ${soundPath}:`, error);
            });

    } catch (error) {
        console.error("Erreur lors de la lecture du son:", error);
    }
}

// Utility Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Update the number of cards remaining
function updateCardsRemaining() {
    if (cardsRemainingDisplay) {
        cardsRemainingDisplay.textContent = `Cartes restantes: ${gameData.roundCards.length}`;
    }
}// Game Data
const gameData = {
    categories: {
        'Animaux': ['Chien', 'Chat', 'Cheval', 'Fourmi', 'Lion', 'Tigre', 'Éléphant', 'Girafe', 'Singe','Cerf','Sardine','Saumon',],
        'Chanteurs': ['Soprano', 'Nekfeu', 'Adele', 'Beyoncé', 'Ed Sheeran', 'Taylor Swift', 'Drake', 'Rihanna', 'Justin Bieber', 'Ariana Grande','BigFlo et Oli'],
        'Films': ['Titanic', 'Star Wars', 'Le Roi Lion', 'Avatar', 'Matrix', 'Avengers', 'Jurassic Park', 'Inception','Divergente'],
        'Personnages': ['Batman', 'Spider-Man', 'Mickey Mouse', 'Donald Duck', 'Superman', 'Wonder Woman', 'Homer Simpson', 'Mario', 'Dark Vador', 'James Bond','Gollum'],
        'Sports': ['Football', 'Basketball', 'Tennis', 'Rugby', 'Natation', 'Athlétisme', 'Volleyball', 'Ski', 'Snowboard', 'Golf', 'Cyclisme','Echec'],
        'Pays': ['France', 'États-Unis', 'Japon', 'Brésil', 'Australie', 'Italie', 'Canada', 'Espagne', 'Russie', 'Chine'],
        'Métiers': ['Médecin', 'Enseignant', 'Pilote', 'Pompier', 'Policier', 'Boulanger', 'Informaticien', 'Avocat', 'Cuisinier', 'Architecte'],
        'Objets': ['Téléphone', 'Ordinateur', 'Table', 'Chaise', 'Livre', 'Stylo', 'Horloge', 'Voiture', 'Télévision', 'Miroir']
    },
    players: [],
    teams: [],
    selectedCategories: [],
    cardsPerPlayer: 5,
    timerSeconds: 60,
    currentRound: 1,
    currentTeam: 0,
    currentPlayerIndex: 0, // Index du joueur actuel dans l'équipe
    roundDescriptions: [
        "Manche 1: Décrire avec des mots sans passer",
        "Manche 2: Un seul mot",
        "Manche 3: Mime uniquement"
    ],
    gameCards: [],
    roundCards: [],
    currentCardIndex: 0,
    scores: [],
    passedCards: [],
    // Statistiques du jeu
    stats: {
        cardsFoundByTeam: [], // Nombre de cartes trouvées par équipe
        cardsFoundByRound: [0, 0, 0], // Nombre de cartes trouvées par manche
        timePerCard: [], // Temps moyen par carte
        passedCardsCount: 0 // Nombre de cartes passées
    },
    // Paramètres audio
    soundEnabled: true
};

// DOM Elements
const setupPhase = document.getElementById('setup-phase');
const teamSetupPhase = document.getElementById('team-setup-phase');
const gameSetupPhase = document.getElementById('game-setup-phase');
const gamePlayPhase = document.getElementById('game-play-phase');
const scorePhase = document.getElementById('score-phase');
const gameOverPhase = document.getElementById('game-over-phase');

const playerNameInput = document.getElementById('player-name');
const addPlayerButton = document.getElementById('add-player');
const playerList = document.getElementById('player-list');
const continueToTeamsButton = document.getElementById('continue-to-teams');

const teamCountSelect = document.getElementById('team-count');
const teamAssignmentContainer = document.getElementById('team-assignment-container');
const continueToGameSetupButton = document.getElementById('continue-to-game-setup');

const categoriesContainer = document.getElementById('categories-container');
const timerSecondsInput = document.getElementById('timer-seconds');
const cardsPerPlayerInput = document.getElementById('cards-per-player');
const startGameButton = document.getElementById('start-game');

const roundInfo = document.getElementById('round-info');
const currentTeamDisplay = document.getElementById('current-team');
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const nextCardButton = document.getElementById('next-card');
const passCardButton = document.getElementById('pass-card');
const cardCategory = document.getElementById('card-category');
const cardWord = document.getElementById('card-word');
const endTurnButton = document.getElementById('end-turn');
const cardsRemainingDisplay = document.getElementById('cards-remaining');

const scoresTable = document.getElementById('scores-table');
const scoresBody = document.getElementById('scores-body');
const continueNextRoundButton = document.getElementById('continue-next-round');
const endGameButton = document.getElementById('end-game');

const winnerDisplay = document.getElementById('winner-display');
const finalScoresTable = document.getElementById('final-scores-table');
const finalScoresBody = document.getElementById('final-scores-body');
const newGameButton = document.getElementById('new-game');

// Timer variables
let timerInterval;
let timeLeft;

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé, initialisation du jeu...");
    try {
        initGame();
        console.log("Jeu initialisé avec succès");
    } catch (error) {
        console.error("Erreur lors de l'initialisation du jeu:", error);
    }
});

// Initialize Game
function initGame() {
    // Vérifier que tous les éléments DOM nécessaires sont présents
    if (!playerNameInput) {
        console.error("L'élément playerNameInput n'a pas été trouvé");
        return;
    }
    if (!addPlayerButton) {
        console.error("L'élément addPlayerButton n'a pas été trouvé");
        return;
    }
    if (!playerList) {
        console.error("L'élément playerList n'a pas été trouvé");
        return;
    }

    // Player setup
    addPlayerButton.addEventListener('click', addPlayer);
    playerNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addPlayer();
        }
    });
    continueToTeamsButton.addEventListener('click', setupTeams);

    // Team setup
    teamCountSelect.addEventListener('change', updateTeamAssignment);
    continueToGameSetupButton.addEventListener('click', setupGame);

    // Game setup
    setupCategories();
    timerSecondsInput.addEventListener('change', updateTimerConfig);
    cardsPerPlayerInput.addEventListener('change', updateCardsPerPlayer);
    startGameButton.addEventListener('click', startGame);

    // Game play
    startTimerButton.addEventListener('click', startTimer);
    nextCardButton.addEventListener('click', nextCard);
    passCardButton.addEventListener('click', passCard);
    endTurnButton.addEventListener('click', endTurn);

    // Score phase
    continueNextRoundButton.addEventListener('click', nextRound);
    endGameButton.addEventListener('click', showGameOver);

    // Game over
    newGameButton.addEventListener('click', resetGame);

    // Ajouter la barre de progression du timer
    addTimerProgressBar();

    // Initialiser les statistiques
    initGameStats();

    console.log("Tous les événements ont été attachés avec succès");
}

// Ajouter la barre de progression du timer
function addTimerProgressBar() {
    try {
        // Vérifier d'abord que l'élément timerDisplay existe
        if (!timerDisplay) {
            console.error("L'élément timerDisplay n'existe pas, impossible d'ajouter la barre de progression");
            return;
        }

        // Vérifier si la barre de progression existe déjà
        if (document.getElementById('timer-progress-bar')) {
            console.log("La barre de progression existe déjà");
            return;
        }

        const timerProgressBar = document.createElement('div');
        timerProgressBar.id = 'timer-progress-bar';
        timerProgressBar.className = 'timer-progress';

        const timerProgressFill = document.createElement('div');
        timerProgressFill.id = 'timer-progress-fill';
        timerProgressFill.className = 'timer-progress-fill';

        timerProgressBar.appendChild(timerProgressFill);

        // Insérer la barre de progression après l'affichage du timer
        timerDisplay.after(timerProgressBar);
        console.log("Barre de progression ajoutée avec succès");
    } catch (error) {
        console.error("Erreur lors de l'ajout de la barre de progression:", error);
    }
}

// Initialiser les statistiques du jeu
function initGameStats() {
    gameData.stats = {
        cardsFoundByTeam: [],
        cardsFoundByRound: [0, 0, 0],
        timePerCard: [],
        passedCardsCount: 0
    };
}

// Player Setup Functions
function addPlayer() {
    try {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            gameData.players.push(playerName);
            renderPlayerList();
            playerNameInput.value = '';
            playerNameInput.focus();
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout d'un joueur:", error);
    }
}

function renderPlayerList() {
    playerList.innerHTML = '';
    gameData.players.forEach((player, index) => {
        const li = document.createElement('li');
        li.textContent = player;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => removePlayer(index));

        li.appendChild(removeButton);
        playerList.appendChild(li);
    });

    // Enable continue button if at least 2 players
    continueToTeamsButton.disabled = gameData.players.length < 2;
}

function removePlayer(index) {
    gameData.players.splice(index, 1);
    renderPlayerList();
}

// Team Setup Functions
function setupTeams() {
    if (gameData.players.length < 2) {
        alert('Veuillez ajouter au moins 2 joueurs.');
        return;
    }
    setupPhase.classList.add('hidden');
    teamSetupPhase.classList.remove('hidden');
    updateTeamAssignment();
}

function updateTeamAssignment() {
    const teamCount = parseInt(teamCountSelect.value);
    teamAssignmentContainer.innerHTML = '';

    // Create team containers
    for (let i = 0; i < teamCount; i++) {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team-assignment';
        teamDiv.innerHTML = `
            <h3>Équipe ${i + 1}</h3>
            <ul class="team-players-list" id="team-${i}-players"></ul>
        `;
        teamAssignmentContainer.appendChild(teamDiv);
    }

    // Create player selection for each player
    gameData.players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-team-assignment';

        const selectElement = document.createElement('select');
        selectElement.id = `player-${index}-team`;
        selectElement.setAttribute('data-player-index', index);

        for (let i = 0; i < teamCount; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Équipe ${i + 1}`;
            // Distribute players evenly by default
            if (i === index % teamCount) {
                option.selected = true;
            }
            selectElement.appendChild(option);
        }

        selectElement.addEventListener('change', updateTeamLists);

        playerDiv.innerHTML = `<label>${player}: </label>`;
        playerDiv.appendChild(selectElement);
        teamAssignmentContainer.appendChild(playerDiv);
    });

    updateTeamLists();
}

function updateTeamLists() {
    const teamCount = parseInt(teamCountSelect.value);
    // Initialize teams array
    gameData.teams = Array(teamCount).fill().map(() => []);

    // Assign players to teams
    gameData.players.forEach((player, index) => {
        const selectElement = document.getElementById(`player-${index}-team`);
        const teamIndex = parseInt(selectElement.value);
        gameData.teams[teamIndex].push(player);
    });

    // Render team lists
    for (let i = 0; i < teamCount; i++) {
        const teamList = document.getElementById(`team-${i}-players`);
        teamList.innerHTML = '';

        gameData.teams[i].forEach(player => {
            const li = document.createElement('li');
            li.textContent = player;
            teamList.appendChild(li);
        });
    }

    // Enable continue button if all teams have at least one player
    const allTeamsHavePlayers = gameData.teams.every(team => team.length > 0);
    continueToGameSetupButton.disabled = !allTeamsHavePlayers;
}

// Game Setup Functions
function setupGame() {
    if (!gameData.teams.every(team => team.length > 0)) {
        alert('Chaque équipe doit avoir au moins un joueur.');
        return;
    }

    teamSetupPhase.classList.add('hidden');
    gameSetupPhase.classList.remove('hidden');

    // Initialize scores
    gameData.scores = gameData.teams.map(() => [0, 0, 0]);

    // Ajouter le switch pour activer/désactiver les sons si ce n'est pas déjà fait
    if (!document.getElementById('sound-toggle')) {
        const soundToggle = document.createElement('div');
        soundToggle.className = 'sound-toggle';
        soundToggle.innerHTML = `
            <label class="switch">
                <input type="checkbox" id="sound-toggle-checkbox" ${gameData.soundEnabled ? 'checked' : ''}>
                <span class="slider round"></span>
            </label>
            <span>Sons</span>
        `;

        document.querySelector('#game-setup h2').after(soundToggle);

        // Ajouter un événement pour activer/désactiver les sons
        document.getElementById('sound-toggle-checkbox').addEventListener('change', function(e) {
            gameData.soundEnabled = e.target.checked;
            console.log("Sons " + (gameData.soundEnabled ? "activés" : "désactivés"));
        });
    }
}

function setupCategories() {
    categoriesContainer.innerHTML = '';

    Object.keys(gameData.categories).forEach(category => {
        const div = document.createElement('div');
        div.className = 'category-checkbox';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `category-${category}`;
        input.value = category;
        input.checked = true; // All categories selected by default

        const label = document.createElement('label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;

        div.appendChild(input);
        div.appendChild(label);
        categoriesContainer.appendChild(div);
    });

    updateSelectedCategories();
}

function updateSelectedCategories() {
    const checkboxes = document.querySelectorAll('#categories-container input[type="checkbox"]');
    gameData.selectedCategories = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}

function updateTimerConfig() {
    gameData.timerSeconds = parseInt(timerSecondsInput.value);
}

function updateCardsPerPlayer() {
    gameData.cardsPerPlayer = parseInt(cardsPerPlayerInput.value);
}

// Game Start Functions
function startGame() {
    updateSelectedCategories();
    updateTimerConfig();
    updateCardsPerPlayer();

    if (gameData.selectedCategories.length === 0) {
        alert('Veuillez sélectionner au moins une catégorie.');
        return;
    }

    // Generate cards
    generateGameCards();

    // Vérifier qu'il y a bien des cartes générées
    if (gameData.gameCards.length === 0) {
        alert('Aucune carte n\'a été générée. Veuillez sélectionner plus de catégories ou augmenter le nombre de cartes par joueur.');
        return;
    }

    console.log(`${gameData.gameCards.length} cartes générées pour le jeu`);

    // Initialize game state
    gameData.currentRound = 1;
    gameData.currentTeam = 0;
    gameData.currentPlayerIndex = 0;

    // Prepare for first round
    prepareRound();

    // Vérifier que des cartes sont disponibles pour la première manche
    if (gameData.roundCards.length === 0) {
        alert('Erreur : aucune carte n\'est disponible pour commencer le jeu.');
        return;
    }

    // Show game play phase
    gameSetupPhase.classList.add('hidden');
    gamePlayPhase.classList.remove('hidden');

    updateRoundInfo();
    updateCurrentTeam();
    updateTimerDisplay();
    updateCardsRemaining();

    // Message de démarrage
    console.log(`Le jeu démarre avec ${gameData.teams.length} équipes et ${gameData.roundCards.length} cartes`);
}

function generateGameCards() {
    gameData.gameCards = [];

    // Get all words from selected categories
    gameData.selectedCategories.forEach(category => {
        if (gameData.categories[category] && Array.isArray(gameData.categories[category])) {
            gameData.categories[category].forEach(word => {
                gameData.gameCards.push({
                    category: category,
                    word: word
                });
            });
        }
    });

    // Shuffle the cards
    shuffleArray(gameData.gameCards);

    // Limit to total number of cards needed (or available if less)
    const totalCards = Math.min(
        gameData.players.length * gameData.cardsPerPlayer,
        gameData.gameCards.length
    );

    // S'assurer qu'il y a au moins 5 cartes
    const minCards = Math.max(5, totalCards);

    // Garder au moins le nombre minimum de cartes, ou toutes si moins disponibles
    gameData.gameCards = gameData.gameCards.slice(0, Math.min(minCards, gameData.gameCards.length));

    console.log(`${gameData.gameCards.length} cartes générées sur ${totalCards} demandées`);
}

function prepareRound() {
    // Réinitialiser les cartes passées
    gameData.passedCards = [];

    // Pour chaque manche, on repart avec exactement les mêmes cartes que dans le jeu original
    gameData.roundCards = [...gameData.gameCards];

    // Mélanger les cartes pour cette manche (pour un ordre différent)
    shuffleArray(gameData.roundCards);

    // Réinitialiser l'index de la carte actuelle
    gameData.currentCardIndex = 0;

    console.log(`Manche ${gameData.currentRound} préparée avec ${gameData.roundCards.length} cartes`);
}


// Game Play Functions
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    startTimerButton.disabled = true;
    nextCardButton.disabled = false;

    // En manche 1, on ne peut pas passer les cartes
    if (gameData.currentRound === 1) {
        passCardButton.disabled = true;
        passCardButton.classList.add('btn-disabled');
        // Changer le texte du bouton nextCard pour clarifier
        nextCardButton.textContent = "Trouvé !";
    } else {
        passCardButton.disabled = false;
        passCardButton.classList.remove('btn-disabled');
        nextCardButton.textContent = "Trouvé !";
        passCardButton.textContent = "Passer";
    }

    // Reset timer
    timeLeft = gameData.timerSeconds;
    updateTimerDisplay();

    // Show first card - s'assurer que cette fonction est appelée
    showCurrentCard();

    console.log(`Démarrage du timer, carte affichée: ${gameData.roundCards[gameData.currentCardIndex].word}`);

    // Start timer
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEnded();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = timeLeft !== undefined ? timeLeft : gameData.timerSeconds;

    // Mise à jour de la barre de progression
    if (document.getElementById('timer-progress-bar')) {
        const progressBar = document.getElementById('timer-progress-bar');
        const progressFill = document.getElementById('timer-progress-fill');

        if (timeLeft !== undefined) {
            const percentage = (timeLeft / gameData.timerSeconds) * 100;
            progressFill.style.width = `${percentage}%`;

            // Changement de couleur selon le temps restant
            if (percentage > 60) {
                progressFill.style.backgroundColor = 'var(--success-color)';
            } else if (percentage > 30) {
                progressFill.style.backgroundColor = 'var(--warning-color)';
            } else {
                progressFill.style.backgroundColor = 'var(--error-color)';
            }

            // Ajouter une animation de pulsation quand il reste peu de temps
            if (percentage <= 20) {
                progressFill.classList.add('pulse-animation');
            } else {
                progressFill.classList.remove('pulse-animation');
            }
        } else {
            progressFill.style.width = '100%';
            progressFill.style.backgroundColor = 'var(--primary-color)';
            progressFill.classList.remove('pulse-animation');
        }
    }
}

function showCurrentCard() {
    if (gameData.roundCards.length === 0) {
        // Pas de cartes disponibles du tout
        cardCategory.textContent = '';
        cardWord.textContent = 'Plus de cartes!';
        nextCardButton.disabled = true;
        passCardButton.disabled = true;

        // Attendre un peu pour que le joueur voie le message "Plus de cartes"
        setTimeout(() => {
            showScores();
        }, 1500);
        return;
    }

    // S'assurer que l'index est valide
    if (gameData.currentCardIndex >= gameData.roundCards.length) {
        gameData.currentCardIndex = 0;
    }

    // Afficher la carte actuelle (qui est maintenant garantie d'exister)
    const card = gameData.roundCards[gameData.currentCardIndex];
    cardCategory.textContent = card.category;
    cardWord.textContent = card.word;
}


function nextCard() {
    if (gameData.currentCardIndex < gameData.roundCards.length) {
        // Current team scores a point for current round
        gameData.scores[gameData.currentTeam][gameData.currentRound - 1]++;

        // Mettre à jour les statistiques
        gameData.stats.cardsFoundByRound[gameData.currentRound - 1]++;

        if (!gameData.stats.cardsFoundByTeam[gameData.currentTeam]) {
            gameData.stats.cardsFoundByTeam[gameData.currentTeam] = 0;
        }
        gameData.stats.cardsFoundByTeam[gameData.currentTeam]++;

        // Jouer un son et ajouter une animation
        playSound('card-found');
        cardWord.classList.add('card-found-animation');
        setTimeout(() => {
            cardWord.classList.remove('card-found-animation');
        }, 500);

        // Remove card from deck
        gameData.roundCards.splice(gameData.currentCardIndex, 1);

        // Update cards remaining display
        updateCardsRemaining();

        // Show next card or end if no more cards
        if (gameData.roundCards.length > 0) {
            showCurrentCard();
        } else {
            cardCategory.textContent = '';
            cardWord.textContent = 'Plus de cartes!';
            nextCardButton.disabled = true;
            passCardButton.disabled = true;

            // Attendre un peu pour que le joueur voie le message "Plus de cartes"
            setTimeout(() => {
                showScores();
            }, 1500);
        }
    }
}

function passCard() {
    if (gameData.currentCardIndex < gameData.roundCards.length) {
        // Mettre à jour les statistiques
        gameData.stats.passedCardsCount++;

        // Jouer un son et ajouter une animation
        playSound('card-pass');
        cardWord.classList.add('card-pass-animation');
        setTimeout(() => {
            cardWord.classList.remove('card-pass-animation');
        }, 500);

        // Move current card to passed cards
        const passedCard = gameData.roundCards[gameData.currentCardIndex];
        gameData.passedCards.push(passedCard);
        gameData.roundCards.splice(gameData.currentCardIndex, 1);

        // Update cards remaining display
        updateCardsRemaining();

        // Show next card or passed cards if no more new cards
        if (gameData.roundCards.length > 0) {
            showCurrentCard();
        } else if (gameData.passedCards.length > 0) {
            // Reuse passed cards
            gameData.roundCards = [...gameData.passedCards];
            gameData.passedCards = [];
            gameData.currentCardIndex = 0;
            showCurrentCard();
            updateCardsRemaining();
        } else {
            cardCategory.textContent = '';
            cardWord.textContent = 'Plus de cartes!';
            nextCardButton.disabled = true;
            passCardButton.disabled = true;

            // Attendre un peu pour que le joueur voie le message "Plus de cartes"
            setTimeout(() => {
                showScores();
            }, 1500);
        }
    }
}

function timerEnded() {
    nextCardButton.disabled = true;
    passCardButton.disabled = true;
    endTurnButton.classList.remove('hidden');

    // Jouer un son et ajouter une animation
    playSound('timer-end');
    timerDisplay.classList.add('timer-end-animation');
    setTimeout(() => {
        timerDisplay.classList.remove('timer-end-animation');
    }, 1000);
}

function endTurn() {
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Reset UI
    startTimerButton.disabled = false;
    nextCardButton.disabled = true;
    passCardButton.disabled = true;
    endTurnButton.classList.add('hidden');

    cardCategory.textContent = '';
    cardWord.textContent = 'Appuyez sur Démarrer';

    // Passer à l'équipe suivante
    gameData.currentTeam = (gameData.currentTeam + 1) % gameData.teams.length;

    // Si on revient à la première équipe, on fait avancer l'index du joueur
    if (gameData.currentTeam === 0) {
        gameData.currentPlayerIndex = (gameData.currentPlayerIndex + 1) % Math.max(...gameData.teams.map(team => team.length));

        // Si tous les joueurs de toutes les équipes ont joué, montrer les scores
        let allPlayersPlayed = true;
        for (let i = 0; i < gameData.teams.length; i++) {
            if (gameData.currentPlayerIndex < gameData.teams[i].length) {
                allPlayersPlayed = false;
                break;
            }
        }

        if (allPlayersPlayed) {
            gameData.currentPlayerIndex = 0;
            showScores();
            return;
        }
    }

    // S'assurer que le joueur existe dans l'équipe actuelle
    while (gameData.currentPlayerIndex >= gameData.teams[gameData.currentTeam].length) {
        gameData.currentTeam = (gameData.currentTeam + 1) % gameData.teams.length;
    }

    updateCurrentTeam();
    updateCardsRemaining();
}

function updateRoundInfo() {
    roundInfo.textContent = gameData.roundDescriptions[gameData.currentRound - 1];
}

function updateCurrentTeam() {
    const currentTeam = gameData.teams[gameData.currentTeam];
    const currentPlayer = currentTeam[gameData.currentPlayerIndex];
    currentTeamDisplay.textContent = `Équipe ${gameData.currentTeam + 1} - Joueur: ${currentPlayer}`;
}

// Score Functions
function showScores() {
    // Sauvegarder l'équipe et le joueur actuels pour la prochaine manche
    // Pas besoin de modifier, ces valeurs sont déjà conservées dans gameData

    gamePlayPhase.classList.add('hidden');
    scorePhase.classList.remove('hidden');

    renderScores();

    // Ajouter une animation et un son pour les scores
    playSound('score');
    document.getElementById('scores-table').classList.add('animate-scores');

    // Show appropriate button for next action
    if (gameData.currentRound < 3) {
        continueNextRoundButton.classList.remove('hidden');
        endGameButton.classList.add('hidden');
    } else {
        continueNextRoundButton.classList.add('hidden');
        endGameButton.classList.remove('hidden');
    }

    // Si toutes les cartes ont été jouées, afficher un message
    if (gameData.roundCards.length === 0) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'end-round-message';

        // Ajouter l'information sur qui commencera la prochaine manche
        if (gameData.currentRound < 3) {
            const nextTeam = gameData.teams[gameData.currentTeam];
            const nextPlayer = nextTeam[gameData.currentPlayerIndex];
            messageDiv.innerHTML = `
                <p>Tous les mots ont été joués pour la manche ${gameData.currentRound}!</p>
                <p class="next-player-info">La manche ${gameData.currentRound + 1} commencera avec 
                <strong>${nextPlayer}</strong> (Équipe ${gameData.currentTeam + 1})</p>
            `;
        } else {
            messageDiv.innerHTML = `<p>Tous les mots ont été joués pour la manche ${gameData.currentRound}!</p>`;
        }

        document.querySelector('#score-phase .card').insertBefore(messageDiv, document.getElementById('scores-table'));
    }
}

function renderScores() {
    scoresBody.innerHTML = '';

    gameData.teams.forEach((team, index) => {
        const row = document.createElement('tr');

        // Team name
        const teamCell = document.createElement('td');
        teamCell.textContent = `Équipe ${index + 1}`;
        row.appendChild(teamCell);

        // Scores for each round
        let totalScore = 0;
        gameData.scores[index].forEach((score, roundIndex) => {
            const scoreCell = document.createElement('td');
            scoreCell.textContent = score;
            row.appendChild(scoreCell);
            totalScore += score;
        });

        // Total score
        const totalCell = document.createElement('td');
        totalCell.textContent = totalScore;
        totalCell.style.fontWeight = 'bold';
        row.appendChild(totalCell);

        scoresBody.appendChild(row);
    });
}

// Correction de la fonction nextRound pour éviter le démarrage automatique du timer
function nextRound() {
    // Passer à la manche suivante mais garder l'équipe et le joueur actuels
    gameData.currentRound++;

    // Préparer les cartes pour la nouvelle manche
    prepareRound();

    // Reset UI for next round
    scorePhase.classList.add('hidden');
    gamePlayPhase.classList.remove('hidden');

    // Supprimer les messages de fin de manche s'ils existent
    const endRoundMessage = document.querySelector('.end-round-message');
    if (endRoundMessage) {
        endRoundMessage.remove();
    }

    // Jouer un son et ajouter une animation
    playSound('next-round');

    // S'assurer que le timer est arrêté et réinitialisé
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timeLeft = gameData.timerSeconds;

    // Réinitialiser les boutons et contrôles
    startTimerButton.disabled = false;
    nextCardButton.disabled = true;
    passCardButton.disabled = true;

    // La carte ne sera affichée que lorsque le joueur cliquera sur "Démarrer"
    cardCategory.textContent = '';
    cardWord.textContent = 'Appuyez sur Démarrer';

    updateRoundInfo();
    updateCurrentTeam();
    updateTimerDisplay();
    updateCardsRemaining();

    // Vérifier que des cartes sont disponibles
    if (gameData.roundCards.length === 0) {
        console.error("Aucune carte disponible pour la nouvelle manche !");
    } else {
        console.log(`La manche ${gameData.currentRound} commence avec ${gameData.roundCards.length} cartes`);
    }

    // Afficher un message indiquant qui commence
    const currentTeam = gameData.teams[gameData.currentTeam];
    const currentPlayer = currentTeam[gameData.currentPlayerIndex];

    // Créer un message toast temporaire
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = `${currentPlayer} (Équipe ${gameData.currentTeam + 1}) commence la manche ${gameData.currentRound}`;
    document.body.appendChild(toast);

    // Faire disparaître le toast après 3 secondes
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}

// Game Over Functions
function showGameOver() {
    scorePhase.classList.add('hidden');
    gameOverPhase.classList.remove('hidden');

    // Jouer un son de fin de partie
    playSound('game-end');

    renderFinalScores();
    renderGameStats();
}

function renderFinalScores() {
    finalScoresBody.innerHTML = '';

    // Calculate total scores and find winner
    let highestScore = -1;
    let winnerIndex = -1;

    gameData.teams.forEach((team, index) => {
        const row = document.createElement('tr');

        // Team name
        const teamCell = document.createElement('td');
        teamCell.textContent = `Équipe ${index + 1}`;
        row.appendChild(teamCell);

        // Scores for each round
        let totalScore = 0;
        gameData.scores[index].forEach((score, roundIndex) => {
            const scoreCell = document.createElement('td');
            scoreCell.textContent = score;
            row.appendChild(scoreCell);
            totalScore += score;
        });

        // Total score
        const totalCell = document.createElement('td');
        totalCell.textContent = totalScore;
        totalCell.style.fontWeight = 'bold';
        row.appendChild(totalCell);

        finalScoresBody.appendChild(row);

        // Check for winner
        if (totalScore > highestScore) {
            highestScore = totalScore;
            winnerIndex = index;
        }
    });

    // Display winner
    if (winnerIndex !== -1) {
        winnerDisplay.innerHTML = `<h3>L'équipe ${winnerIndex + 1} gagne avec ${highestScore} points!</h3>`;
    } else {
        winnerDisplay.innerHTML = '<h3>Égalité!</h3>';
    }
}

function renderGameStats() {
    // Créer un conteneur pour les statistiques
    const statsContainer = document.createElement('div');
    statsContainer.className = 'game-stats';
    statsContainer.innerHTML = '<h3>Statistiques de la partie</h3>';

    // Créer le contenu des statistiques
    const statsContent = document.createElement('div');
    statsContent.className = 'stats-content';

    // 1. Statistiques par manche
    const roundStats = document.createElement('div');
    roundStats.className = 'stats-section';
    roundStats.innerHTML = `
        <h4>Mots trouvés par manche</h4>
        <div class="stats-chart">
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[0] / Math.max(...gameData.stats.cardsFoundByRound, 1)) * 100}%">
                <span class="bar-value">${gameData.stats.cardsFoundByRound[0]}</span>
            </div>
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[1] / Math.max(...gameData.stats.cardsFoundByRound, 1)) * 100}%">
                <span class="bar-value">${gameData.stats.cardsFoundByRound[1]}</span>
            </div>
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[2] / Math.max(...gameData.stats.cardsFoundByRound, 1)) * 100}%">
                <span class="bar-value">${gameData.stats.cardsFoundByRound[2]}</span>
            </div>
        </div>
        <div class="chart-labels">
            <span>Manche 1</span>
            <span>Manche 2</span>
            <span>Manche 3</span>
        </div>
    `;

    // 2. Statistiques par équipe
    const teamStats = document.createElement('div');
    teamStats.className = 'stats-section';

    let teamStatsHTML = '<h4>Performance des équipes</h4><ul class="team-stats-list">';
    gameData.teams.forEach((team, index) => {
        const totalScore = gameData.scores[index].reduce((a, b) => a + b, 0);
        teamStatsHTML += `<li>Équipe ${index + 1}: <span class="team-stat-value">${totalScore} mots trouvés</span></li>`;
    });
    teamStatsHTML += '</ul>';
    teamStats.innerHTML = teamStatsHTML;

    // 3. Cartes passées
    const passedStats = document.createElement('div');
    passedStats.className = 'stats-section';
    passedStats.innerHTML = `
        <h4>Autres statistiques</h4>
        <p>Nombre de mots passés: <span class="stat-highlight">${gameData.stats.passedCardsCount}</span></p>
        <p>Total de mots joués: <span class="stat-highlight">${gameData.stats.cardsFoundByRound.reduce((a, b) => a + b, 0)}</span></p>
    `;

    // Assembler les statistiques
    statsContent.appendChild(roundStats);
    statsContent.appendChild(teamStats);
    statsContent.appendChild(passedStats);
    statsContainer.appendChild(statsContent);

    // Ajouter les statistiques à la page
    document.getElementById('winner-display').after(statsContainer);
}