function multiplyGetters(arr){
let num1Arith = new Set();
let num2Geo = new Set();

for(let i = 1; i < arr.length;i++){

let num1 = arr[i] - arr[i - 1];
let num2 = arr[i] / arr[i-1];

    num1Arith.add(num1);
    num2Geo.add(num2);
}

if(num1Arith.size === 1){
    return "Arithmetic";
}
if(num2Geo.size === 1){
    return "geometric"
}
return "nonsence"

}


// testers

console.log(multiplyGetters([2,4,6,8,10]));
console.log(multiplyGetters([2,4,8,16]));
console.log(multiplyGetters([1,4,7,8,13]));