// 1. Дан массив чисел [1, 2, 3, 4, 5]. Создайте новый массив, где каждый элемент умножен на 2.
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((el) => el * 2);
console.log(newArr);
// 2. Дан массив строк ["apple", "banana", "cherry"]. Создайте новый массив с длинами каждой строки.
const arr1 = ["apple", "banana", "cherry"];
const newArr1 = arr1.map((el) => el.length);
console.log(newArr1);
// 3. Дан массив объектов [{name: "John", age: 25}, {name: "Anna", age: 30}]. Создайте массив только из имен.
const arr2 = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
];
const newArr2 = arr2.map((el) => el.name);
console.log(newArr2);
// 4. Дан массив температур в Цельсиях [0, 15, 25, 30, -5]. Преобразуйте в Фаренгейты (F = C × 9/5 + 32).
const arr3 = [0, 15, 25, 30, -5];
const newArr3 = arr3.map((el) => Math.round(el * (9 / 5) + 32));
console.log(newArr3);
//  5. Дан массив чисел [1, 4, 9, 16]. Создайте массив, где каждый элемент - это объект {value: число, square: квадрат_числа}.
const arr4 = [1, 4, 9, 16];
const newArr4 = arr4.map((el) => ({ value: el, square: Math.pow(el, 2) }));
console.log(newArr4);
// 6. Дан массив строк ["hello", "world", "javascript"]. Создайте массив, где каждая строка начинается с заглавной буквы.
const arr5 = ["hello", "world", "javascript"];
const newArr5 = arr5.map((el) => el[0].toUpperCase() + el.slice(1));
console.log(newArr5);
// 7. Дан массив чисел [1, 2, 3, 4, 5]. Создайте массив, где четные числа умножены на 2, а нечетные остаются без изменений.
const arr6 = [1, 2, 3, 4, 5];
const newArr6 = arr6.map((el) => (el % 2 === 0 ? el * 2 : el));
console.log(newArr6);
//  8. Дан массив [1, "2", 3, "4", 5]. Преобразуйте все строки в числа, оставив числа без изменений.
const arr7 = [1, "2", 3, "4", 5];
const newArr7 = arr7.map((el) => (typeof el === "string" ? Number(el) : el));
console.log(newArr7);
// 9. Дан массив объектов продуктов [{name: "apple", price: 1.2}, {name: "banana", price: 0.8}]. Добавьте каждому продукту поле discountedPrice со скидкой 10%.
const arr8 = [
  { name: "apple", price: 1.2 },
  { name: "banana", price: 0.8 },
];
const newArr8 = arr8.map((el) => ({
  ...el,
  discountedPrice: el["price"] - el["price"] * 0.1,
}));
console.log(newArr8);
// 1. Дан массив чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Отфильтруйте только четные числа.
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr9 = arr9.filter((el) => el % 2 === 0);
console.log(newArr9);
// 2. Дан массив строк ["apple", "banana", "cherry", "date"]. Отфильтруйте строки длиннее 5 символов.
const arr10 = ["apple", "banana", "cherry", "date"];
const newArr10 = arr10.filter((el) => el.length > 5);
console.log(newArr10);
// 3. Дан массив объектов [{name: "John", age: 25}, {name: "Anna", age: 17}, {name: "Mike", age: 30}]. Отфильтруйте совершеннолетних (age >= 18).
const arr11 = [
  { name: "John", age: 25 },
  { name: "Anna", age: 17 },
  { name: "Mike", age: 30 },
];
const newArr11 = arr11.filter((el) => el.age >= 30);
console.log(newArr11);
// 4. Дан массив чисел [-1, 2, -3, 4, -5, 6]. Отфильтруйте положительные числа.
const arr12 = [-1, 2, -3, 4, -5, 6];
const newArr12 = arr12.filter((el) => el >= 0);
console.log(newArr12);
// 5. Дан массив строк ["apple", "banana", "avocado", "cherry", "apricot"]. Отфильтруйте строки, начинающиеся на "a".
const arr13 = ["apple", "banana", "avocado", "cherry", "apricot"];
const newArr13 = arr13.filter((el) => el[0].toLowerCase() === "a");
console.log(newArr13);
// 6. Дан массив товаров [{name: "book", price: 15}, {name: "pen", price: 5}]. Отфильтруйте товары дороже 10.
const arr14 = [
  { name: "book", price: 15 },
  { name: "pen", price: 5 },
];
const newArr14 = arr14.filter((el) => el.price > 10);
console.log(newArr14);
// 7. Дан массив дат в виде строк. Отфильтруйте даты, которые находятся в будущем относительно текущей даты.
const dateStrings = ["2023-12-01", "2024-01-15", "2022-11-10", "2023-11-20"];
const currentDate = new Date();
const futureDates = dateStrings.filter((dateString) => {
  const date = new Date(dateString);
  return date > currentDate;
});
console.log(futureDates);

// 8. Дан массив чисел. Отфильтруйте уникальные значения (убрать дубликаты) используя filter.
const cleanFromDuplications = (arr) =>
  arr.filter((element, index, array) => array.indexOf(element) === index);
console.log(
  cleanFromDuplications([
    1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
  ])
);
// 1. Дан массив чисел [1, 2, 3, 4, 5]. Найдите сумму всех чисел.
const arr15 = [1, 2, 3, 4, 5];
const sum = arr15.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// 2. Дан массив чисел [1, 2, 3, 4, 5]. Найдите произведение всех чисел.
const arr16 = [1, 2, 3, 4, 5];
const productOfNumbers = arr16.reduce((acc, curr) => acc * curr, 1);
console.log(productOfNumbers);
// 3. Дан массив строк ["a", "b", "c", "d"]. Объедините все строки в одну.
const arr17 = ["a", "b", "c", "d"];
const str = arr17.reduce((acc, el) => acc + el, "");
console.log(str);
// 4. Дан массив чисел. Сгруппируйте числа по четности: {even: [2,4,6], odd: [1,3,5]}.
const arr18 = [2, 4, 6, 1, 3, 5];
const grouped = arr18.reduce(
  (acc, el) => (el % 2 === 0 ? acc.even.push(el) : acc.odd.push(el), acc),
  { even: [], odd: [] }
);
console.log(grouped);
// 5. Дан массив. Удалите все дубликаты используя reduce.
const arr19 = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const uniqueArray = arr19.reduce((acc, current) => {
  acc[current] = true; // используем объект как Set
  return acc;
}, {});
const result = Object.keys(uniqueArray).map(Number);
console.log(result);
// 6. Дан массив массивов [[1,2], [3,4], [5,6]]. "Разгладьте" его в одномерный массив
const arr20 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArr = arr20.reduce((acc, el) => {
  const recursive = (element, result) => {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      element.forEach((item) => recursive(item, result));
    }
    return result;
  };

  return recursive(el, acc);
}, []);
console.log(flatArr);
