const DOM = {
  type: "body",

  classNames: [],

  id: null,

  children: [
    {
      type: "div",

      classNames: ["wrapper"],

      id: null,

      children: [
        {
          type: "header",

          classNames: ["header", "container", "mb-8"],

          id: null,

          children: [],
        },

        {
          type: "div",

          classNames: ["main", "container", "mb-8"],

          id: null,

          children: [
            {
              type: "div",

              classNames: ["products", "mb-8"],

              id: "unicalId",

              children: [
                {
                  type: "div",

                  classNames: ["product"],

                  id: null,

                  children: [],
                },

                {
                  type: "div",

                  classNames: ["product"],

                  id: null,

                  children: [],
                },

                {
                  type: "div",

                  classNames: ["product"],

                  id: null,

                  children: [],
                },
              ],
            },
          ],
        },

        {
          type: "footer",

          classNames: ["footer", "container"],

          id: null,

          children: [],
        },
      ],
    },
  ],
};

// 1. Функция querySelector(selector):
// - Принимает строку-селектор (например, ".product" или "div").
// - Возвращает первый элемент, соответствующий селектору. Если элемент не найден, возвращает null.

function querySelector(selector, node = DOM) {
  const isClass = selector.startsWith(".");
  const isId = selector.startsWith("#");
  const target = isClass || isId ? selector.slice(1) : selector;

  if (
    (isClass && node.classNames && node.classNames.includes(target)) ||
    (isId && node.id === target) ||
    (!isClass && !isId && node.type === selector)
  ) {
    return node;
  }

  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      const found = querySelector(selector, child);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

console.log(querySelector(".products"));
console.log(querySelector("#unicalId"));
console.log(querySelector("div"));
console.log(querySelector("DIV"));

// 2. Функция querySelectorAll(selector):

// - Принимает строку-селектор.

// - Возвращает массив всех элементов, соответствующих селектору. Если элементы не найдены, возвращает пустой массив.

function querySelectorAll(selector, node = DOM) {
  const isClass = selector.startsWith(".");
  const isId = selector.startsWith("#");
  const target = isClass || isId ? selector.slice(1) : selector;
  let arrOfEl = [];
  if (
    (isClass && node.classNames && node.classNames.includes(target)) ||
    (isId && node.id === target) ||
    (!isClass && !isId && node.type === selector)
  ) {
    arrOfEl.push(node);
  }

  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      arrOfEl = arrOfEl.concat(querySelectorAll(selector, child));
    }
  }

  return arrOfEl;
}

console.log(querySelectorAll(".product"));
