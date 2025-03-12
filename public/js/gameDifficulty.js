// Système de difficulté pour le jeu Time's Done

// Configuration des niveaux de difficulté
const difficultyLevels = {
    easy: {
        name: "Facile",
        timerDuration: 75, // en secondes
        description: "Temps plus long et mots plus simples",
        pointMultiplier: 1 // Multiplicateur de points
    },
    medium: {
        name: "Normal",
        timerDuration: 60,
        description: "Équilibré pour tous les joueurs",
        pointMultiplier: 1.5
    },
    hard: {
        name: "Difficile",
        timerDuration: 45,
        description: "Temps réduit et mots plus complexes",
        pointMultiplier: 2
    },
    expert: {
        name: "Expert",
        timerDuration: 30,
        description: "Pour les joueurs expérimentés",
        pointMultiplier: 3
    }
};

// Catégorisation des mots par difficulté
const wordsByDifficulty = {
    // Animaux
    "Animaux": {
        easy: [
            "Chien", "Chat", "Cheval", "Lion", "Tigre", "Éléphant", "Girafe", "Singe", "Cerf", "Loup",
            "Ours", "Renard", "Zèbre", "Panda", "Koala", "Kangourou", "Chameau", "Écureuil", "Dauphin",
            "Canard", "Oie", "Cygne", "Moineau", "Merle", "Pie", "Perroquet", "Ara", "Perruche"
        ],
        medium: [
            "Rhinocéros", "Blaireau", "Lynx", "Loutre", "Sanglier", "Guépard", "Hyène", "Panthère",
            "Morse", "Bison", "Caribou", "Tapir", "Hippopotame", "Léopard", "Yack", "Wombat", "Wallaby",
            "Ouistiti", "Mandrill", "Gorille", "Chimpanzé", "Raton laveur", "Mouflon", "Bélier", "Chamois",
            "Martre", "Hermine", "Autruche", "Toucan", "Flamant rose", "Chouette", "Paon", "Oiseau-mouche",
            "Pingouin", "Oiseau-lyre", "Faisan", "Martin-pêcheur", "Grue", "Héron"
        ],
        hard: [
            "Aigle", "Hibou", "Manchot", "Albatros", "Condor", "Vautour", "Crocodile", "Serpent",
            "Caméléon", "Tortue", "Iguane", "Gecko", "Salamandre", "Grenouille", "Crapaud", "Lézard",
            "Anaconda", "Python", "Vipère", "Cobra", "Komodo", "Alligator", "Serpent de mer", "Tortue géante",
            "Caïman", "Triton", "Fourmi", "Abeille", "Papillon", "Scarabée", "Libellule", "Mante religieuse",
            "Guêpe", "Coccinelle", "Criquet", "Sauterelle", "Cafard", "Termite", "Scorpion", "Araignée",
            "Mouche", "Moustique", "Ver de terre", "Escargot", "Limace"
        ],
        expert: [
            "Méduse", "Sardine", "Saumon", "Requin", "Thon", "Carpe", "Esturgeon", "Raie", "Anguille",
            "Piranha", "Poisson-clown", "Mérou", "Bar", "Truite", "Maquereau", "Anchois", "Sole", "Marlin",
            "Barracuda", "Espadon", "Raie manta", "Ornithorynque"
        ]
    },

    // Chanteurs
    "Chanteurs": {
        easy: [
            "Adele", "Beyoncé", "Ed Sheeran", "Taylor Swift", "Drake", "Rihanna", "Justin Bieber",
            "Ariana Grande", "Michael Jackson", "Lady Gaga", "Shakira", "Bruno Mars", "Elton John",
            "Katy Perry", "The Weeknd", "Dua Lipa"
        ],
        medium: [
            "Soprano", "Nekfeu", "BigFlo et Oli", "Julien Doré", "Angèle", "Stromae", "Indila",
            "Maître Gims", "Louane", "Zaz", "Amir", "Matt Pokora"
        ],
        hard: [
            "Jean-Jacques Goldman", "Charles Aznavour", "Edith Piaf", "Jacques Brel", "Johnny Hallyday",
            "Michel Berger", "France Gall", "Laurent Voulzy"
        ],
        expert: [
            "BigFlo et Oli", "Nekfeu"
        ]
    },

    // Films
    "Films": {
        easy: [
            "Titanic", "Star Wars", "Le Roi Lion", "Avatar", "Avengers", "Jurassic Park",
            "Le Seigneur des Anneaux"
        ],
        medium: [
            "Intouchables", "Amélie Poulain", "Astérix et Obélix", "Bienvenue chez les Ch'tis",
            "Le Fabuleux Destin d'Amélie Poulain", "Gladiator", "Interstellar"
        ],
        hard: [
            "Matrix", "Inception", "Divergente", "La Vie d'Adèle", "La Haine"
        ],
        expert: [
            "La Haine", "Divergente"
        ]
    },

    // Personnages
    "Personnages": {
        easy: [
            "Batman", "Spider-Man", "Superman", "Iron Man", "Capitaine America", "Thor", "Hulk",
            "Black Panther", "Aquaman", "Flash", "Mickey Mouse", "Donald Duck", "Homer Simpson",
            "Bart Simpson", "Mario", "Sonic", "Pikachu", "Bob l'Éponge", "Scooby-Doo", "Bugs Bunny",
            "Tom et Jerry"
        ],
        medium: [
            "Wonder Woman", "Green Lantern", "Wolverine", "Deadpool", "Luke Skywalker",
            "Princesse Leia", "Hermione Granger", "Ron Weasley", "Dark Vador", "James Bond",
            "Jack Sparrow", "Indiana Jones", "Sherlock Holmes", "Napoléon", "Cléopâtre",
            "Albert Einstein", "Marie Curie", "Gandalf", "Merlin", "Zeus", "Achille", "Robin des Bois"
        ],
        hard: [
            "Gollum", "Neo", "Don Quichotte", "Lara Croft", "Kratos", "Master Chief", "Link",
            "Samus Aran", "Ezio Auditore", "Cloud Strife", "Solid Snake", "Gordon Freeman", "Nathan Drake"
        ],
        expert: [
            "Gollum", "Don Quichotte", "Zeus", "Achille"
        ]
    },

    // Sports
    "Sports": {
        easy: [
            "Football", "Basketball", "Rugby", "Volleyball", "Handball", "Hockey sur glace", "Baseball",
            "Tennis", "Natation", "Cyclisme", "Boxe"
        ],
        medium: [
            "Cricket", "Water-polo", "Ultimate frisbee", "Netball", "Futsal", "Dodgeball",
            "Flag football", "Roller hockey", "Golf", "Ski", "Snowboard", "Patinage", "Surf", "Plongeon",
            "Badminton", "Tir à l'arc", "Gymnastique", "Escalade", "Escrime", "Arts martiaux", "Judo",
            "Karaté", "Taekwondo", "Athlétisme"
        ],
        hard: [
            "Tchoukball", "Sepak takraw", "Hurling",
        ],
        expert: [
"Dragon boat"
        ]
    },

    // Pays
    "Pays": {
        easy: [
            "France", "Allemagne", "Royaume-Uni", "Italie", "Espagne", "États-Unis", "Canada",
            "Brésil", "Argentine", "Mexique", "Chine", "Japon", "Inde", "Russie", "Australie"
        ],
        medium: [
            "Ukraine", "Pologne", "Roumanie", "République Tchèque", "Portugal", "Suède", "Norvège",
            "Finlande", "Danemark", "Pays-Bas", "Belgique", "Suisse", "Autriche", "Grèce", "Hongrie",
            "Turquie", "Iran", "Indonésie", "Thaïlande", "Malaisie", "Vietnam", "Philippines", "Pakistan",
            "Bangladesh", "Corée du Sud", "Égypte", "Afrique du Sud", "Nigeria", "Kenya", "Maroc", "Algérie"
        ],
        hard: [
            "Serbie", "Croatie", "Bulgarie", "Slovaquie", "Irlande", "Islande", "Luxembourg", "Chypre", "Malte",
            "Colombie", "Chili", "Pérou", "Venezuela", "Équateur", "Cuba", "République Dominicaine", "Jamaïque",
            "Costa Rica", "Panama", "Uruguay", "Paraguay", "Bolivie", "Honduras", "El Salvador", "Sri Lanka",
            "Singapour", "Kazakhstan", "Ouzbékistan", "Taïwan", "Mongolie", "Népal", "Éthiopie", "Ghana",
            "Tanzanie", "Cameroun", "Angola", "Zimbabwe", "Maurice", "Madagascar", "Sénégal", "Tunisie",
            "Côte d'Ivoire", "Gabon", "République Démocratique du Congo", "Mozambique"
        ],
        expert: [
            "Fidji", "Papouasie-Nouvelle-Guinée", "Îles Salomon", "Vanuatu", "Samoa", "Tonga"
        ]
    },

    // Métiers
    "Métiers": {
        easy: [
            "Médecin", "Infirmier", "Chirurgien", "Dentiste", "Psychologue", "Pharmacien", "Vétérinaire",
            "Enseignant", "Professeur", "Directeur d'école", "Instituteur", "Animateur", "Surveillant",
            "Bibliothécaire", "Chercheur", "Informaticien", "Développeur"
        ],
        medium: [
            "Physiothérapeute", "Nutritionniste", "Sage-femme", "Radiologue", "Psychiatre", "Orthophoniste",
            "Thérapeute", "Opticien", "Ambulancier", "Technicien de laboratoire", "Diététicien",
            "Ergothérapeute", "Professeur des universités", "Conseiller pédagogique", "Formateur",
            "Documentaliste", "Coach scolaire", "Orthopédagogue", "Tuteur", "Inspecteur académique",
            "Éducateur spécialisé", "Conseiller d'orientation", "Professeur de langue", "Archiviste",
            "Ingénieur logiciel", "Cybersécurité", "Concepteur UX/UI", "Analyste système", "Technicien",
            "Technicien réseau", "Programmeur", "Consultant IT", "Testeur logiciel"
        ],
        hard: [
            "Architecte réseau", "Administrateur base de données", "Cloud architect", "Expert en IA",
            "Ingénieur système", "Architecte", "Product manager", "Responsable innovation"
        ],
        expert: [
            "Data scientist"
        ]
    },

    // Objets
    "Objets": {
        easy: [
            "Téléphone", "Ordinateur", "Tablette", "Écouteurs", "Drone", "Console de jeux", "Appareil photo",
            "Caméra", "Montre connectée", "Table", "Chaise", "Canapé", "Lit", "Armoire", "Bibliothèque",
            "Bureau", "Commode", "Étagère", "Miroir", "Lampe", "Horloge", "Tapis", "Coussin", "Parapluie",
            "Stylo", "Livre", "Clés", "Chargeur", "Bouteille", "Sac", "Valise", "Portefeuille", "Gourde"
        ],
        medium: [
            "Smartwatch", "Enceinte intelligente", "Casque VR", "Routeur", "Batterie externe", "Clé USB",
            "Disque dur", "Imprimante", "Scanner", "Projecteur", "Kindle", "Suspension", "Applique",
            "Paravent", "Buffet", "Console", "Tabouret", "Réfrigérateur", "Four", "Micro-ondes",
            "Machine à café", "Grille-pain", "Mixeur", "Bouilloire", "Robot cuiseur", "Machine à pain",
            "Machine à espresso", "Ventilateur", "Climatiseur", "Aspirateur", "Fer à repasser",
            "Machine à laver", "Sèche-linge", "Lave-vaisselle", "Hotte", "Plaque de cuisson",
            "Robot multifonction", "Lunettes", "Sac à dos", "Trousse", "Étui", "Porte-documents",
            "Ceinture", "Chapeau", "Écharpe", "Gants", "Guitare", "Piano", "Violon", "Ballon", "Raquette",
            "Jeu de société", "Vélo", "Skateboard", "Manette", "Carte à jouer", "Puzzle", "Poupée", "Peluche"
        ],
        hard: [
            "Marteau", "Tournevis", "Perceuse", "Scie", "Clé", "Niveau", "Mètre", "Pince", "Échelle",
            "Établi", "Ponceuse", "Tronçonneuse", "Visseuse", "Compresseur", "Chalumeau", "Meuleuse",
            "Soudure", "Multimètre", "Testeur", "Câble", "Jumelles", "Télescope", "Microscope", "Palette",
            "Pinceau"
        ],
        expert: [
            "Drone", "Routeur", "Casque VR", "Compresseur", "Chalumeau", "Meuleuse", "Soudure",
            "Multimètre", "Testeur", "Microscope", "Télescope", "Robot multifonction"
        ]
    }
};

