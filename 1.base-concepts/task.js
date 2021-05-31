'use strict';

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  arr = []
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a))
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
    console.log(arr)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  const data = {
    percentData: percent,
    contributionData: contribution,
    amountData: amount,
    dateData: date,
  }

  for (let item in data) {
    if (typeof data[item] === 'string') {
      data[item] = +data[item]
    }
    if (isNaN(data[item])) {
      console.log(`Параметр ${item} содержит неправильное значение ${percent}`)
    }
  }

  const totalDebt = data.amountData - data.contributionData;
  const creditTerm = ((date.getTime() - Date.now()) / 2629800000).toFixed(0)
  const monthlyPercent = (data.percentData / 100) / 12;
  const monthlyPayment = totalDebt * (monthlyPercent + monthlyPercent / ((Math.pow((1 + monthlyPercent), creditTerm)) - 1))
  totalAmount = +((monthlyPayment * creditTerm).toFixed(2))
  
  console.log(`ответ: ${totalAmount}`)
  return totalAmount;
}
