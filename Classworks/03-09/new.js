// // skaiciuoja lyginiu skaiciu suma
// // i yra indeksas, kadangi reikia reiksmes tai arr[i] REIKSME
// let arr = [2,4,5,7,8,12,4,7,-2,2,7];
// function sumarr(_arr_) {
//     let sum=0;
//
//     for (let i=0; i < _arr_.length; i++) {
//         if (_arr_[i] % 2 == 0) {
//             sum = sum + _arr_[i]; // apskaiciuoja suma
//         }
//     }
//
//     return sum;  // grazina suma
// }
// console.log(sumarr(arr));
// document.write(sumarr(arr));
//
//
// //funkcija patikrina ar skaicius yra lyginis
//
// function isEven(num) {
//  if (typeof  num != 'number'){
//      return Nan;
//  }
//     return num % 2 === 0;
// }
//
//
//

let name = prompt("what is your name?");
let first = name.slice(0,1);
let firstup = first.toUpperCase();
let rest = name.slice(1,name.length);
let restsmall = rest.toLocaleLowerCase();
let fullname = firstup + restsmall;
alert("Hello , " +  );fullname