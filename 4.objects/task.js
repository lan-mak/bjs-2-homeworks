function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  //ваш код
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  //ваш код
  const marksTemp = marks;
  if (this.marks === undefined) {
    this.marks = marksTemp;
  } else {
    this.marks = this.marks.concat(marksTemp);
  }
}

Student.prototype.getAverage = function () {
  //ваш код
  this.getAverage = this.marks.reduce((sum, current) => sum + current) / this.marks.length;
}

Student.prototype.excludeStudent = function (reason) {
  //ваш код
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
