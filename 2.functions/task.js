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
  sum = arr;
  for (let i = 0; i < sum.length; i++) {
    let sumArrayItem = sum[i].reduce((sum, item) => sum + item)
    sum[i] = sumArrayItem;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  max = null
  let sumItem = func(arrOfArr)
  for (let i = 0; i < sumItem.length; i++) {
    if (sumItem[i] >= max) {
      max = sumItem[i]
    }
  }

  return max
}