// Ajouter cette propriété à gameData pour stocker le niveau de difficulté
function initDifficultySystem() {
    if (!gameData.difficulty) {
        gameData.difficulty = {
            currentLevel: 'medium', // Par défaut
            enableWordFiltering: true,
            scoreMultiplier: true
        };
    }

    // Charger les préférences sauvegardées
    loadDifficultySettings();
}

// Sauvegarder les paramètres de difficulté
function saveDifficultySettings() {
    try {
        localStorage.setItem('timesdoneDifficulty', JSON.stringify(gameData.difficulty));
    } catch (e) {
        console.warn('Impossible de sauvegarder les paramètres de difficulté:', e);
    }
}

// Charger les paramètres de difficulté
function loadDifficultySettings() {
    try {
        const saved = localStorage.getItem('timesdoneDifficulty');
        if (saved) {
            const settings = JSON.parse(saved);
            gameData.difficulty = {...gameData.difficulty, ...settings};
        }
    } catch (e) {
        console.warn('Impossible de charger les paramètres de difficulté:', e);
    }
}

// Filtrer les mots selon le niveau de difficulté
function filterWordsByDifficulty() {
    // Si le filtrage n'est pas activé, sortir de la fonction
    if (!gameData.difficulty || !gameData.difficulty.enableWordFiltering) return;

    console.log("Filtrage des mots selon la difficulté:", gameData.difficulty.currentLevel);
    console.log("Nombre de cartes avant filtrage:", gameData.gameCards.length);

    const level = gameData.difficulty.currentLevel;
    const availableLevels = ['easy', 'medium', 'hard', 'expert'];
    const levelIndex = availableLevels.indexOf(level);

    // Garder seulement les mots de niveau <= au niveau actuel
    const allowedLevels = availableLevels.slice(0, levelIndex + 1);
    console.log("Niveaux autorisés:", allowedLevels);

    // Filtrer les cartes
    const filteredCards = gameData.gameCards.filter(card => {
        const category = card.category;
        const word = card.word;

        // Si la catégorie n'existe pas dans wordsByDifficulty, garder la carte
        if (!wordsByDifficulty[category]) {
            return true;
        }

        // Vérifier si le mot est dans un niveau autorisé
        for (const allowedLevel of allowedLevels) {
            if (wordsByDifficulty[category][allowedLevel] &&
                wordsByDifficulty[category][allowedLevel].includes(word)) {
                return true;
            }
        }

        // En mode expert, garder tous les mots
        if (level === 'expert') return true;

        // Par défaut, considérer les mots non classifiés comme 'medium'
        return level !== 'easy';
    });

    // Remplacer les cartes originales par les cartes filtrées
    gameData.gameCards = filteredCards;

    console.log("Nombre de cartes après filtrage:", gameData.gameCards.length);
}

