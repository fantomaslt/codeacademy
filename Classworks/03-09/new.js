// skaiciuoja lyginiu skaiciu suma

let arr = [2,4,5,7,8,12,4,7,-2,2,7];
​
function suma(arr1) {
    let sum=0;
​
	for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum = sum + arr[i];
        }
    }
​
	return sum;
}
​
console.log(suma(arr));
