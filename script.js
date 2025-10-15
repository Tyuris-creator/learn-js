// 1. Приветствие:
// - Напишите функцию greet(name), которая принимает имя и возвращает строку "Привет, [имя]!".
const greet = (name) => console.log(`Привет ${name}`);
greet("Mikhail");
// 2. Сумма двух чисел:
// - Создайте функцию sum(a, b), которая возвращает сумму двух чисел.
const sum = (a, b) => a + b;
console.log(sum(2, 2));
// 3. Проверка на четность:
// - Напишите функцию isEven(num), которая принимает число и возвращает true, если число четное, и false — если нет.
const isEven = (num) => num % 2 === 0;
console.log(isEven(5));
// 4. Случайное число:
// - Напишите функцию getRandomNumber(min, max), которая возвращает случайное целое число между min и max.
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNum(5, 9));
//  5. Форматирование строки:
// - Создайте функцию formatName(firstName, lastName), которая возвращает строку в формате "Фамилия, Имя".
const formatName = (firstName, lastName) => `${lastName}, ${firstName}`;
console.log(formatName("Mikchail", "Tiurin"));
//  6. Поиск индекса элемента (пишем собственный метод findIndex):
// - Напишите функцию findIndex(arr, value), которая принимает массив и значение, возвращает индекс первого найденного элемента или -1, если элемент не найден.
const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex([1, 2, 3, 4, 5], 4));

// 1. Поиск в массиве (использовать только цикл for):
// - Напишите функцию findInArray(arr, value), которая принимает массив и значение, и возвращает true, если значение есть в массиве, и false — если нет.

function findInArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(findInArray([1, 2, 3, 4, 5], 4));

// 2. Калькулятор итоговой суммы (использовать только цикл for):
// - Создайте функцию calculateTotal(cart), которая принимает массив объектов товаров (каждый объект имеет свойства price и quantity) и возвращает общую стоимость заказа.

function calculateTotal(cart) {
  let total = 0;
  for (const obj in cart) {
    total += obj.price * obj.quantity;
  }
  return total;
}

//   3. Поиск самого длинного слова:
// - Напишите функцию findLongestWord(words), которая принимает массив слов и возвращает длину самого длинного слова.
function findLongestWord(words) {
  let longestStr = "";
  for (const word of words) {
    if (word.length > longestStr.length) {
      longestStr = word;
    }
  }
  return longestStr;
}

console.log(findLongestWord(["apple", "banana"]));

// 4. Сумма всех чисел:
// - Напишите функцию sumAll(...numbers) (используйте rest-оператор), которая возвращает сумму всех переданных аргументов, независимо от их количества

function sumAll(...numbers) {
  return numbers.reduce((acc, el) => acc + el, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
// 5. Валидатор пароля:
// - Cоздайте функцию validatePassword(password), которая проверяет, что пароль длиннее 6 символов и содержит хотя бы одну цифру.
// - Функция должна возвращать true или false.
function validatePassword(password) {
  let isMoreThan6 = password.length > 6;
  let isNum = false;
  password.split("").forEach((element) => {
    if (!isNaN(parseInt(element))) {
      isNum = true;
    }
  });
  return isMoreThan6 && isNum;
}
console.log(validatePassword("asdasdasdasd"));

// 6. Разворот строки:
// - Напишите функцию reverseString(str), которая возвращает перевернутую строку (без использования встроенного метода reverse).

function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseString("hello!!!"));

// 7. Уникальные значения массива:
// - Напишите функцию getUniqueValues(arr), которая возвращает новый массив только с уникальными значениями из исходного.

function getUniqueValues(arr) {
  return Array.from(new Set(arr));
}
console.log(getUniqueValues([1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5]));

// 8. Трансформация массива в объект:
// - Напишите функцию arrayToObject(arr), которая принимает массив пар P[ [key, value], [key, value], [key, value], и тд ] и возвращает объект, собранный из этих пар.

function arrayToObject(arr) {
  return Object.fromEntries(arr);
}
console.log(
  arrayToObject([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"],
  ])
);

//    9. Фильтрация по нескольким условиям:
// - Напишите функцию filterUsers(users, filters), где filters — объект с условиями (напр., { age: 30, city: 'Moscow' }).
// - Верните пользователей, удовлетворяющих ВСЕМ условиям.
// - Пример исходного объекта users = [{name: 'Ivan',  age: 31, city: 'Saratov'}, {name: 'Oleg', age: 30, city: 'Omsk'}, {name: 'Anastasiya', age: 30, city: 'Moscow'}, {И ТД}]

function filterUsers(users, filters) {
  return users.filter((user) => {
    for (const key in filters) {
      if (user[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
}

//   10. Разница между двумя массивами:
// - Напишите функцию arrayDiff(arr1, arr2), которая возвращает новый массив с элементами, которые есть в arr1, но нет в arr2.

function arrayDiff(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}
