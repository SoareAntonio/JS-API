//1.Creează clasa Rectangle cu metode area() și perimeter(). Creează apoi Square care extinde Rectangle.

class Rectangle {
  constructor(width,height){
    this.width=width;
    this.height=height;
  }

  area(){
    return this.width * this.height;
  }

  perimeter(){
    return 2*(this.width + this.height);
  }
}

//clasa derivata: Square
class Square extends Rectangle{
  constructor(side){
    //un patrat are laturile egale deci trimitem side pentru ambele
    super(side,side);
  }
}

const r = new Rectangle(10, 5);
console.log('Rectangle Area:', r.area());         // 50
console.log('Rectangle Perimeter:', r.perimeter()); // 30

const s = new Square(4);
console.log('Square Area:', s.area());           // 16
console.log('Square Perimeter:', s.perimeter());   // 16

//2.Creează fișierul stringUtils.js (din care exporți funcțiile camelCase, snakeCase - pe care le și implementezi) și apoi creează fișierul index.js unde imporți acele funcții și le testezi cu diferite exemple.

import { camelCase, snakeCase } from './stringUtils.js';

const examples = [
  'Hello world',
  'this-is-a-test',
  'Another_example case'
];

examples.forEach(str => {
  console.log(`Original: ${str}`);
  console.log(`camelCase: ${camelCase(str)}`);
  console.log(`snakeCase: ${snakeCase(str)}`);
  console.log('---');
});

//3.Scrie o funcție makeLogger(prefix) care returnează o funcție ce va loga mesajele cu un prefix (demonstrând closure, astfel mesajele sunt păstrate pe un array intern funcției, inaccesibil direct din afara ei).

function makeLogger(prefix){
  const messages=[];//array intern privat

  return function log(message){
    const fullMessage=`${prefix} : ${message}`;
    message.push(fullMessage);
    console.log(fullMessage);
  };
}

const errorLogger = makeLogger('ERROR');
errorLogger('Something went wrong');    // Console: ERROR: Something went wrong
errorLogger('Another error');           // Console: ERROR: Another error

const infoLogger = makeLogger('INFO');
infoLogger('App started');              // Console: INFO: App started

// Nu ai acces la array-ul intern messages de la exterior
/* Practic:

makeLogger e o funcție care, la apel, creează o variabilă privată messages (un array).

Apoi returnează o altă funcție (log), care are acces la messages datorită closure-ului.

Acea funcție log este stocată în errorLogger.

Deci, errorLogger nu e un simplu string sau un obiect, e o funcție care:

primește un mesaj,

îl prefixează cu ERROR,

îl adaugă în messages (care e ascunsă în closure),

și îl afișează în consolă.*/