'use strict';

//Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type
  }

  fix() {
    let fix = this.state * 1.5;
    this.state = fix
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100) {
    super(name, releaseDate, pagesCount, state);

    this.type = 'magazine';
  }
  fix() {
    super.fix()
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100) {
    super(name, releaseDate, pagesCount, state);

    this.author = author;
    this.type = 'book';
  }
  fix() {
    super.fix()
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100) {
    super(author, name, releaseDate, pagesCount, state);

    this.type = 'novel';
  }
  fix() {
    super.fix()
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100) {
    super(author, name, releaseDate, pagesCount, state);

    this.type = 'fantastic';
  }
  fix() {
    super.fix()
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100) {
    super(author, name, releaseDate, pagesCount, state);

    this.type = 'detective';
  }
  fix() {
    super.fix()
  }
}

//Задача №2

class Library extends PrintEditionItem {
  constructor(name) {
    super(name);
    this.books = [];
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }


  findBookBy(type, value) {
    let findBook = this.books.find(book => book[type] === value)
    if (findBook === undefined) {
      return null
    } else {
      return findBook
    }
  }

  giveBookByName(bookName) {
    let giveBook = this.books.find((book, i) => {
      if (book.name === bookName) {
        return this.books.splice(i, 1)
      }
    })
    if (giveBook === undefined) {
      giveBook = null
    }
    return giveBook
  }
}

//Задача №3

class Student {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  addGrade(mark, subject) {
      if(mark > 5) {
        alert('Ошибка, оценка должна быть числом от 1 до 5')
      } else {
        if(subject in this.subjects === false) {
          let arreyItems = []
          arreyItems.push(mark)
          this.subjects[subject] = arreyItems
        } else {
          this.subjects[subject].push(mark)
        }
      }
  }

  getAverageBySubject(subject) {
    if(subject in this.subjects === false) {
      alert('Несуществующий предмет')
    } else {
      let arrItems = (this.subjects[subject].reduce((sum, current) => sum + current)) / this.subjects[subject].length
      return arrItems
    }
  }

  getAverage() {
    let sumAllItems = [].concat(...Object.values(this.subjects)).reduce((sum, current) => sum + current)
    return sumAllItems / [].concat(...Object.values(this.subjects)).length
  }

  exclude(reason) {
    delete this.subjects;
    this.excluded = reason;
  }
}

