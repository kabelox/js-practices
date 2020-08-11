function stringReverse(str){
let reverseStr = str.split("");
 let result = reverseStr.reverse().join("")
return result;

}

console.log(stringReverse("hello"));