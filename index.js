// 1. Проверка возраста
// - Запросите у пользователя возраст через prompt. Если возраст меньше 18, выведите alert("Доступ запрещен"), иначе — alert("Доступ разрешен").
const age = prompt("Ваш возраст?");
alert(`${age >= 18 ? "Доступ разрешен" : "Доступ запрещен"}`);

//  2. Чётное или нечётное
//  - Пользователь вводит число. Выведите в console.log, является ли оно чётным  или нет. Используйте тернарный оператор. Оператор % в помощь

const num = Number(prompt("Give me a number"));
console.log(num % 2 === 0 ? "Чётное" : "Нечётное");
alert(num % 2 === 0 ? "Чётное" : "Нечётное");

// 3. Калькулятор
// - Запросите два числа и оператор (+, -, *, /). Используя switch, вычислите результат операции. Выведите его через alert (например, "5 * 3 = 15").

const expression = prompt("Введите выражение: ").replace(/\\s+/g, "");
const array = expression.split(/[+\-*\/]/);
const operator = expression.match(/[+\-*\/]/);
console.log(operator);
switch (operator[0]) {
  case "+":
    alert(Number(array[0]) + Number(array[1]));
    break;
  case "-":
    alert(Number(array[0]) - Number(array[1]));
    break;
  case "*":
    alert(Number(array[0]) * Number(array[1]));
    break;
  case "/":
    alert(Number(array[0]) / Number(array[1]));
    break;
  default:
    alert("Кажется вы ввели что то нестандартное...");
    break;
}

// 4. Проверка длины строки
// - Пользователь вводит строку. Если её длина больше 10 символов, выведите первые 5 символов оставшиеся символы замените на *, например Привет челов**. Если меньше — всю строку в верхнем регистре. Результат выводим в консоль.

const string = prompt("String: ");
alert(
  string.length > 10
    ? string.split("").slice(0, 5).join("") +
        string.split("").slice(5).join("").replace(/./g, "*")
    : string.toUpperCase()
);

// 5. Определение времени суток
// - Запросите текущий час (число от 0 до 23). Используя if/else/else if, выведите: "Ночь" (0-5), "Утро" (6-11), "День" (12-17), "Вечер" (18-23). Логические операторы в помощь.

const hour = Number(prompt("Какой час? "));
if (hour <= 5) {
  alert("Ночь");
} else if (hour <= 11) {
  alert("Утро");
} else if (hour <= 17) {
  alert("День");
} else if (hour <= 23) {
  alert("Вечер");
}

//   6. Проверка e-mail
// - Запросите e-mail. Если он содержит символ @ и ., выведите alert("Верный формат"). Иначе — alert("Ошибка!").

const email = prompt("Email: ");
if (email.includes("@")) {
  alert("Верный формат");
} else {
  alert("Ошибка!");
}

// 7. Палиндром (базовый)
// - Пользователь вводит слово. Проверьте, читается ли оно одинаково с начала и конца (например, "довод"). Выведите console.log(true/false).

const isPalindrome = prompt("Word: ").trim();
alert(isPalindrome === isPalindrome.split("").reverse().join(""));
