// Game Data

// Configuration des sons
const soundConfig = {
    // Sons par défaut
    default: {
        'card-found': '/sounds/correct.wav',
        'card-pass': '/sounds/pass.wav',
        'timer-end': '/sounds/times-up.mp3',
        'score': '/sounds/applause.wav',
        'next-round': '/sounds/next-round.mp3',
        'game-end': '/sounds/game-end.mp3',
        'click': '/sounds/click.wav'
    },
    // Pack de sons futuriste
    futuristic: {
        'card-found': '/sounds/futuristic/correct.wav',
        'card-pass': '/sounds/futuristic/pass.wav',
        'timer-end': '/sounds/futuristic/times-up.mp3',
        'score': '/sounds/futuristic/applause.wav',
        'next-round': '/sounds/futuristic/next-round.mp3',
        'game-end': '/sounds/futuristic/game-end.mp3',
        'click': '/sounds/futuristic/click.wav'
    },
    // Pack de sons comique
    funny: {
        'card-found': '/sounds/funny/correct.wav',
        'card-pass': '/sounds/funny/pass.wav',
        'timer-end': '/sounds/funny/times-up.mp3',
        'score': '/sounds/funny/applause.wav',
        'next-round': '/sounds/funny/next-round.mp3',
        'game-end': '/sounds/funny/game-end.mp3',
        'click': '/sounds/funny/click.wav'
    }
};

// Configuration des vibrations
const vibrationPatterns = {
    'card-found': [100, 50, 100],
    'card-pass': [50, 30, 50],
    'timer-end': [200, 100, 200, 100, 200],
    'score': [100, 50, 100, 50, 300],
    'next-round': [100, 100, 100],
    'game-end': [300, 100, 100, 100, 300],
    'click': [30]
};

