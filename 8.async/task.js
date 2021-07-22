"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(doTimer, cellback, id) {
    let itemCell = {};

    itemCell.timeAction = doTimer
    itemCell.func = cellback;
    itemCell.id = id;

    if (!id) {
      throw new Error('Параметр id не передан')
    }

    let addCheckId;

    this.alarmCollection.forEach(element => {
      if (element.id === id) {
        console.error('такой id существует')
        return addCheckId = true;
      }
    });

    if (!addCheckId) {
      this.alarmCollection.push(itemCell)
    }
  }

  removeClock(id) {
    let removeCheckId = this.alarmCollection.findIndex(item => {
      return item.id === id
    })

    if (removeCheckId >= 0) {
      this.alarmCollection.splice(removeCheckId, 1)
      console.warn('id удален')
      return true
    } else {
      return false
    }
  }

  getCurrentFormattedTime() {

    let currentDate = new Date();
    let Hour = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;;
    let Minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;;

    return `${Hour}:${Minutes}`
  }

  start() {
    let bindCheckClock = checkClock.bind(this)

    function сheckClock(item) {
      let currentTime = this.getCurrentFormattedTime()

      if (item.timeAction === currentTime) {
        item.func()
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(bindCheckClock)
      }, 60000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = null
    }
  }

  printAlarms() {
    console.log(`Всего будильников: ${this.alarmCollection.length}`)
    function showAlarms(item) {
      console.log(`id: ${item.id}; time: ${item.timeAction}`)
    }
    this.alarmCollection.forEach(showAlarms)
  }

  clearAlarms() {
    clearInterval(this.timerId)
    this.alarmCollection.splice(0, this.alarmCollection.length)
  }
}



const testCase = new AlarmClock();
testCase.addClock('21:42', f => console.log('Будильник 1', new Date()), 1)
testCase.addClock('21:43', f => console.log('Будильник 2', new Date()), 2)
testCase.addClock('21:44', f => {
  console.log('Будильник 3', new Date());
  testCase.clearAlarms();
  testCase.printAlarms();
}, 3)
testCase.addClock('21:58', f => console.log('Будильник 4'), 4)
testCase.printAlarms()
testCase.removeClock(4)
testCase.printAlarms()
testCase.start()
testCase.stop()
