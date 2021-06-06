'use strict';

function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  const checkArr = (arr_1, arr_2) => {
    if (arr_1.length === arr_2.length && arr_1.every((item, index) => item === arr_2[index])) {
      return Boolean(true);
    } else {
      return Boolean(false);
    };
  };

  result = checkArr(arr1, arr2);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(item => item > 0 && item % 3 === 0).map(item => item * 10);

  return resultArr; // array
}