// Fonction pour appliquer le filtre aux cartes de la manche aussi
function applyDifficultyToCurrentRound() {
    // Si la difficulté n'est pas configurée ou si le filtrage n'est pas activé, ne rien faire
    if (!gameData.difficulty || !gameData.difficulty.enableWordFiltering) return;

    console.log("Application du filtre de difficulté aux cartes de la manche actuelle");

    // Appliquer le même filtrage à roundCards
    const level = gameData.difficulty.currentLevel;
    const availableLevels = ['easy', 'medium', 'hard', 'expert'];
    const levelIndex = availableLevels.indexOf(level);
    const allowedLevels = availableLevels.slice(0, levelIndex + 1);

    gameData.roundCards = gameData.roundCards.filter(card => {
        const category = card.category;
        const word = card.word;

        // Si la catégorie n'existe pas dans wordsByDifficulty, garder la carte
        if (!wordsByDifficulty[category]) return true;

        // Vérifier si le mot est dans un niveau autorisé
        for (const allowedLevel of allowedLevels) {
            if (wordsByDifficulty[category][allowedLevel] &&
                wordsByDifficulty[category][allowedLevel].includes(word)) {
                return true;
            }
        }

        // En mode expert, garder tous les mots
        if (level === 'expert') return true;

        // Par défaut, considérer les mots non classifiés comme 'medium'
        return level !== 'easy';
    });

    console.log("Après filtrage: cartes restantes pour la manche:", gameData.roundCards.length);
}

