// // Задача №1

// function cachingDecoratorNew(func) {
//   // Ваш код
//   let cache = [];

//   function wrapper(...args) {

//     let checkCache = cache.findIndex(item => item.args === args.join(','));

//     if (checkCache >= 0) {
//       console.log(cache[checkCache].count)
//       return "Из кэша: " + cache[checkCache].count;
//     } else if (checkCache < 0) {
//       return checkArrLength()
//     }

//     function checkArrLength() {
//       let objItem = {
//         args: args.join(','),
//         count: args.reduce((sum, current) => sum + current)
//       };

//       if (cache.length < 5) {
//         cache.push(objItem);
//         return "Вычисляем: " + objItem.count;
//       } else if (cache.length >= 5) {
//         cache.shift();
//         cache.push(objItem);
//         return "Вычисляем: " + objItem.count;
//       }
//     }
//   }

//   return wrapper
// }


// const addThree = (a, b, c) => a + b + c;
// const upgradedAddThree = cachingDecoratorNew(addThree);
// upgradedAddThree(1, 2, 3); // вычисляем: 6
// upgradedAddThree(1, 2, 3); // из кэша: 6
// upgradedAddThree(2, 2, 3); // вычисляем: 7
// upgradedAddThree(3, 2, 3); // вычисляем: 8
// upgradedAddThree(4, 2, 3); // вычисляем: 9
// upgradedAddThree(5, 2, 3); // вычисляем: 10


// Задача №2

function debounceDecoratorNew(f, ms) {
  // Ваш код
  let timeout;
  let point = 0;


  function wrapper(...args) {

    if (!timeout) {
      f()
    }

    timeout = performance.now()

    if (timeout - ms > ms && point === 0 ) {
      f()
      point = performance.now()
    } else if (point - timeout > ms) {
      f()
      point = performance.now()
    }
  }

  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично

// function debounceDecorator2(func) {
//   // Ваш код
//  }
