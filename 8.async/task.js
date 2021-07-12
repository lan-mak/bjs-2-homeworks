"use strict";

class AlarmClock {
  // методы класса
  constructor() {
    this.alarmCollection = [];
    this.timerId = [1, 2, 3];
  }
  
  addClock(doTimer = '20,30', cellback = 'какая-то функция', id = 2) {
    let timer = new Date();
    let mDoTimer = doTimer.split(',')
    timer.setHours(mDoTimer[0], mDoTimer[1]);
    console.log(`${timer.getHours()}:${timer.getMinutes()}`)
    
    let mCellback = cellback;
    console.log(mCellback)

    if (!id) {
      throw new Error('Параметр id не передан')
    }

    console.log(id)
    this.timerId.forEach(function(item) {
      if (item === id) {
        return true;
      } 
    })
    

  }
}



const test = new AlarmClock;
test.addClock()
