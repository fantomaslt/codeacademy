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