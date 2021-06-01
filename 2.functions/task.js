'Use strict'

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = 101;
  max = -101;
  sum = 0;

  const inArray = arr;

  for (let i = 0; i < inArray.length; i++) {
    sum += inArray[i];
    if (inArray[i] > max) {
      max = inArray[i];
    };
    if (inArray[i] < min) {
      min = inArray[i];
    };
  }

  avg = (sum / inArray.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...

  return max
}
