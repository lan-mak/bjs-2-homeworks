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
      console.warn('id удален = true')
      return true
    } else {
      console.warn('id удален = true')
      return false
    }
  }

  getCurrentFormattedTime() {

    let Data = new Date();
    let Hour = Data.getHours() < 10 ? `0${Data.getHours()}` : `${Data.getHours()}`;;
    let Minutes = Data.getMinutes() < 10 ? `0${Data.getMinutes()}` : `${Data.getMinutes()}`; ;

    // console.log(Hour + ":" + Minutes, 'текущее время')
    return `${Hour}:${Minutes}`
  }

  start() {

    let currentTime = this.getCurrentFormattedTime()
    this.alarmCollection.forEach(checkClock)

    console.log(currentTime)

    function checkClock(item) {
      if (item.timeAction === currentTime) {
        item.func()
      } 
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(checkClock)
      });
    }
  }
}



const test = new AlarmClock;
test.addClock('20:20', f => f, 5)
test.addClock('20:25', f => f, 1)
test.addClock('20:25', f => f, 5)
test.addClock('23:22', f => f, 6)

test.removeClock(7)
test.start()
