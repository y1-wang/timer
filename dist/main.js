let minutes = 0;
let seconds = 0;
let timerInterval;
let lastSetMinutes = 0; // Guarda el último valor introducido
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

// Función para actualizar el display
function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Aumentar un minuto (hasta 59)
upButton.addEventListener('click', () => {
    if (minutes < 59) {
        minutes++;
        lastSetMinutes = minutes; // Guardamos el último valor configurado
        updateDisplay();
    }
});

// Restar un minuto (hasta 0)
downButton.addEventListener('click', () => {
    if (minutes > 0) {
        minutes--;
        lastSetMinutes = minutes; // Guardamos el último valor configurado
        updateDisplay();
    }
});

// Iniciar o pausar el temporizador
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'PAUSE';
        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                startButton.textContent = 'START';
            }
            updateDisplay();
        }, 1000);
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        startButton.textContent = 'START';
    }
});

// Resetear el temporizador
resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    minutes = lastSetMinutes; // Volver al último valor introducido
    seconds = 0;
    updateDisplay();
    startButton.textContent = 'START';
});

// Inicializar pantalla
updateDisplay();


