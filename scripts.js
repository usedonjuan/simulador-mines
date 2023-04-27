const cells = document.querySelectorAll('.cell');
const btnSimulate = document.getElementById('btn-simulate');
const loadingContainer = document.getElementById('loading-container');
const totalCells = 25;
let isSimulating = false;

function clearCells() {
    cells.forEach(cell => {
        cell.classList.remove('bg-green-500');
        cell.classList.add('bg-gray-300');
    });
}

function simulate() {
    if (isSimulating) return;

    isSimulating = true;
    btnSimulate.disabled = true;
    loadingContainer.style.display = 'block';

    setTimeout(() => {
        clearCells();
        const freeCells = [];

        while (freeCells.length < 3) {
            const randomIndex = Math.floor(Math.random() * totalCells);

            if (!freeCells.includes(randomIndex)) {
                freeCells.push(randomIndex);
                cells[randomIndex].classList.remove('bg-gray-300');
                cells[randomIndex].classList.add('bg-green-500');
            }
        }

        let countdown = 30;
        btnSimulate.textContent = `Aguarde ${countdown}s`;
        loadingContainer.style.display = 'none';

        const interval = setInterval(() => {
            countdown--;
            btnSimulate.textContent = `Próxima rodada em ${countdown}s`;

            if (countdown <= 0) {
                clearInterval(interval);
                btnSimulate.textContent = "Simular";
                btnSimulate.disabled = false;
                isSimulating = false;
            }
        }, 1000);
    }, 5000); // 5 segundos de delay
}

btnSimulate.addEventListener('click', simulate);




