// 1. Object.keys
// - Дан объект let car = { brand: 'Toyota', model: 'Camry', year: 2021 }.
// - Используя Object.keys(), получи массив всех его ключей и выведи его в консоль.
const car = { brand: "Toyota", model: "Camry", year: 2021 };
const keys = Object.keys(car);
console.log(keys);
for (const key of Object.keys(car)) {
  console.log(key);
}

// 2. Object.values
// - Дан объект let fruitPrices = { apple: 50, banana: 30, orange: 70 }.
// - Используй Object.values(), чтобы получить массив всех значений и вычисли их общую сумму.

const fruitPrices = { apple: 50, banana: 30, orange: 70 };
const sum = Object.values(fruitPrices).reduce((acc, el) => acc + el, 0);
console.log(sum);

// 3. Object.entries
// - Дан объект let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 }
// - Используй Object.entries(), чтобы преобразовать объект в массив пар [ключ, значение] и выведи его в консоль.

const book = { title: "JavaScript Basics", author: "Jane Doe", pages: 200 };
console.log(Object.entries(book));

// 4. Подсчет количества свойств
// - Напиши функцию countProperties(obj), которая принимает объект и возвращает количество его свойств, используя Object.keys().

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(book));

// 5. Поиск максимального значения
//  - Дан объект let scores = { Alex: 100, Bob: 75, Charlie: 95 }.
// - Используй Object.values(), чтобы найти и вывести в консоль максимальное значение.

const scores = { Alex: 100, Bob: 75, Charlie: 95 };
console.log(Math.max(...Object.values(scores)));

// 1. Сумма числовых свойств
// - Напиши функцию sumNumericalValues(obj), которая принимает объект, находит все значения, которые являются числами, и возвращает их сумму.
// - Используй Object.values()

function sumNumericalValues(obj) {
  const values = Object.values(obj);
  let sum = 0;
  values.forEach((el) => {
    if (typeof el === "number" && !isNaN(el) && isFinite(el)) sum += el;
  });
  return sum;
}

console.log(sumNumericalValues(book));

// 2. Преобразование объекта в query string (Чуть сложнее)
// - Напиши функцию toQueryString(obj), которая преобразует объект в строку параметров URL.
// - Пример: { name: 'John', age: 30 } -> "name=John&age=30".
// - Используй Object.entries(), map() и join().

function toQueryString(obj) {
  return Object.entries(obj)
    .map((el) => `${encodeURIComponent(el[0])}=${encodeURIComponent(el[1])}`) // чтобы убрать пробелы обернул в encode
    .join("&");
}

console.log(toQueryString(book));

// 3. Сравнение двух объектов
// - Напиши функцию areObjectsEqual(obj1, obj2), которая возвращает true, если оба объекта имеют одинаковый набор свойств и значения этих свойств равны.
// - Для простоты считай, что объекты одноуровневые (без вложенности).
// - Используй Object.keys().

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(obj2, key) && // Object.hasOwn(obj2, key) ещё так можно хд
      Object.is(obj1[key], obj2[key])
  );
}

console.log(areObjectsEqual(book, book));
console.log(areObjectsEqual(book, car));
