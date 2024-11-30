let gameMusic = document.getElementById("game-music");
let arrowImage = document.getElementById("arrow");
let currentArrowIndexFeelItStill = 0;
let currentArrowIndexDancin = 0;
let arrowSequence = [];
let arrowTimer;
let isPlaying = false;

const arrowImages = {
    "Cima": "images/Cima.png",
    "Baixo": "images/Baixo.png",
    "Esquerda": "images/Esquerda.png",
    "Direita": "images/Direita.png",
};

const sequences = {
    "Feel-It-Still": [

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Cima", "Direita", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],
    
        ["Direita", "Cima", "Direita", "Baixo"],

        ["Direita", "Cima", "Direita", "Baixo"],

        ["Direita", "Cima", "Direita", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Cima", "Baixo"],
 
        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],
   
        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Direita", "Esquerda", "Cima", "Baixo"],

    ],
    
    "Dancin": [

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],
        
        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],
        
        ["Direita", "Baixo", "Cima", "Esquerda"],
        
        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Direita", "Cima", "Esquerda", "Direita", "Baixo", "Cima", "Direita"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Esquerda", "Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Direita", "Baixo", "Cima", "Esquerda"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],

        ["Esquerda", "Direita", "Cima", "Baixo"],

        ["Cima", "Baixo", "Cima", "Baixo", "Esquerda", "Direita"],
    ]
};

document.getElementById("feel-it-still-btn").addEventListener("click", function() {
    startGame("Feel-It-Still");
});

document.getElementById("dancin-btn").addEventListener("click", function() {
    startGame("Dancin");
});

document.getElementById("back-btn").addEventListener("click", function() {
    window.location.reload();
});

function startGame(songName) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    gameMusic.src = songName === "Feel-It-Still" ? "/Users/Orchid/Dance Dance Revolution/Music/Feel-It-Still.mp3" : "/Users/Orchid/Dance Dance Revolution/Music/Dancin.mp3";
    gameMusic.play();
    arrowSequence = sequences[songName].flat();
    if (songName === "/Users/Orchid/Dance Dance Revolution/Music/Feel-It-Still.mp3") {
        currentArrowIndexFeelItStill = 0;
    } else if (songName === "/Users/Orchid/Dance Dance Revolution/Music/Dancin.mp3") {
        currentArrowIndexDancin = 0;
    }

    // Começa o jogo após 3 segundos
    setTimeout(startArrowSequence, 3000); 
}

function startArrowSequence() {
    // Verifica qual música está sendo tocada e usa o índice correto
    if (gameMusic.src.includes("Feel-It-Still")) {
        if (currentArrowIndexFeelItStill < arrowSequence.length) {
            let currentArrow = arrowSequence[currentArrowIndexFeelItStill];
            arrowImage.src = arrowImages[currentArrow];
            currentArrowIndexFeelItStill++; // Incrementa o índice da música "Feel It Still"
            arrowTimer = setTimeout(startArrowSequence, 800); // Exibe a próxima seta após 900ms
        }
    } else if (gameMusic.src.includes("Dancin")) {
        if (currentArrowIndexDancin < arrowSequence.length) {
            let currentArrow = arrowSequence[currentArrowIndexDancin];
            arrowImage.src = arrowImages[currentArrow];
            currentArrowIndexDancin++; // Incrementa o índice da música "Dancin"
            arrowTimer = setTimeout(startArrowSequence, 700); // Exibe a próxima seta após 800ms
        }
    }
}