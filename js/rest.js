// const log = function(a, b, ...rest) {
//     console.log(a, b, ...rest);
// }

// console.log(log(1, 2, 4, 5, 6, 7));

// let arr = [1, 2, 3];

// let copy = [...arr];

// console.log(copy);

// function calcOrDouble(number, basis = 10) {
//     basis = basis || 2; //ete basis chka kta 2@ undefinedi poxaren
//     console.log(number * basis);
// }

// calcOrDouble(3);

// function setOptions(height, width, ...add) {
//     console.log(height, width, ...add);
// }

// setOptions(100, 200, 'red', 'blue');

// 'use strict';

// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5);

// const urlObj = {
//     protocol: 'https',
//     domain: 'mysite.com'
// }
 
// function showCurrentURL() {
//     const extractCurrDomain = () => {
//         return this.domain;
//     }
//     const extractCurrProtocol = () => {
//         return this.protocol;
//     }
 
//     console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
// }
 
// const url = showCurrentURL.bind(urlObj);
 
// console.log(url);

// let obj = {};
// function A() {return obj};
// function B() {return obj};
// console.log(new A() == new B());

//function constructor CALC
// function Calculator (firstNum, secNum) {
//     this.firstNum = firstNum;
//     this.secNum = secNum;
//     this.read = function () {
//         this.firstNum = +prompt('enter your first number');
//         this.secNum = +prompt('enter your second number');
//     };
//     this.sum = function () {
//         return this.firstNum + this.secNum;
//     };
//     this.mul = function () {
//         return this.firstNum * this.secNum;
//     };
// }

// let calc = new Calculator();

// calc.read();
// console.log(calc.sum());
// console.log(calc.mul());

//function constructor accumulator

// function Accumulator (start) {
//     this.val = start;
//     this.read = function() {
//         this.sec = +prompt('enter sec num');
//         return this.sec + this.val;
//     };
// }

// let ac = new Accumulator(1);

// console.log(ac.read());

// var message = (function(name) {
//     return 'Hello ' + name + '!';
//  })('World');
//  console.log(message); // => 'Hello World!'

//  function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
//     this.logInfo = function() {
//       console.log(this === myCat); // => false
//       console.log('The ' + this.type + ' has ' + this.legs + ' legs');
//     };
//   }
//   var myCat = new Animal('Cat', 4);
//   // logs "The undefined has undefined legs"
//   // or throws a TypeError, in strict mode
// //   setTimeout(myCat.logInfo, 1000);
//   setTimeout(myCat.logInfo.bind(myCat), 1000);

class City {
    constructor(name, traveled) {
      this.name = name;
      this.traveled = false;
    }
    travel() {
      this.traveled = true;
    }
  }
  // Constructor invocation
  var paris = new City('Paris', false);
  console.log(paris.travel());
/////////////////////
'use strict';

function zoo(txt) {
  console.log(txt + " " + this.name);
}
let person = {
  name: 'Arev',
  age: 33
};

zoo.call(person, "Hello");

zoo.call(person);

let f = zoo.bind(person);

let a = {
  f: function() {
    console.log(this);
  }
};

a.f();