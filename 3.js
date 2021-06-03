function f(x) {
  return x !== 1 ? f(x - 1) * (x - 1) : 1;
}

function sumDigits(item) {
  var value = f(item),
    sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  return sum;
}

console.log(sumDigits(5));