const gameData = {
    categories: {
        'Animaux': [
            'Chien', 'Chat', 'Cheval', 'Lion', 'Tigre', 'Éléphant', 'Girafe', 'Singe', 'Cerf', 'Loup', 'Ours', 'Renard', 'Zèbre', 'Rhinocéros',
            'Panda', 'Koala', 'Kangourou', 'Chameau', 'Écureuil', 'Dauphin', 'Baleine', 'Ornithorynque', 'Blaireau', 'Lynx', 'Loutre', 'Sanglier',
            'Guépard', 'Hyène', 'Panthère', 'Morse', 'Bison', 'Caribou', 'Tapir', 'Hippopotame', 'Léopard', 'Yack', 'Wombat', 'Wallaby',
            'Ouistiti', 'Mandrill', 'Gorille', 'Chimpanzé', 'Raton laveur', 'Mouflon', 'Bélier', 'Chamois', 'Martre', 'Hermine', 'Aigle', 'Hibou', 'Manchot', 'Perroquet', 'Colibri', 'Autruche', 'Toucan', 'Flamant rose', 'Chouette', 'Paon', 'Oiseau-mouche',
            'Canard', 'Oie', 'Cygne', 'Albatros', 'Condor', 'Vautour', 'Ara', 'Perruche', 'Pingouin', 'Oiseau-lyre', 'Faisan', 'Moineau',
            'Merle', 'Corbeau', 'Pie', 'Martin-pêcheur', 'Grue', 'Héron', 'Grue',

            'Crocodile', 'Serpent', 'Caméléon', 'Tortue', 'Iguane', 'Gecko', 'Salamandre', 'Grenouille', 'Crapaud', 'Lézard', 'Anaconda',
            'Python', 'Vipère', 'Cobra', 'Komodo', 'Alligator', 'Serpent de mer', 'Tortue géante', 'Caïman', 'Triton',

            'Fourmi', 'Abeille', 'Papillon', 'Scarabée', 'Libellule', 'Mante religieuse', 'Guêpe', 'Coccinelle', 'Criquet', 'Sauterelle',
            'Cafard', 'Termite', 'Scorpion', 'Araignée', 'Mouche', 'Moustique', 'Ver de terre', 'Escargot', 'Limace', 'Méduse',

            'Sardine', 'Saumon', 'Requin', 'Thon', 'Carpe', 'Esturgeon', 'Raie', 'Anguille', 'Piranha', 'Poisson-clown', 'Mérou', 'Bar',
            'Truite', 'Maquereau', 'Anchois', 'Sole', 'Marlin', 'Barracuda', 'Espadon', 'Raie manta'
        ],
        'Pays': [
            'France', 'Allemagne', 'Royaume-Uni', 'Italie', 'Espagne', 'Russie', 'Ukraine', 'Pologne', 'Roumanie', 'République Tchèque',
            'Portugal', 'Suède', 'Norvège', 'Finlande', 'Danemark', 'Pays-Bas', 'Belgique', 'Suisse', 'Autriche', 'Grèce', 'Hongrie',
            'Serbie', 'Croatie', 'Bulgarie', 'Slovaquie', 'Irlande', 'Islande', 'Luxembourg', 'Chypre', 'Malte',

            'États-Unis', 'Canada', 'Brésil', 'Argentine', 'Mexique', 'Colombie', 'Chili', 'Pérou', 'Venezuela', 'Équateur',
            'Cuba', 'République Dominicaine', 'Jamaïque', 'Costa Rica', 'Panama', 'Uruguay', 'Paraguay', 'Bolivie', 'Honduras', 'El Salvador',

            'Chine', 'Japon', 'Inde', 'Corée du Sud', 'Turquie', 'Iran', 'Indonésie', 'Thaïlande', 'Malaisie', 'Vietnam',
            'Philippines', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Singapour', 'Kazakhstan', 'Ouzbékistan', 'Taïwan', 'Mongolie', 'Népal',

            'Afrique du Sud', 'Égypte', 'Nigeria', 'Kenya', 'Maroc', 'Algérie', 'Éthiopie', 'Ghana', 'Tanzanie', 'Cameroun',
            'Angola', 'Zimbabwe', 'Maurice', 'Madagascar', 'Sénégal', 'Tunisie', 'Côte d\'Ivoire', 'Gabon', 'République Démocratique du Congo', 'Mozambique',

            'Australie', 'Nouvelle-Zélande', 'Fidji', 'Papouasie-Nouvelle-Guinée', 'Îles Salomon', 'Vanuatu', 'Samoa', 'Tonga'
        ],
        'Objets': [
            'Téléphone', 'Ordinateur', 'Tablette', 'Écouteurs', 'Drone', 'Console de jeux', 'Appareil photo', 'Caméra', 'Smartwatch',
            'Enceinte intelligente', 'Casque VR', 'Routeur', 'Batterie externe', 'Clé USB', 'Disque dur', 'Imprimante', 'Scanner',
            'Projecteur', 'Kindle', 'Montre connectée',

            'Table', 'Chaise', 'Canapé', 'Lit', 'Armoire', 'Bibliothèque', 'Bureau', 'Commode', 'Étagère', 'Miroir', 'Lampe',
            'Suspension', 'Applique', 'Horloge', 'Tapis', 'Coussin', 'Paravent', 'Buffet', 'Console', 'Tabouret',

            'Réfrigérateur', 'Four', 'Micro-ondes', 'Machine à café', 'Grille-pain', 'Mixeur', 'Bouilloire', 'Robot cuiseur',
            'Machine à pain', 'Machine à espresso', 'Ventilateur', 'Climatiseur', 'Aspirateur', 'Fer à repasser', 'Machine à laver',
            'Sèche-linge', 'Lave-vaisselle', 'Hotte', 'Plaque de cuisson', 'Robot multifonction',

            'Marteau', 'Tournevis', 'Perceuse', 'Scie', 'Clé', 'Niveau', 'Mètre', 'Pince', 'Échelle', 'Établi', 'Ponceuse',
            'Tronçonneuse', 'Visseuse', 'Compresseur', 'Chalumeau', 'Meuleuse', 'Soudure', 'Multimètre', 'Testeur', 'Câble',

            'Lunettes', 'Sac', 'Valise', 'Portefeuille', 'Montre', 'Parapluie', 'Stylo', 'Livre', 'Clés', 'Chargeur', 'Bouteille',
            'Gourde', 'Sac à dos', 'Trousse', 'Étui', 'Porte-documents', 'Ceinture', 'Chapeau', 'Écharpe', 'Gants',

            'Guitare', 'Piano', 'Violon', 'Ballon', 'Raquette', 'Jeu de société', 'Vélo', 'Skateboard', 'Console', 'Manette',
            'Carte à jouer', 'Puzzle', 'Poupée', 'Peluche', 'Drone', 'Jumelles', 'Télescope', 'Microscope', 'Palette', 'Pinceau'
        ],
        'Métiers': [
            'Médecin', 'Infirmier', 'Chirurgien', 'Dentiste', 'Psychologue', 'Pharmacien', 'Vétérinaire', 'Physiothérapeute',
            'Nutritionniste', 'Sage-femme', 'Radiologue', 'Psychiatre', 'Orthophoniste', 'Nutritionniste', 'Thérapeute', 'Opticien',
            'Ambulancier', 'Technicien de laboratoire', 'Diététicien', 'Ergothérapeute',

            'Enseignant', 'Professeur', 'Directeur d\'école', 'Professeur des universités', 'Instituteur', 'Conseiller pédagogique',
            'Formateur', 'Documentaliste', 'Surveillant', 'Animateur', 'Coach scolaire', 'Orthopédagogue', 'Tuteur', 'Bibliothécaire',
            'Inspecteur académique', 'Éducateur spécialisé', 'Conseiller d\'orientation', 'Professeur de langue', 'Chercheur', 'Archiviste',

            'Informaticien', 'Développeur', 'Ingénieur logiciel', 'Data scientist', 'Architecte réseau', 'Cybersécurité',
            'Concepteur UX/UI', 'Analyste système', 'Administrateur base de données', 'Cloud architect', 'Technicien', 'Expert en IA',
            'Programmeur', 'Architecte', 'Ingénieur système', 'Technicien réseau', 'Consultant IT', 'Testeur logiciel', 'Product manager',
            'Responsable innovation',

            'Artiste', 'Designer', 'Graphiste', 'Photographe', 'Musicien', 'Écrivain', 'Illustrateur', 'Directeur artistique',
            'Architecte d\'intérieur', 'Chef décorateur', 'Styliste', 'Créateur de mode', 'Scénographe', 'Monteur vidéo', 'Réalisateur',
            'Compositeur', 'Acteur', 'Street artiste', 'Sculpteur', 'Céramiste',

            'Avocat', 'Comptable', 'Banquier', 'Économiste', 'Trader', 'Expert-comptable', 'Consultant', 'Auditeur', 'Assureur',
            'Gestionnaire de patrimoine', 'Courtier', 'Analyste financier', 'Directeur commercial', 'Responsable marketing', 'Risk manager',
            'Chargé de relations clients', 'Gestionnaire de projet', 'Juriste', 'Business developer', 'Négociateur',

            'Pilote', 'Pompier', 'Policier', 'Boulanger', 'Cuisinier', 'Chef', 'Astronaute', 'Mécanicien', 'Électricien', 'Plombier',
            'Chauffeur', 'Agriculteur', 'Jardinier', 'Pâtissier', 'Boucher', 'Charpentier', 'Soudeur', 'Maçon', 'Peintre', 'Carreleur',

            'Serveur', 'Barman', 'Steward', 'Hôtesse de l\'air', 'Guide touristique', 'Réceptionniste', 'Agent de sécurité',
            'Coiffeur', 'Esthéticien', 'Masseur', 'Toiletteur', 'Soigneur', 'Animateur socioculturel', 'Conseiller', 'Coach sportif',
            'Manager', 'Organisateur d\'événements', 'Wedding planner', 'Community manager', 'Influenceur'
        ],
        'Sports': [
            'Football', 'Basketball', 'Rugby', 'Volleyball', 'Handball', 'Hockey sur glace', 'Baseball', 'Cricket', 'Water-polo',
            'Ultimate frisbee', 'Netball', 'Futsal', 'Kayak-polo', 'Dodgeball', 'Flag football', 'Roller hockey', 'Tchoukball',
            'Sepak takraw', 'Hurling', 'Quidditch',

            'Tennis', 'Athlétisme', 'Natation', 'Cyclisme', 'Boxe', 'Arts martiaux', 'Judo', 'Karaté', 'Taekwondo', 'Escalade',
            'Gymnastique', 'Escrime', 'Tir à l\'arc', 'Ski', 'Snowboard', 'Golf', 'Patinage', 'Surf', 'Plongeon', 'Badminton',

            'MMA', 'Lutte', 'Sumo', 'Kickboxing', 'Muay thai', 'Capoeira', 'Catch', 'Wing chun', 'Kendo', 'Aikido', 'Sambo',
            'Kung-fu','Brazilian jiu-jitsu', 'Tai-chi', 'Greco-romaine', 'Pancrace', 'Krav maga', // Extrêmes et outdoor
            'Parachutisme', 'BASE jump', 'Wingsuit', 'Skateboard', 'Parkour', 'Saut à l\'élastique', 'Motocross', 'Trail',
            'Course d\'orientation', 'Rafting', 'Canyoning', 'Spéléologie', 'Alpinisme', 'Parapente', 'Deltaplane',

            'Voile', 'Canoë-kayak', 'Aviron', 'Windsurf', 'Kitesurf', 'Paddle', 'Planche à voile', 'Jet-ski', 'Pêche',
            'Plongée sous-marine', 'Aviron', 'Stand-up paddle', 'Dragon boat',

            'Billard', 'Snooker', 'Fléchettes', 'Bowling', 'Pétanque', 'Tir sportif', 'Curling', 'Croquet', 'Échecs',
            'Go', 'Poker sportif', 'Disc golf',

            'Équitation', 'Course automobile', 'Moto GP', 'Formule 1', 'Karting', 'Rallye', 'Trial', 'Polo',
            'Course de chevaux', 'Drift', 'Enduro',

            'E-sport', 'Ultimate', 'Lasergame', 'Paintball', 'Bubble foot', 'Drone racing', 'Escalade sur glace',
            'Slackline', 'Padel', 'Hockey subaquatique', 'Roller derby', 'Crossfit', 'Strongman'
        ],
        'Chanteurs': [
            'Soprano', 'Nekfeu', 'BigFlo et Oli', 'Julien Doré', 'Angèle', 'Stromae', 'Indila', 'Maître Gims', 'Louane', 'Zaz',
            'Amir', 'Matt Pokora', 'Jean-Jacques Goldman', 'Charles Aznavour', 'Edith Piaf', 'Jacques Brel', 'Johnny Hallyday',
            'Michel Berger', 'France Gall', 'Laurent Voulzy',

            'Adele', 'Beyoncé', 'Ed Sheeran', 'Taylor Swift', 'Drake', 'Rihanna', 'Justin Bieber', 'Ariana Grande',
            'Michael Jackson', 'Lady Gaga', 'Shakira', 'Bruno Mars', 'Elton John', 'Katy Perry', 'The Weeknd', 'Dua Lipa',
            'Coldplay', 'Sia', 'Eminem', 'Madonna',

            'Radiohead', 'Muse', 'Coldplay', 'Arctic Monkeys', 'Green Day', 'Imagine Dragons', 'Twenty One Pilots',
            'Foo Fighters', 'Red Hot Chili Peppers', 'Linkin Park',

            'Kendrick Lamar', 'Post Malone', 'Travis Scott', 'J. Cole', 'Kanye West', 'Jay-Z', '50 Cent', 'Snoop Dogg',
            'Chance the Rapper', 'Drake',

            'Bruno Mars', 'Dua Lipa', 'Harry Styles', 'Billie Eilish', 'Selena Gomez', 'Charlie Puth', 'Sam Smith',
            'Ed Sheeran', 'Maroon 5', 'Shawn Mendes'
        ],
        'Films': [
            'Intouchables', 'Amélie Poulain', 'La Vie d\'Adèle', 'Astérix et Obélix', 'Les Intouchables', 'La Haine', 'Bienvenue chez les Ch\'tis',
            'Le Fabuleux Destin d\'Amélie Poulain', 'Martial', 'OSS 117',

            'Titanic', 'Star Wars', 'Le Roi Lion', 'Avatar', 'Matrix', 'Avengers', 'Jurassic Park', 'Inception', 'Divergente', 'Le Seigneur des Anneaux', 'Interstellar', 'Gladiator', 'Pirates des Caraïbes', 'Forrest Gump',
            'Le Parrain', 'Shrek', 'Fast and Furious', 'Le Monde de Nemo',

            'Toy Story', 'Le Roi Lion', 'La Reine des Neiges', 'Monstres & Cie', 'Le Monde de Dory', 'Kung Fu Panda',
            'Les Indestructibles', 'Raiponce', 'Coco', 'Big Hero 6',

            'Blade Runner', 'Dune', 'Alien', 'Predator', 'Terminator', 'Ex Machina', 'Arrival', 'Interstellar', 'Gravity',
            'Edge of Tomorrow',

            'Mission Impossible', 'John Wick', 'Mad Max', 'Jason Bourne', 'Spider-Man', 'Batman', 'Superman', 'Transformers',
            'Pacific Rim', 'Taken'
        ],
        'Personnages': [
            'Batman', 'Spider-Man', 'Superman', 'Wonder Woman', 'Iron Man', 'Capitaine America', 'Thor', 'Hulk', 'Black Panther',
            'Aquaman', 'Flash', 'Green Lantern', 'Wolverine', 'Deadpool',

            'Mickey Mouse', 'Donald Duck', 'Homer Simpson', 'Bart Simpson', 'Mario', 'Sonic', 'Pikachu', 'Bob l\'Éponge',
            'Scooby-Doo', 'Bugs Bunny', 'Tom et Jerry', 'Les Pokémon',

            'Dark Vador', 'James Bond', 'Gollum', 'Jack Sparrow', 'Indiana Jones', 'Neo', 'Sherlock Holmes',
            'Luke Skywalker', 'Princesse Leia', 'Hermione Granger', 'Ron Weasley',

            'Napoléon', 'Cléopâtre', 'Albert Einstein', 'Marie Curie', 'Gandalf', 'Merlin', 'Zeus', 'Achille', 'Robin des Bois',
            'Don Quichotte',

            'Lara Croft', 'Kratos', 'Master Chief', 'Link', 'Samus Aran', 'Ezio Auditore', 'Cloud Strife', 'Solid Snake',
            'Gordon Freeman', 'Nathan Drake'
        ]
    },
    // Reste de la structure du jeu (inchangé)
    players: [],
    teams: [],
    selectedCategories: [],
    cardsPerPlayer: 5,
    timerSeconds: 60,
    currentRound: 1,
    currentTeam: 0,
    currentPlayerIndex: 0,
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
    stats: {
        cardsFoundByTeam: [],
        cardsFoundByRound: [0, 0, 0],
        timePerCard: [],
        passedCardsCount: 0
    },
    soundEnabled: true
};


