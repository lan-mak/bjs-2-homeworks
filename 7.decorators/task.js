// Задача №1

function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];

  function wrapper(...args) {
  
    let checkCache = cache.findIndex(item => item.args === args.join(','));


    if (checkCache >= 0) {
      return "Из кэша: " + cache[checkCache].count;
    } else if (checkCache < 0) {
      return checkArrLength()
    }

    function checkArrLength() {
      let objItem = {
        args: args.join(','),
        count: func(...args)
      };

      if (cache.length < 5) {
        cache.push(objItem);
        return "Вычисляем: " + objItem.count;
      } else if (cache.length >= 5) {
        cache.shift();
        cache.push(objItem);
        return "Вычисляем: " + objItem.count;
      }
    }
  }

  return wrapper
}


const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10


// Задача №2

function debounceDecoratorNew(f, ms) {
  // Ваш код
  let timer;
  let flag = false

  function wrapper(...args) {
    if (!flag) {
      f()
      flag = true;
      timer = setTimeout(() => {
        flag = false
      }, ms)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        flag = false
      }, ms)
    }
  }

  return wrapper;
}


// const sendSignal = () => console.log("Сигнал отправлен");
// const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
// setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично


// Задача №3

function debounceDecorator2(func, ms) {
  // Ваш код
  let timer;
  let flag = false
  wrapper.count = null;

  function wrapper(...args) {
    wrapper.count += 1;
    if (!flag) {
      func()
      flag = true;
      timer = setTimeout(() => {
        flag = false
      }, ms)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        flag = false
      }, ms)
    }
  }

  return wrapper;
 }

// const sendSignal = () => console.log("Сигнал отправлен");
// const upgSendSignal = debounceDecorator2(sendSignal, 2000);
// setTimeout(upgSendSignal); // Сигнал отправлен
// setTimeout(upgSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
// setTimeout(upgSendSignal, 900); // проигнорировано аналогично
// setTimeout(upgSendSignal, 1200); // проигнорировано аналогично
// setTimeout(upgSendSignal, 2300); // проигнорировано аналогично
// setTimeout(upgSendSignal, 4400); // Сигнал отправлен
// setTimeout(upgSendSignal, 4500); // проигнорировано аналогично
// setTimeout(() => console.log(upgSendSignal.count), 5000)
