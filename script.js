const num1 = Number(prompt("Give me 1st number"));
const num2 = Number(prompt("Give me 2nd number"));

const sum = (a, b) => {
  alert(`The result of sum is ${a + b}!`);
  alert(`The result of subtract is ${a - b}!`);
  alert(`The result of multiply is ${a * b}!`);
  alert(`The result of division is ${Math.round(a / b)}!`);
  return 0;
};

sum(num1, num2);
