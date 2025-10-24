// Уровень: Легкий
// 1. Простой калькулятор
// - Создайте функцию calculate(a, b, operation).
// -  функция calculate возвращает результат операции callback
// - Параметр operation — это callback-функция, которая выполняет математическую операцию над a и b (например, сложение или вычитание).
// - Вызовите calculate с разными callback-ами.

const calculate = (a, b, operation) => operation(a, b);
console.log(calculate(5, 2, (a, b) => a + b));

//  2. Массив в квадрате
// - Напишите функцию squareArray(arr, callback).
// - Функция должна применить callback-функцию к каждому элементу массива arr и вернуть новый массив с результатами.
// - Callback должен возводить число в квадрат.

const squareArray = (arr, callback) => {
  const result = [];
  for (const el of arr) {
    result.push(callback(el));
  }
  return result;
};

console.log(squareArray([1, 2, 3, 4, 5], (el) => Math.pow(el, 2)));

// . Фильтр четных чисел
// - Создайте функцию filterArray(arr, callback).
// - Функция должна вернуть новый массив, в который войдут только те элементы arr, для которых callback-функция вернет true.
// - Напишите callback для фильтрации четных чисел.

const filterArray = (arr, callback) => {
  const result = [];
  for (const el of arr) {
    if (callback(el)) {
      result.push(el);
    }
  }
  return result;
};

console.log(filterArray([1, 2, 3, 4, 5], (el) => el % 2 === 0));

// . Форматирование текста
// - Создайте функцию formatText(text, formatter). formatter — это callback, который принимает строку и возвращает новую отформатированную строку.
// - Напишите два callback-а: один преобразует текст в верхний регистр, другой — в нижний.

const formatText = (text, formatterFunc) => {
  let formattedText = "";
  for (const letter of text) {
    if (/\s|[.,!?;:]/.test(letter)) {
      formattedText += letter;
    } else {
      formattedText += formatterFunc(letter);
    }
  }
  return formattedText;
};

console.log(formatText("hello world!", (el) => el.toUpperCase()));
console.log(formatText("HELLO WORLD!", (el) => el.toLowerCase()));

// Уровень: Средний
// 1. Собственный forEach
// - Реализуйте свою версию метода массива forEach.
// - Напишите функцию myForEach(arr, callback), которая принимает массив и callback.
// - Функция должна применять callback к каждому элементу массива, передавая ему сам элемент, его индекс и исходный массив.

const personalForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    callback(arr[i], i, arr);
  }
};
