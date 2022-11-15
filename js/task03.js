'use strict';

// 1-ый способ
const getReverseString = (str) => {
  return str.split('').reverse().join('');
}

console.log(getReverseString('Привет мир'));

// 2-ой способ
/*const getReverseString = (str) => {
  let arr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    arr += str[i];
  }
  return arr;
}

console.log(getReverseString('Привет мир'));*/


