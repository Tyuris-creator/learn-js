const num1 = Number(prompt("Give me 1st number"));
const num2 = Number(prompt("Give me 2nd number"));

const sum = (a, b) => {
  alert(`The result is ${a + b}!`);
  console.log(a + b);
  return 0;
};

sum(num1, num2);
