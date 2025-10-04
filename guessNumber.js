const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = false;

alert("Я загадал число от 1 до 100. Попробуй угадать!");

while (!guessed) {
  const userInput = prompt("Введи свой вариант:");

  if (userInput === null) {
    alert("Игра завершена. Загаданное число было: " + secretNumber);
    break;
  }

  const guess = Number(userInput);
  attempts++;

  if (isNaN(guess)) {
    alert("Пожалуйста, введи число!");
    continue;
  }

  if (guess === secretNumber) {
    alert(
      `Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток!`
    );
    guessed = true;
  } else if (guess < secretNumber) {
    alert("Больше! Попробуй еще раз.");
  } else {
    alert("Меньше! Попробуй еще раз.");
  }
}
