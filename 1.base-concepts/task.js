function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d == 0) {
    arr.push(-b / (2 * a));
    console.log(arr);
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    console.log(arr);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let s = amount - contribution;
    let n = Math.round((date - new Date()) / 1000 / 60 / 60 / 24 / 30.5);
    let p = percent / 100 / 12;
    let monthPayment = s * (p + p / (Math.pow((1 + p), n) - 1));
    totalAmount = Math.round(monthPayment * n * 100) / 100;
  }

  return totalAmount;
}
