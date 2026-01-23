let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
function multi(a, b) {
  return a * b;
}
class Calculator {
  square(x) {
    return x * x;
  }
  division(x, y) {
    return x / y;
  }
}
export { sum, sub, Calculator };
