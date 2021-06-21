'use strict';

// Задача №1

function parseCount(value) {
  let valueItem = Number.parseInt(value);

  if (Number.isNaN(valueItem)) {
    const valueError = new Error('Невалидное значение');
    throw valueError;
  }

  return valueItem;
}

function validateCount(item) {
  try {
    return parseCount(item);
  } catch (e) {
    return e;
  }
}

// Задача №2

class Triangle {
  constructor(a, b, c) {
    if (a > b + c || b > a + c || c > a + b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {

    return Number(this.a + this.b + this.c);
  };

  getArea() {
    let p = 1 / 2 * (this.a + this.b + this.c);
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(itemA, itemB, itemC) {
  try {
    return new Triangle(itemA, itemB, itemC);
  } catch (e) {
    const eText = "Ошибка! Треугольник не существует";
    return {
      getArea: function () {
        return eText;
      },
      getPerimeter: function () {
        return eText;
      }
    }
  }
}