// Ajouter ces propriétés à gameData
function initSoundSystem() {
    if (!gameData.sound) {
        gameData.sound = {
            enabled: true,
            volume: 0.7,
            currentPack: 'default'
        };
    }

    if (!gameData.vibration) {
        gameData.vibration = {
            enabled: true
        };
    }

    // Charger les préférences sauvegardées si elles existent
    loadSoundPreferences();
}

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
        addDynamicStyles();
        initGame();
        console.log("Jeu initialisé avec succès");
    } catch (error) {
        console.error("Erreur lors de l'initialisation du jeu:", error);
    }
});

// Ajouter des styles CSS dynamiques pour les animations
function addDynamicStyles() {
    if (!document.getElementById('dynamic-game-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'dynamic-game-styles';
        styleSheet.innerHTML = `
            .shake-animation {
                animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            
            #card-word {
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            
            .game-card:hover {
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

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

// Fonction pour animer le flip de carte
function animateCardFlip() {
    const cardElement = document.getElementById('card-word');
    cardElement.classList.add('card-flip-enter');

    setTimeout(() => {
        cardElement.classList.remove('card-flip-enter');
    }, 600);
}

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
        cardsRemainingDisplay.innerHTML = `<i class="fas fa-clone"></i> Cartes restantes: ${gameData.roundCards.length}`;
    }
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

            // Animation pour l'ajout de joueur
            const newPlayerItem = playerList.lastElementChild;
            if (newPlayerItem) {
                newPlayerItem.style.animation = 'fadeIn 0.5s ease';
            }
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
        removeButton.innerHTML = '<i class="fas fa-times"></i>';
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
        // Afficher un toast d'erreur
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Veuillez ajouter au moins 2 joueurs.';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
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
            <h3><i class="fas fa-users"></i> Équipe ${i + 1}</h3>
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
        // Afficher un toast d'erreur
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Chaque équipe doit avoir au moins un joueur.';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
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
            <span>Sons <i class="fas fa-volume-up"></i></span>
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

        // Ajouter un écouteur pour mettre à jour les catégories sélectionnées
        input.addEventListener('change', updateSelectedCategories);

        const label = document.createElement('label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;

        div.appendChild(input);
        div.appendChild(label);
        categoriesContainer.appendChild(div);
    });

    // Ajouter l'amélioration des checkboxes
    enhanceCategoryCheckboxes();

    // Initialiser les catégories sélectionnées
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
        // Afficher un toast d'erreur
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Veuillez sélectionner au moins une catégorie.';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
        return;
    }

    // Generate cards
    generateGameCards();

    // Appliquer à nouveau le filtre de difficulté aux cartes générées
    if (typeof filterWordsByDifficulty === 'function') {
        filterWordsByDifficulty();
    }

    // Vérifier qu'il y a bien des cartes générées
    if (gameData.gameCards.length === 0) {
        // Afficher un toast d'erreur
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Aucune carte n\'a été générée. Veuillez sélectionner plus de catégories ou augmenter le nombre de cartes par joueur.';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
        return;
    }

    console.log(`${gameData.gameCards.length} cartes générées pour le jeu`);

    // Initialize game state
    gameData.currentRound = 1;
    gameData.currentTeam = 0;
    gameData.currentPlayerIndex = 0;

    // Prepare for first round
    prepareRound();

    // Appliquer le filtre aux cartes de la manche également
    if (typeof applyDifficultyToCurrentRound === 'function') {
        applyDifficultyToCurrentRound();
    }

    // Vérifier que des cartes sont disponibles pour la première manche
    if (gameData.roundCards.length === 0) {
        // Afficher un toast d'erreur
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> Erreur : aucune carte n\'est disponible pour commencer le jeu.';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
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

    // Afficher un toast de démarrage
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = '<i class="fas fa-play"></i> La partie commence !';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 2000);
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
        nextCardButton.innerHTML = '<i class="fas fa-check"></i> Trouvé !';
    } else {
        passCardButton.disabled = false;
        passCardButton.classList.remove('btn-disabled');
        nextCardButton.innerHTML = '<i class="fas fa-check"></i> Trouvé !';
        passCardButton.innerHTML = '<i class="fas fa-forward"></i> Passer';
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
    if (document.getElementById('timer-progress-fill')) {
        const progressFill = document.getElementById('timer-progress-fill');

        if (timeLeft !== undefined) {
            const percentage = (timeLeft / gameData.timerSeconds) * 100;
            progressFill.style.width = `${percentage}%`;

            // Changement de couleur selon le temps restant
            if (percentage > 60) {
                progressFill.style.background = 'linear-gradient(90deg, var(--success-color), #85ffbb)';
                progressFill.classList.remove('low-time');
            } else if (percentage > 30) {
                progressFill.style.background = 'linear-gradient(90deg, var(--warning-color), #ffcc80)';
                progressFill.classList.remove('low-time');
            } else {
                progressFill.style.background = 'linear-gradient(90deg, var(--error-color), #ff7b7b)';
                progressFill.classList.add('low-time');
            }

            // Ajouter une animation de pulsation quand il reste peu de temps
            if (percentage <= 20) {
                timerDisplay.classList.add('pulse-animation');
            } else {
                timerDisplay.classList.remove('pulse-animation');
            }
        } else {
            progressFill.style.width = '100%';
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), #ff7b7b)';
            progressFill.classList.remove('low-time');
            timerDisplay.classList.remove('pulse-animation');
        }
    }
}

// Remplacer la fonction showCurrentCard existante
function showCurrentCard() {
    if (gameData.roundCards.length === 0) {
        // Pas de cartes disponibles du tout
        const cardCategory = document.getElementById('card-category');
        const cardWord = document.getElementById('card-word');
        if (cardCategory) cardCategory.textContent = '';
        if (cardWord) cardWord.textContent = 'Plus de cartes!';

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

    // Effet de flip 3D pour la carte
    flipCard();
}

// Pour initialiser la carte 3D
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter ce code à la fin de votre fonction initGame()
    if (!gameData.effects) {
        gameData.effects = {
            tiltEnabled: true,
            animationsEnabled: true
        };
    }

    // Configurer la structure de carte 3D après que le DOM est complètement chargé
    setTimeout(() => {
        setupCardStructure();
    }, 500);
});

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

        // Animation de la carte
        const gameCard = document.querySelector('.game-card');
        gameCard.style.borderColor = 'var(--success-color)';
        gameCard.style.boxShadow = '0 0 15px rgba(78, 255, 145, 0.3)';

        setTimeout(() => {
            gameCard.style.borderColor = 'var(--primary-color)';
            gameCard.style.boxShadow = '';
            cardWord.classList.remove('card-found-animation');
        }, 700);

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

        // Animation de la carte
        const gameCard = document.querySelector('.game-card');
        gameCard.style.borderColor = 'var(--secondary-color)';
        setTimeout(() => {
            gameCard.style.borderColor = 'var(--primary-color)';
        }, 500);

        setTimeout(() => {
            cardWord.classList.remove('card-pass-animation');
        }, 700);

        // Important: Au lieu de déplacer vers passedCards, on déplace simplement
        // la carte actuelle à la fin du paquet de cartes actuel
        const currentCard = gameData.roundCards[gameData.currentCardIndex];

        // Supprimer la carte de sa position actuelle
        gameData.roundCards.splice(gameData.currentCardIndex, 1);

        // L'ajouter à la fin du paquet
        gameData.roundCards.push(currentCard);

        // Petit message pour informer que la carte a été déplacée à la fin
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-redo-alt"></i> Carte déplacée à la fin du paquet';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 1500);

        // Update cards remaining display
        updateCardsRemaining();

        // Afficher la carte suivante
        showCurrentCard();
    }
}

function timerEnded() {
    nextCardButton.disabled = true;
    passCardButton.disabled = true;
    endTurnButton.classList.remove('hidden');

    // Effet de vibration sur la carte
    const gameCard = document.querySelector('.game-card');
    gameCard.classList.add('shake-animation');
    setTimeout(() => {
        gameCard.classList.remove('shake-animation');
    }, 500);

    // Jouer un son et ajouter une animation
    playSound('timer-end');
    timerDisplay.classList.add('timer-end-animation');

    // Ajouter un message de fin de temps
    if (!document.querySelector('.time-up-message')) {
        const timeUpMsg = document.createElement('div');
        timeUpMsg.className = 'toast-message time-up-message';
        timeUpMsg.innerHTML = '<i class="fas fa-clock"></i> Temps écoulé !';
        document.body.appendChild(timeUpMsg);

        setTimeout(() => {
            timeUpMsg.classList.add('fade-out');
            setTimeout(() => {
                timeUpMsg.remove();
            }, 500);
        }, 2000);
    }

    setTimeout(() => {
        timerDisplay.classList.remove('timer-end-animation');
    }, 1500);
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
    currentTeamDisplay.innerHTML = `<i class="fas fa-users"></i> Équipe ${gameData.currentTeam + 1} - Joueur: ${currentPlayer}`;
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
                <p class="next-player-info"><i class="fas fa-user-circle"></i> La manche ${gameData.currentRound + 1} commencera avec 
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

    // Ajouter une petite animation aux scores
    scoresTable.classList.add('animate-scores');

    gameData.teams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.style.animation = `fadeIn ${0.3 + index * 0.1}s ease forwards`;

        // Team name
        const teamCell = document.createElement('td');
        teamCell.innerHTML = `<i class="fas fa-users"></i> Équipe ${index + 1}`;
        row.appendChild(teamCell);

        // Scores for each round
        let totalScore = 0;
        gameData.scores[index].forEach((score, roundIndex) => {
            const scoreCell = document.createElement('td');
            scoreCell.textContent = score;

            // Ajouter un style spécial au score de la manche actuelle
            if (roundIndex === gameData.currentRound - 1) {
                scoreCell.style.color = 'var(--primary-color)';
                scoreCell.style.fontWeight = 'bold';
            }

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
    toast.innerHTML = `<i class="fas fa-play-circle"></i> ${currentPlayer} (Équipe ${gameData.currentTeam + 1}) commence la manche ${gameData.currentRound}`;
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
        row.style.animation = `fadeIn ${0.3 + index * 0.1}s ease forwards`;

        // Team name
        const teamCell = document.createElement('td');
        teamCell.innerHTML = `<i class="fas fa-users"></i> Équipe ${index + 1}`;
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
        winnerDisplay.innerHTML = `<h3><i class="fas fa-trophy"></i> L'équipe ${winnerIndex + 1} gagne avec ${highestScore} points!</h3>`;
    } else {
        winnerDisplay.innerHTML = '<h3><i class="fas fa-balance-scale"></i> Égalité!</h3>';
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

    // 1. Statistiques par manche avec animations
    const roundStats = document.createElement('div');
    roundStats.className = 'stats-section';

    // Calculer la valeur maximale pour normaliser les barres
    const maxRoundValue = Math.max(...gameData.stats.cardsFoundByRound, 1);

    roundStats.innerHTML = `
        <h4><i class="fas fa-chart-bar"></i> Mots trouvés par manche</h4>
        <div class="stats-chart">
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[0] / maxRoundValue) * 100}%">
                <span class="bar-value">${gameData.stats.cardsFoundByRound[0]}</span>
            </div>
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[1] / maxRoundValue) * 100}%">
                <span class="bar-value">${gameData.stats.cardsFoundByRound[1]}</span>
            </div>
            <div class="chart-bar" style="height: ${(gameData.stats.cardsFoundByRound[2] / maxRoundValue) * 100}%">
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

    let teamStatsHTML = '<h4><i class="fas fa-users"></i> Performance des équipes</h4><ul class="team-stats-list">';
    gameData.teams.forEach((team, index) => {
        const totalScore = gameData.scores[index].reduce((a, b) => a + b, 0);
        teamStatsHTML += `<li>Équipe ${index + 1}: <span class="team-stat-value">${totalScore} mots</span></li>`;
    });
    teamStatsHTML += '</ul>';
    teamStats.innerHTML = teamStatsHTML;

    // 3. Autres statistiques
    const passedStats = document.createElement('div');
    passedStats.className = 'stats-section';

    const totalWordsFound = gameData.stats.cardsFoundByRound.reduce((a, b) => a + b, 0);
    const totalCardsPlayed = totalWordsFound + gameData.stats.passedCardsCount;
    const successRate = totalCardsPlayed > 0 ? ((totalWordsFound / totalCardsPlayed) * 100).toFixed(1) : 0;

    passedStats.innerHTML = `
        <h4><i class="fas fa-chart-pie"></i> Autres statistiques</h4>
        <p>Nombre de mots trouvés: <span class="stat-highlight">${totalWordsFound}</span></p>
        <p>Nombre de mots passés: <span class="stat-highlight">${gameData.stats.passedCardsCount}</span></p>
        <p>Taux de réussite: <span class="stat-highlight">${successRate}%</span></p>
        <p>Total de mots joués: <span class="stat-highlight">${totalCardsPlayed}</span></p>
    `;

    // Assembler les statistiques
    statsContent.appendChild(roundStats);
    statsContent.appendChild(teamStats);
    statsContent.appendChild(passedStats);
    statsContainer.appendChild(statsContent);

    // Ajouter les statistiques à la page
    document.getElementById('winner-display').after(statsContainer);
}

function setupCardStructure() {
    const gameCard = document.querySelector('.game-card');
    if (!gameCard || gameCard.querySelector('.card-inner')) return;

    // Sauvegarder le contenu original
    const category = document.getElementById('card-category');
    const word = document.getElementById('card-word');
    const originalContent = {
        category: category.innerHTML,
        word: word.innerHTML
    };

    // Vider la carte
    gameCard.innerHTML = '';

    // Créer la structure de carte 3D
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';

    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';

    // Recréer les éléments de catégorie et mot
    const newCategory = document.createElement('div');
    newCategory.id = 'card-category';
    newCategory.className = 'card-category';
    newCategory.innerHTML = originalContent.category;

    const newWord = document.createElement('div');
    newWord.id = 'card-word';
    newWord.innerHTML = originalContent.word;

    // Ajouter les éléments dans l'ordre correct
    cardFront.appendChild(newCategory);
    cardFront.appendChild(newWord);

    // Ajouter un dos de carte
    const cardBackContent = document.createElement('div');
    cardBackContent.innerHTML = '<div class="card-logo"></div>';
    cardBack.appendChild(cardBackContent);

    // Assembler la carte
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    gameCard.appendChild(cardInner);

    // Ajouter effet de tilt au survol
    setupTiltEffect(gameCard);
}

// Effet d'inclinaison au survol (tilt)
function setupTiltEffect(card) {
    card.addEventListener('mousemove', e => {
        if (!gameData.effects || !gameData.effects.tiltEnabled) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculer la position relative de la souris par rapport au centre de la carte
        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;

        // Calculer l'inclinaison (max 10 degrés)
        const tiltX = -(deltaY / (cardRect.height / 2)) * 10;
        const tiltY = (deltaX / (cardRect.width / 2)) * 10;

        // Appliquer la transformation
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    // Réinitialiser quand la souris quitte la carte
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// Animation de flip pour les cartes
function flipCard() {
    const gameCard = document.querySelector('.game-card');
    if (!gameCard) return;

    // Ajouter la classe pour l'animation de flip
    gameCard.classList.add('card-flip');

    // Attendre la fin de l'animation pour afficher le contenu
    setTimeout(() => {
        // Mettre à jour le contenu
        const card = gameData.roundCards[gameData.currentCardIndex];
        const cardCategory = document.getElementById('card-category');
        const cardWord = document.getElementById('card-word');

        if (cardCategory && cardWord && card) {
            cardCategory.textContent = card.category;
            cardWord.textContent = card.word;
        }

        // Retourner la carte pour montrer le contenu
        gameCard.classList.remove('card-flip');
    }, 300);
}

// Sauvegarder les préférences de son dans localStorage
function saveSoundPreferences() {
    try {
        const soundPrefs = {
            soundEnabled: gameData.sound.enabled,
            soundVolume: gameData.sound.volume,
            soundPack: gameData.sound.currentPack,
            vibrationEnabled: gameData.vibration.enabled
        };

        localStorage.setItem('timesdoneSoundPrefs', JSON.stringify(soundPrefs));
    } catch (e) {
        console.warn('Impossible de sauvegarder les préférences de son:', e);
    }
}

// Charger les préférences de son depuis localStorage
function loadSoundPreferences() {
    try {
        const savedPrefs = localStorage.getItem('timesdoneSoundPrefs');
        if (savedPrefs) {
            const prefs = JSON.parse(savedPrefs);

            gameData.sound.enabled = prefs.soundEnabled !== undefined ? prefs.soundEnabled : true;
            gameData.sound.volume = prefs.soundVolume !== undefined ? prefs.soundVolume : 0.7;
            gameData.sound.currentPack = prefs.soundPack || 'default';
            gameData.vibration.enabled = prefs.vibrationEnabled !== undefined ? prefs.vibrationEnabled : true;
        }
    } catch (e) {
        console.warn('Impossible de charger les préférences de son:', e);
    }
}

// Fonction pour jouer un son avec les nouvelles configurations
function playSound(soundType) {
    try {
        if (!gameData.sound.enabled) return;

        // Utiliser le pack de sons actuel
        const currentPack = gameData.sound.currentPack;
        let soundPath = soundConfig[currentPack][soundType] || soundConfig['default'][soundType];

        if (!soundPath) {
            soundPath = soundConfig['default']['click'];
        }

        // Vérifier si le fichier son existe
        fetch(soundPath)
            .then(response => {
                if (response.ok) {
                    // Le fichier son existe, on peut le jouer
                    const sound = new Audio(soundPath);
                    sound.volume = gameData.sound.volume;
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

        // Jouer la vibration si activée et supportée par le navigateur
        if (gameData.vibration.enabled && 'vibrate' in navigator) {
            const pattern = vibrationPatterns[soundType] || [50];
            navigator.vibrate(pattern);
        }

    } catch (error) {
        console.error("Erreur lors de la lecture du son:", error);
    }
}

// Ajouter un écran de configuration des sons
function createSoundSettingsUI() {
    const settingsContainer = document.createElement('div');
    settingsContainer.id = 'sound-settings';
    settingsContainer.className = 'sound-settings hidden';

    settingsContainer.innerHTML = `
    <div class="settings-card">
      <h3><i class="fas fa-volume-up"></i> Paramètres sonores</h3>
      <div class="settings-row">
        <label>Sons activés</label>
        <div class="toggle-switch">
          <input type="checkbox" id="sound-enabled" ${gameData.sound.enabled ? 'checked' : ''}>
          <span class="toggle-slider"></span>
        </div>
      </div>
      <div class="settings-row">
        <label>Volume</label>
        <input type="range" id="sound-volume" min="0" max="1" step="0.1" value="${gameData.sound.volume}">
      </div>
      <div class="settings-row">
        <label>Pack de sons</label>
        <select id="sound-pack">
          <option value="default" ${gameData.sound.currentPack === 'default' ? 'selected' : ''}>Standard</option>
          <option value="futuristic" ${gameData.sound.currentPack === 'futuristic' ? 'selected' : ''}>Futuriste</option>
          <option value="funny" ${gameData.sound.currentPack === 'funny' ? 'selected' : ''}>Comique</option>
        </select>
      </div>
      <div class="settings-row">
        <label>Vibrations</label>
        <div class="toggle-switch">
          <input type="checkbox" id="vibration-enabled" ${gameData.vibration.enabled ? 'checked' : ''}>
          <span class="toggle-slider"></span>
        </div>
      </div>
      <div class="settings-actions">
        <button id="test-sound" class="btn-secondary"><i class="fas fa-play"></i> Tester</button>
        <button id="save-sound-settings" class="btn-accent"><i class="fas fa-save"></i> Sauvegarder</button>
      </div>
    </div>
  `;

    document.body.appendChild(settingsContainer);

    // Ajouter les événements
    document.getElementById('sound-enabled').addEventListener('change', function(e) {
        gameData.sound.enabled = e.target.checked;
    });

    document.getElementById('sound-volume').addEventListener('input', function(e) {
        gameData.sound.volume = parseFloat(e.target.value);
    });

    document.getElementById('sound-pack').addEventListener('change', function(e) {
        gameData.sound.currentPack = e.target.value;
    });

    document.getElementById('vibration-enabled').addEventListener('change', function(e) {
        gameData.vibration.enabled = e.target.checked;
    });

    document.getElementById('test-sound').addEventListener('click', function() {
        playSound('card-found');
        setTimeout(() => playSound('card-pass'), 700);
        setTimeout(() => playSound('timer-end'), 1400);
    });

    document.getElementById('save-sound-settings').addEventListener('click', function() {
        saveSoundPreferences();
        document.getElementById('sound-settings').classList.add('hidden');

        // Afficher un toast de confirmation
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = '<i class="fas fa-check-circle"></i> Paramètres sonores sauvegardés';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    });

    // Ajouter un bouton pour accéder aux paramètres sonores
    addSoundSettingsButton();
}

// Ajouter un bouton pour accéder aux paramètres sonores
function addSoundSettingsButton() {
    // Vérifier si le bouton existe déjà
    if (document.getElementById('open-sound-settings')) return;

    const soundToggle = document.querySelector('.sound-toggle');
    if (soundToggle) {
        const settingsButton = document.createElement('button');
        settingsButton.id = 'open-sound-settings';
        settingsButton.className = 'sound-settings-button';
        settingsButton.innerHTML = '<i class="fas fa-cog"></i>';
        settingsButton.title = 'Paramètres sonores';

        soundToggle.appendChild(settingsButton);

        settingsButton.addEventListener('click', function() {
            document.getElementById('sound-settings').classList.remove('hidden');
        });
    }
}

// Améliorer l'ergonomie des checkboxes de catégories
function enhanceCategoryCheckboxes() {
    // Sélectionner toutes les divs de catégories
    const categoryDivs = document.querySelectorAll('.category-checkbox');

    // Ajouter un écouteur d'événements à chaque div
    categoryDivs.forEach(div => {
        div.addEventListener('click', function(event) {
            // Ne pas déclencher si on a cliqué directement sur la checkbox
            if (event.target.type !== 'checkbox') {
                // Trouver la checkbox à l'intérieur de cette div
                const checkbox = this.querySelector('input[type="checkbox"]');
                // Inverser l'état de la checkbox
                checkbox.checked = !checkbox.checked;

                // Déclencher un événement de changement pour mettre à jour les catégories sélectionnées
                const changeEvent = new Event('change');
                checkbox.dispatchEvent(changeEvent);

                // Mettre à jour les catégories sélectionnées
                updateSelectedCategories();
            }
        });
    });
}

// Initialiser le système de sons lors du chargement
document.addEventListener('DOMContentLoaded', function() {
    initSoundSystem();

    // Ajouter l'interface de paramètres sonores après le chargement complet
    setTimeout(() => {
        createSoundSettingsUI();
    }, 1000);
});