// Appliquer les paramètres de difficulté
function applyDifficultySettings() {
    const difficultySettings = difficultyLevels[gameData.difficulty.currentLevel];

    // Ajuster la durée du timer
    gameData.timerSeconds = difficultySettings.timerDuration;
    if (timerSecondsInput) {
        timerSecondsInput.value = difficultySettings.timerDuration;
    }

    // Mettre à jour l'affichage et les variables
    updateTimerConfig();

    // Afficher un message de confirmation
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<i class="fas fa-gamepad"></i> Difficulté: ${difficultySettings.name} - ${difficultySettings.description}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Ajuster le score selon le multiplicateur de difficulté
function adjustScoreByDifficulty(score) {
    if (!gameData.difficulty.scoreMultiplier) return score;

    const multiplier = difficultyLevels[gameData.difficulty.currentLevel].pointMultiplier;
    return Math.round(score * multiplier);
}

// Modifier la fonction nextCard pour appliquer le multiplicateur
function modifyNextCardForDifficulty() {
    // Sauvegarde de la fonction originale
    const originalNextCard = nextCard;

    // Redéfinition de la fonction
    nextCard = function() {
        if (gameData.currentCardIndex < gameData.roundCards.length) {
            // Appliquer le multiplicateur de points si activé
            if (gameData.difficulty.scoreMultiplier) {
                const multiplier = difficultyLevels[gameData.difficulty.currentLevel].pointMultiplier;
                gameData.scores[gameData.currentTeam][gameData.currentRound - 1] += multiplier;
            } else {
                // Comportement normal - ajouter 1 point
                gameData.scores[gameData.currentTeam][gameData.currentRound - 1]++;
            }

            // Le reste du code original (sans la ligne d'ajout de score)
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
            if (gameCard) {
                gameCard.style.borderColor = 'var(--success-color)';
                gameCard.style.boxShadow = '0 0 15px rgba(78, 255, 145, 0.3)';

                setTimeout(() => {
                    gameCard.style.borderColor = 'var(--primary-color)';
                    gameCard.style.boxShadow = '';
                    cardWord.classList.remove('card-found-animation');
                }, 700);
            }

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
    };
}

// Remplacer la fonction generateGameCards pour filtrer les mots
function modifyGenerateGameCards() {
    const originalGenerateGameCards = generateGameCards;

    generateGameCards = function() {
        // Appeler d'abord la fonction originale
        originalGenerateGameCards();

        // Puis filtrer les mots selon la difficulté
        filterWordsByDifficulty();

        console.log(`Après filtrage par difficulté: ${gameData.gameCards.length} cartes disponibles`);
    };
}

// Créer l'interface de sélection de difficulté
function createDifficultyUI() {
    // Interface pour le configurateur de jeu
    const difficultySelector = document.createElement('div');
    difficultySelector.className = 'difficulty-selector';
    difficultySelector.innerHTML = `
    <h3>Niveau de difficulté</h3>
    <div class="difficulty-options">
      <button class="difficulty-btn ${gameData.difficulty.currentLevel === 'easy' ? 'active' : ''}" data-difficulty="easy">
        <i class="fas fa-baby"></i> Facile
      </button>
      <button class="difficulty-btn ${gameData.difficulty.currentLevel === 'medium' ? 'active' : ''}" data-difficulty="medium">
        <i class="fas fa-user"></i> Normal
      </button>
      <button class="difficulty-btn ${gameData.difficulty.currentLevel === 'hard' ? 'active' : ''}" data-difficulty="hard">
        <i class="fas fa-user-ninja"></i> Difficile
      </button>
      <button class="difficulty-btn ${gameData.difficulty.currentLevel === 'expert' ? 'active' : ''}" data-difficulty="expert">
        <i class="fas fa-skull"></i> Expert
      </button>
    </div>
    <div class="difficulty-description">
      ${difficultyLevels[gameData.difficulty.currentLevel].description}
    </div>
    <div class="difficulty-options">
      <label class="difficulty-checkbox">
        <input type="checkbox" id="enable-word-filtering" ${gameData.difficulty.enableWordFiltering ? 'checked' : ''}>
        <span>Filtrer les mots selon la difficulté</span>
      </label>
      <label class="difficulty-checkbox">
        <input type="checkbox" id="enable-score-multiplier" ${gameData.difficulty.scoreMultiplier ? 'checked' : ''}>
        <span>Multiplicateur de points (x${difficultyLevels[gameData.difficulty.currentLevel].pointMultiplier})</span>
      </label>
    </div>
  `;

    // Insérer avant le bouton de démarrage du jeu
    const startGameButton = document.getElementById('start-game');
    if (startGameButton && startGameButton.parentNode) {
        startGameButton.parentNode.insertBefore(difficultySelector, startGameButton);
    }

    // Ajouter les événements aux boutons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Supprimer la classe active de tous les boutons
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));

            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            // Mettre à jour la difficulté
            const difficulty = this.getAttribute('data-difficulty');
            gameData.difficulty.currentLevel = difficulty;

            // Mettre à jour la description
            document.querySelector('.difficulty-description').textContent =
                difficultyLevels[difficulty].description;

            // Mettre à jour le multiplicateur affiché
            const multiplierSpan = document.querySelector('label[for="enable-score-multiplier"] span');
            if (multiplierSpan) {
                multiplierSpan.textContent = `Multiplicateur de points (x${difficultyLevels[difficulty].pointMultiplier})`;
            }

            // Appliquer les paramètres
            applyDifficultySettings();

            // Sauvegarder les paramètres
            saveDifficultySettings();
        });
    });

    // Événements pour les checkboxes
    document.getElementById('enable-word-filtering').addEventListener('change', function() {
        gameData.difficulty.enableWordFiltering = this.checked;
        saveDifficultySettings();
    });

    document.getElementById('enable-score-multiplier').addEventListener('change', function() {
        gameData.difficulty.scoreMultiplier = this.checked;
        saveDifficultySettings();
    });
}

