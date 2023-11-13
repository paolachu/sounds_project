// Mapeamento de teclas para sons
const keySounds = {
    'a': 'leftCrash',
    's': 'tom1',
    'd': 'snare',
    'g': 'kickbass',
    'j': 'tom3',
    'k': 'tom2',
    'l': 'rightCrash'
};

// Adiciona event listener para cliques nos elementos com a classe "drum"
document.querySelectorAll(".drum").forEach(function (drumElement) {
    drumElement.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

// Adiciona event listener para o pressionamento de teclas
document.addEventListener("keypress", function (event) {
    var keyPressed = event.key.toLowerCase();
    if (keySounds[keyPressed]) {
        playSound(keyPressed);
        buttonAnimation(keyPressed);
    }
});

function playSound(key) {
    var sound = keySounds[key];
    if (sound) {
        var audio = new Audio('sounds/' + sound + '.mp3');
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
        activeButton.classList.add('pressed');

        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 100);
    }
}