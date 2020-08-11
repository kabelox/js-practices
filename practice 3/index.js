// function stringReverse(str){
// let reverseStr = str.split("");
//  let result = reverseStr.reverse().join("")
// return result;

// }

// console.log(stringReverse("hello"));


// version 2 

function funcReverse(str){
let result = "";

for(let i = str.length -1 ; i >= 0;i--){
result += str[i];
}
return result;

}

console.log(funcReverse("hello"));