// Modifier également la fonction nextRound pour appliquer la difficulté à la nouvelle manche
function modifyNextRound() {
    const originalNextRound = nextRound;

    nextRound = function() {
        // Appel à la fonction originale
        originalNextRound();

        // Appliquer également le filtre de difficulté aux nouvelles cartes de la manche
        if (typeof applyDifficultyToCurrentRound === 'function') {
            applyDifficultyToCurrentRound();
        }
    };
}

// Dans le fichier gameDifficulty.js, ajoutons cette fonction
function enhancedGenerateGameCards() {
    // Réinitialiser le tableau de cartes
    gameData.gameCards = [];

    // Niveau de difficulté actuel
    const level = gameData.difficulty.currentLevel;
    const availableLevels = ['easy', 'medium', 'hard', 'expert'];
    const levelIndex = availableLevels.indexOf(level);
    const allowedLevels = availableLevels.slice(0, levelIndex + 1);

    console.log("Génération de cartes pour le niveau:", level);
    console.log("Niveaux autorisés:", allowedLevels);

    // Pour chaque catégorie sélectionnée
    gameData.selectedCategories.forEach(category => {
        if (gameData.categories[category] && Array.isArray(gameData.categories[category])) {
            // Créons un tableau de mots filtrés pour cette catégorie
            let filteredWords = [];

            // Si le filtrage est activé, on filtre les mots par difficulté
            if (gameData.difficulty && gameData.difficulty.enableWordFiltering) {
                // Pour chaque niveau autorisé
                allowedLevels.forEach(allowedLevel => {
                    // Si des mots existent pour ce niveau dans cette catégorie
                    if (wordsByDifficulty[category] && wordsByDifficulty[category][allowedLevel]) {
                        // Ajouter ces mots au tableau filtré
                        filteredWords = filteredWords.concat(wordsByDifficulty[category][allowedLevel]);
                    }
                });

                // Pour les mots non classifiés (au cas où)
                gameData.categories[category].forEach(word => {
                    let isClassified = false;

                    // Vérifier si le mot est classifié dans un niveau quelconque
                    Object.keys(wordsByDifficulty[category] || {}).forEach(level => {
                        if (wordsByDifficulty[category][level].includes(word)) {
                            isClassified = true;
                        }
                    });

                    // Si le mot n'est pas classifié, l'ajouter uniquement si on n'est pas en mode facile
                    if (!isClassified && level !== 'easy') {
                        filteredWords.push(word);
                    }
                });
            } else {
                // Si le filtrage n'est pas activé, prendre tous les mots
                filteredWords = gameData.categories[category];
            }

            // Ajouter les mots filtrés au tableau des cartes
            filteredWords.forEach(word => {
                gameData.gameCards.push({
                    category: category,
                    word: word
                });
            });
        }
    });

    // Mélanger les cartes
    shuffleArray(gameData.gameCards);

    // Calculer le nombre total de cartes nécessaires
    const totalCardsNeeded = gameData.players.length * gameData.cardsPerPlayer;

    // S'assurer qu'il y a au moins 4 cartes ou le nombre demandé
    const minCards = Math.max(4, totalCardsNeeded);

    // Limiter le nombre de cartes disponibles
    if (gameData.gameCards.length > minCards) {
        gameData.gameCards = gameData.gameCards.slice(0, minCards);
    }

    console.log(`${gameData.gameCards.length} cartes générées sur ${totalCardsNeeded} demandées pour le niveau ${level}`);
}

// Initialiser le système de difficulté
// Remplacer complètement la fonction generateGameCards au démarrage
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que gameData soit défini
    const checkGameDataInterval = setInterval(() => {
        if (typeof gameData !== 'undefined') {
            clearInterval(checkGameDataInterval);

            // Remplacer la fonction d'origine directement
            window.originalGenerateGameCards = generateGameCards;
            window.generateGameCards = enhancedGenerateGameCards;

            console.log("Fonction de génération de cartes remplacée avec succès");

            // Initialiser le système de difficulté
            initDifficultySystem();
            createDifficultyUI();
            applyDifficultySettings();
        }
    }, 100);
});

