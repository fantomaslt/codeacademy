






// Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.

function square(number) {
    return number*number;
}
console.log(square(5));


// Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.

function sum(a,b) {
    return a+b;
}
console.log(sum(2,3));

// Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.

function result(c,d,e) {
    return  (d-c)/e;

}
console.log(result(2,4, 2 ));


// Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.
let days=['pirmadienis','antradienis','treciadienis','ketvirtadienis','penktadienis','sestadienis','sekmadienis'];
function dayOfTheWeek(number) {
    if (n < 0 || n > 7) {
        return 'Tokios savaitės dienos nėra'
    }

    return days[number-1];
}
console.log(dayOfTheWeek(2));