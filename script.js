// 1. Написание чистой функции
// Задача:
// - Напишите функцию addToCart принимает массив const cart = ['apple', 'banana', и] и товар item - addToCart(cart, 'orange').
// - Она должна возвращать новый массив, содержащий все элементы cart и новый item.
// - Исходный массив cart не должен изменяться.

cart = ["apple", "banana"];
function addToCart(arr, item) {
  return [...structuredClone(arr), item]; // можно spread, также JSON.stringify JSON.parse и цикл тоже
}

const cart1 = addToCart(cart, "orange");
console.log(cart1, cart);

// 2. Проблема поверхностного копирования
// Задача:
// - Дан объект user.
// - Создайте его глубокую копию userClone, так чтобы изменение userClone.profile.settings.theme не влияло на исходный объект user.
// - userClone.profile.settings.theme = 'light'; console.log(user.profile.settings.theme); // Должно остаться 'dark'

const user = {
  name: "Alice",
  profile: {
    settings: {
      theme: "dark",

      notifications: true,
    },
  },
};

const userClone = JSON.parse(JSON.stringify(user));
userClone.profile.settings.theme = "light";
console.log(user);
console.log("*********");
console.log(userClone);

//  3. Возврат по ссылке

// проблемный код снизу

function getLogger() {
  const logs = [];
  return {
    addLog(message) {
      logs.push(message);
    },
    getLogs() {
      return logs; // Возвращается ссылка на массив
    },
  };
}

const logger = getLogger();
logger.addLog("Session started");
const logsReference = logger.getLogs();
logsReference.push("User logged in");

console.log(logger.getLogs()); // здесь будет [ 'Session started', 'User logged in' ] так как копируем ссылку а не значение
// объект с методами который возвращает нам функция getLogger иммеет доступ к logs соответственно он его мутирует так как знает его адрес
// мутировать этот массива из вне нарушает прицнип чистоты функции что приводит к не предвиденному поведению.
// Я вижу несколько решений проблемы
const getLogs0 = () => [...logs]; // shallow copy может быть проблемно
const getLogs1 = () => logs.join(","); // просто вернуть строку логов
const getLogs2 = () => [...structuredClone(logs)];
const getLogs3 = () => [...JSON.parse(JSON.stringify(logs))];
const getLogs4 = () => `${logs}` // просто вернуть литерал при попытке запушить будет ошибка типа



// 4. Чистая функция, изменяющая вложенный объект
// Задача:
// - Напишите чистую функцию enableDarkTheme(user), которая принимает объект пользователя и возвращает его новую копию, в которой свойство user.profile.settings.theme установлено в 'dark'.
// - Исходный объект должен остаться неизменным.

function enableDarkTheme(user) {
    const changedUserSettings = structuredClone(user)
    changedUserSettings.profile.settings.theme = 'dark'
    return changedUserSettings
}

const newTheme = enableDarkTheme(user)
console.log(newTheme)
console.log('************')
console.log(user)
