// 1. Вывод чисел от 1 до N
// - Попросите пользователя ввести любое число N через prompt и выведите все числа от 1 до N в консоль.
const num = Number(prompt("Число до которого считать: "));
Array(num)
  .fill(0)
  .forEach((_, i) => console.log(i + 1));
// 2. Сумма чисел от 1 до N
// - Запросите число N и вычислите сумму всех чисел от 1 до N и результат выведите в консоль.
const num2 = Number(prompt("Число до которого считать: "));
console.log(
  Array.from({ length: num2 }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  )
);
// 3. Четные числа
// - Выведите все четные числа от 0 до 100 в консоль.
for (let i = 0, len = 100; i <= len; i++) {
  i % 2 === 0 ? console.log(i) : "";
}

// 4. До первого четного числа
// - Запрашивайте числа через prompt, пока не будет введенное число пользователем не будет четным.

let shouldAsk = true;
while (shouldAsk) {
  const num = Number(prompt("Ввведите четное число: "));
  if (num % 2 === 0) {
    shouldAsk = false;
  }
}

// 5. Среднее арифметическое
// - Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите их среднее арифметическое.

let shouldStop = false;
const arr = [];
while (!shouldStop) {
  console.log(arr);
  const userInput = prompt(
    "Введите число для калькулирования средне арифметического: "
  );
  try {
    if (userInput.toLowerCase() === "стоп") {
      console.log(arr.reduce((acc, el) => acc + el, 0) / arr.length);
      shouldStop = true;
      continue;
    }
    if (isNaN(Number(userInput)) && userInput.toLowerCase() !== "стоп") {
      throw new Error("Пожалуйста введите номер");
    } else {
      arr.push(Number(userInput));
    }
  } catch (error) {
    console.error(
      error,
      "либо числовые значение либо стоп чтобы остановить цикл"
    );
  }
}

//  6. Максимальное число
//  - Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите максимальное число из введенных.

let shouldStop2 = false;
const arr2 = [];
while (!shouldStop2) {
  const num = prompt("Числа чтобы найти максимальное из ваших предложенных: ");
  if (num !== "стоп") {
    arr2.push(Number(num));
  } else {
    console.log(Math.max(...arr2));
    shouldStop2 = true;
  }
}

// Работа со строками:
// 7. Перевернутая строка
// - Запросите строку и выведите ее в обратном порядке (например, "hello" → "olleh"). Методы строк не используем

const string = prompt("ваше слово чтобы перевернуть строку");
let reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}
console.log(reverseString);

// 8. Подсчет гласных
// "Hello world".

const toCount = ["a", "e", "i", "o", "u"];
const userWord = prompt("ваше слово для подсчета гласных");
let sum = 0;
for (const letter of userWord) {
  if (toCount.indexOf(letter) !== -1) {
    sum += 1;
  }
}
console.log(sum);

// 9. Замена символов
//   -Замените все буквы 'a' в строке на '!' и выведите результат. За пример слова, берите любое где есть бука "A" / 'a'

const string4 = prompt("ВВЕДИТЕ ЧИСЛО ДЛЯ ЗАМЕНЫ БУКВЫ А НА !");
let newString = "";
for (const letter of string4) {
  letter.toLowerCase === "a" ? (newString += "!") : (newString += letter);
}
console.log(newString);
