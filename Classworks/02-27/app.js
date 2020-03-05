// var x = 5 + 5;
// var y = "5" + 5;
// var z = "Hello" + 5;
// document.getElementById("demo").innerHTML =
//     x + "<br>" + y + "<br>" + z;
//
// let arr = ( 'hello 1 world');
// console.log(arr)
// var d = 3;
// var e =  4;
// var z = d * e;
// console.log(d,e,z)
//
//
// var x = 1 ;
// var e = 2 ;
// var w = 3;
// var q = 7;
// const p = (x + e ) * (q * w);
// console.log(p);
//
// let year = 2020;
//
// console.log(year);
//
// const xs = 50;
// const rs = 2;
// const l = xs * rs ;
// document.getElementById("demo").innerHTML =
//     xs + "<br>" + rs + "<br>" + l;
// console.log(l);
//
// var a = 2;
// var c = 3;
// var b = a + c;
// console.log(b);
//
// let name = "tomas";
// let birthday = "geguzes 12";
// console.log (name + ' yra gimes '+ birthday);
//
//
//
// var atsakymas = prompt("Please enter your name", "Harry Potter");
// // console.log(atsakymas);
//
// var klausimas = prompt("bazinis uzmokestis iveskite");
// var z = 1761463 * klausimas ;
// var atsakymas = (z * 100 ) /  8487300000 ;
// document.write("atsakymas");
// console.log(klausimas);
// console.log(z)
// console.log(atsakymas + "%")
//
// let baseamount = prompt('Įveskite bazinį išmokos dydį:');
// let workingpeople = 1761463;
// let budget = 8487300000;
// document.write(`Bazinė išmoka sudarys ${baseamount * workingpeople*100/budget} % metinio Lietuvos biudžeto`);


// var tweet = prompt("compose your tweet:");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140);
// alert("You have written " + tweet.length + " characters, you have " + ( 140 - tweet.length ) + " charecters remaining.");


// alert(prompt("compose your tweet").slice(0.140));

// Vardas visada is didziosios raides

// var name = prompt("what is your name?");
// var first = name.slice(0,1);
// var firstup = first.toUpperCase();
// var rest = name.slice(1,name.length);
// var restsmall = rest.toLocaleLowerCase();
// var fullname = firstup + restsmall;
// alert("Hello , " + fullname );


// suns metai zmogaus metais skaiciuokle
//
// var dogage = prompt("Please write what is yours dog age? ");
// var humanage = ( dogage -2 ) * 4 + 21 ;
// alert("Yours dog age in human years is : " + humanage ) ;





// svorio indekso skaiciavimas bmi arba kmi


// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);
// }
//
// var bmi = bmiCalculator(88, 1.8);
// console.log(bmi);




// kauliuku imitacija dice -------

// var n = Math.random();
// // n = n * 6;
// // n = Math.floor(n) + 1 ; // suapvalina skaiciu ir prideda 1
// // console.log(n);





/* Love score tarp vardu ---------------------------

prompt("iveskite savo ir kito varda") ;
prompt("ivesk antra varda");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1 ;
console.log(loveScore);

alert("jusu sutapimas yra " + loveScore + " % ");

 -------------------------------------------------*/

// prompt("iveskite savo ir kito varda") ;
// prompt("ivesk antra varda");
//
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1 ; //1-100 gaunam skaiciu
//
// if (loveScore > 70) {
//     alert("jusu skaicius yra "  + loveScore + "%" + "ahubybienai");
// }
// else
// {
//     alert("jusu skaicius yra "  + loveScore + "%" );
// }
// console.log(loveScore);
//
// // alert("jusu sutapimas yra " + loveScore + " % ");


// pirma uzduotis
// let num=("3");
// alert(num);
// //antra uzduotis
// let a=10;
// let b=2;
// document.write(' suma =  ', a+b, " skirtumas =  ", a-b, " daugyba = ", a*b, " dalyba = ", a/b);
// // Trecia uzduotis
// let c=15;
// let d=2;
// let result= c+d;
// document.write("kintamuju suma yra = ", result);
// //ketvirta uzduotis
// let a=17;
// let b=10;
// let c=a-b;
// let d=7;
// let result=c+d;
// document.write(c,result);
// // Penkta uzduotis
// let str="Hello World!";
// document.write(str);
// //Sesta uzduotis
// let str1="Hello";
// let str2="world!";
// document.write(str1," ",str2);
// //Septinta uzduotis
// let myName="Karolis";
// document.write("Hello, ", myName);
// //Astunta uzduotis
// let age=34;
// document.write("'I`am ", age , " old!'");
// //Devinta uzduotis
// let username=prompt("What's your name? ");
// alert(" Your name " + username);





//10 uzduotis
var dvimatis={ lt:["pirmadienis", "antradienis","treciadienis", "ketvirtadienis", "penktadienis", "sestadienis", "sekmadienis"],
    en:["monday", "thuesday", "wensday", "thursday", "friday", "saturday","sunday"]};
console.log(dvimatis.lt[0], " ", dvimatis.en[2]);

// 11 uzduotis





// --------------------------------------------------------------------------------------------------------------------------------------------


//     Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
//     Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
// Duotas masyvas [1, 2, 3, 4, 5]. Konvertuokite masyvą į [1, 4, 5].
//     For ir While
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.
// Atspausdinkite skaičių stulpelį nuo 11 iki 33.
// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.
// Naudodami ciklą parodykite sumą nuo 1 iki 100.
// For ir masyvai
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
//     Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
//     for-in
// Duotas objektas green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
//     Duotas objektas su raktais Mantas, Paulius, Mindaugas su reikšmėm 200, 300, 300. Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
//     Duotas masyvas su elementais 2, 5, 9, 15, 0, 4. Naudodami for ir if parodykite masyvo elementus kurie yra daugiau nei 3, bet mažiau nei 10
// Duotas masyvas su skaičiais. Skaičiai gali būti teigiami ir neigiami. Raskite teigiamų masyvo skaičių sumą.
//     Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus šio masyvo elementus pasinaudoję ciklais for, while
//     Duotas masyvas su elementais [2, 3, 4, 5]. Parodykite šio masyvo elementų produktą (daugyba), naudokite for ciklą.
//     Duotas objektas su raktais Vilnius, Riga, Talinas ir reikšmėm Lietuva, Latvija, Estija. Parodykite eilutes tokiu formatu: Vilnius yra Lietuva naudodami for-in ciklą;


// //pirma uzduotis

var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3 = arr1.concat(arr2);
console.log(arr3);
//antra uzduotis
var masyvas1=[1,2,3];
var apverstas=masyvas1.reverse();
console.log(apverstas);
// trecia uzduotis

var mas=[1,2,3];
mas.push(4,5,6);
mas.unshift(-3,-2,-1);
console.log(mas);

// ketvirta uzduotis

var m=["html","css", "js"];
console.log(m.slice(0,2));

//penkta uzduotis

var kazkas=[3,4,1,2,7];
console.log(kazkas.);

asd g g gds g