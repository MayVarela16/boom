let countdownInterval;

function startGame() {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let countdown = 5;

    countdownInterval = setInterval(() => {
      document.getElementById('countdown').innerText = countdown;
      countdown--;

      if (countdown < 0) {
        clearInterval(countdownInterval);

        const userInput = document.getElementById('userInput').value;
        const resultElement = document.getElementById('result');

        if (userInput == randomNum) {
          resultElement.innerText = `¡Has salvado el mundo! El número era ${randomNum}.`;
          resultElement.classList.add('success');
        } else {
          resultElement.innerText = `La bomba ha estallado. El número era ${randomNum}.`;
          resultElement.classList.add('failure');
        }
      }
    }, 1000);
  }, 2000);
}

function restartGame() {
  clearInterval(countdownInterval);
  document.getElementById('userInput').value = '';
  document.getElementById('countdown').innerText = '';
  document.getElementById('result').innerText = '';
  startGame();
}

document.getElementById('userInput').addEventListener('blur', startGame);
document.getElementById('restart').addEventListener('click', restartGame);