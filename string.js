// 1. Базовые преобразования
// - Дана строка: " JavaScript is AWESOME "
// - Преобразуйте её в строку: "JAVASCRIPT IS AWESOME" и полученный результат выведите в консоль

const string1 = " JavaScript is AWESOME ";
console.log(string1.trim().toUpperCase());

// 2. Извлечение подстрок
//  - Дана строка: "2024-07-30"
// - Получите отдельно и запишите в соответствующие переменный: Год: "2024" / Месяц: "07" / День: "30", после выведите эти переменный в консуль

const string2 = "2024-07-30";
console.log(
  `Год: "${string2.split("-")[0]}"/ Месяц: "${
    string2.split("-")[1]
  }" / День: "${string2.split("-")[2]}"`
);

//  3. Поиск и замена
// - Дана строка "    Я люблю JavaScript!. Я люблю это дело   " замените:
// - "JavaScript" на "программирование"
// - Все слова 'люблю ' на 'обожаю'
// - Полученный результат выведите в консоль

const string3 = "    Я люблю JavaScript!. Я люблю это дело   ";
console.log(
  string3
    .replace(/JavaScript/g, "программирование")
    .replace(/люблю/g, "обожаю")
    .trim()
);

//   4. Работа с разделителями
// - Дан список: "яблоки,груши,виноград"
//  - Преобразуйте его в: "ЯБЛОКИ | ГРУШИ | ВИНОГРАД"
// - Полученный результат выведите в консоль

const string4 = ["яблоки", "груши", "виноград"]; // я так понял что список это array массив если это стринг то переделаю
console.log(string4.join(" | ").toUpperCase());

//  5. Проверка содержимого
//  - Дана строка: "example@mail.com"
// - Проверьте, содержит ли она символ @
//  - Проверьте, заканчивается ли на .com

const string5 = "example@mail.com";
console.log(string5.includes("@")); // true содержит)
console.log(string5.endsWith(".com")); // да заканчивается)

//  6. Маскирование данных
// - Дана банковская карта: "1234567812345678"
// - Преобразуйте в: "1234 **** **** 5678"
// - Полученный результат выведите в консоль

const string6 = "1234567812345678";
console.log(
  string6
    .replace("56781234", "********")
    .split("")
    .reduce(
      (acc, curr) => {
        if (acc.chunk < 4) {
          acc.substr += `${curr}`;
          acc.chunk += 1;
        } else {
          acc.substr += ` ${curr}`;
          acc.chunk = 0;
          acc.chunk += 1;
        }
        return acc;
      },
      { chunk: 0, substr: "" }
    ).substr
);

// 7. Анализ строки
// - Дана строка: "Hello World!"
// - Длину строки
// - Первый символ
// - Последний символ
// - Символ посередине
// - Полученные результаты выведите в консоль

const string7 = "Hello World!";
console.log(
  string7.length +
    "\n" +
    string7[0] +
    "\n" +
    string7[string7.length - 1] +
    "\n" +
    string7[Math.floor(string7.length - 1 / 2)]
);
