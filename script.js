//  1. Найти сумму всех элементов массива
//  Без метода:
// - Найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5];
// С методом (reduce):
// - Найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5];

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((el) => (sum += el));
const sumReduce = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`The sum of elements of array numbers is ${sumReduce}`);

// 2. Найти максимальный элемент в массиве
// Без метода:
// - Найти максимальный элемент в массиве let numbers = [3, 7, 2, 9, 5];
// С методом (Math.max + spread): (читаем что такое spread оно позволить в max(3, 7, 2, 9, 5) распаковать массив в таком в виде(в нужно в виде для max(3, 7, 2, 9, 5)))
// - Найти максимальный элемент в массиве let numbers = [3, 7, 2, 9, 5];

let numbers2 = [3, 7, 2, 9, 5];
console.log(Math.max(...numbers2));
let biggestNum = null;
numbers2.forEach((el) => {
  if (biggestNum === null || el > biggestNum) biggestNum = el;
});
console.log(biggestNum);

// 3. Проверить, есть ли элемент в массиве
// Без метода:
// - Заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и  let search = 'banana';
//  - Если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден".
// С методом (includes):
//  - Заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и let search = 'banana';
//  - Если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден".

let fruits = ["apple", "banana", "orange"];
let search = "banana";
if (fruits.find((el) => el === search)) {
  console.log("Найден элемент");
} else {
  console.log(" Элемент не найден");
}
if (fruits.includes(search)) {
  console.log("Найден элемент");
} else {
  console.log(" Элемент не найден");
}

// 4. Перевернуть массив
// Без метода:
// - Дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив
// С методом (reverse):
// - Дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив

let arr = [1, 2, 3, 4, 5];
console.log(arr.toReversed()); // не мутирую
const reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr);

//  1. Посчитать количество определенного элемента в массиве
//  Без метода:
// - Дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве
// С методом (filter + length):
// - Дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве

let numbers3 = [1, 2, 3, 2, 4, 2, 5];
let countOf2 = 0;
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] == 2) {
    countOf2 += 1;
  }
}
console.log(countOf2);

console.log(numbers3.filter((el) => el === 2).length);

//  2. Найти среднее значение элементов массива
//  Без метода:
// - Дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое  значение;
// С методом (reduce):
// - Дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое значение;

const arr3 = [10, 20, 30, 40];
let sumArr3 = 0;
for (const num of arr3) {
  sumArr3 += num;
}
console.log(sumArr3 / arr3.length);
console.log(arr3.reduce((acc, el) => acc + el, 0) / arr3.length);

// 3. Отфильтровать четные числа
//  Без метода:
// - Дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.
// С методом (filter):
// - Дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.

let arr5 = [1, 2, 3, 4, 5, 6];
const arr5Even = [];
arr5.forEach((el) => {
  if (el % 2 === 0) arr5Even.push(el);
});
console.log(arr5Even);
console.log(arr5.filter((el) => el % 2 === 0));

// 4. Удвоить каждый элемент массива
// Без метода:
// - Дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными.
// С методом (map):
// - Дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными.

let arr6 = [1, 2, 3];
const arrDoubled = arr6.map((el) => el * 2);
console.log(arrDoubled);
const arrDoubled2 = [];
for (let i = 0; i < arr6.length; i++) {
  arrDoubled2.push(arr[i] * 2);
}
console.log(arrDoubled2);

// 1. Объединить два массива без дубликатов
// Без метода:
// - Дан массив let arr1 = [1, 2, 3] и let arr2 = [2, 3, 4]
// - Необходимо объединить без дубликатов.
// С методом (Set + spread):
// - Дан массив let arr1 = [1, 2, 3] и let arr2 = [2, 3, 4]
// - Необходимо объединить без дубликатов.

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(Array.from(new Set(array1.concat(array2))));
const united = [];
for (const num of array1) {
  united.push(num);
}
for (const num of array2) {
  if (!united.includes(num)) {
    united.push(num);
  }
}
console.log(united);

//  2. Найти все уникальные элементы в массиве
// Без метода:
// - Дан массив let numbers = [1, 2, 2, 3, 4, 4, 5].
// - Необходимо в новую переменную let unique = [] собрать только уникальные элементы массива numbers
// С методом (filter + indexOf):
// - Дан массив let numbers = [1, 2, 2, 3, 4, 4, 5].
// - Необходимо в новую переменную let unique = [] собрать только уникальные элементы массива numbers

let numbersNotUnique = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
for (const num of numbersNotUnique) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
console.log(unique);

const unique2 = numbersNotUnique.filter(
  (el, index, arr) => arr.indexOf(el) === index
);

console.log(unique2);

// 3. Сортировка пузырьком (Bubble Sort) (Самое сложное задание из текущего списка, для выполнения необходимо изучить данный алгоритм который так и называется Пузырьковая сортировка).
// - Дан массив let numbers = [5, 3, 8, 1, 2];
// - Необходимо его отфильтровать в порядке возрастания
// - В результате мы должны получить [1, 2, 3, 5, 8]

const toBubbleSort = [5, 3, 8, 1, 2];
const bubbleSorted = [...toBubbleSort];
const iteration = toBubbleSort.length - 1;
for (let i = 0; i < iteration; i++) {
  for (let j = 0; j < iteration - i; j++) {
    if (bubbleSorted[j] > bubbleSorted[j + 1]) {
      const temp = bubbleSorted[j];
      bubbleSorted[j] = bubbleSorted[j + 1];
      bubbleSorted[j + 1] = temp;
    }
  }
}
console.log(`Before: ${toBubbleSort}`);
console.log(`After: ${bubbleSorted}`);
