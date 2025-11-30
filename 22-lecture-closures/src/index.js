import { products } from "./productsData.js";
// поиск осуществляется по name параметру
function searchProducts(products, searchWord) {
  const results = [];
  const lowerSearchWord = searchWord.toLowerCase();

  function searchInArray(items) {
    for (const item of items) {
      if (item.name && item.name.toLowerCase().includes(lowerSearchWord)) {
        results.push(item);
      }
      if (item.children && Array.isArray(item.children)) {
        searchInArray(item.children);
      }
    }
  }

  searchInArray(products);
  return results;
}

console.log(searchProducts(products, "Iphone"));

// второй вариант без внутренней функции
function searchProducts2(products, key) {
  let result = [];
  const keyWord = key.toLowerCase();
  for (const item of products) {
    if (item.name && item.name.toLowerCase().includes(keyWord)) {
      result.push(item);
    }
    if (item.children && Array.isArray(item.children)) {
      result.push(...searchProducts2(item.children, key))
    }
  }
  return result;
}
