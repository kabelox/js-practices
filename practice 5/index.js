// function palenDrome(str){
// let reg = /[\w] /g;
// let small = str.toLowerCase().replace(reg,"");  
// let convert = small.split('').reverse().join('');
//   return convert === small  ? true: false;
   

// }
// console.log(palenDrome("$eye$"));


function funcPal(str){
let convert = str.split("").reverse().join('');


let reg = /[\w_]/g;
let small = convert.toLowerCase().replace(reg,"");
if(convert === str){
    return true
}
else{
    return false
}



}

console.log(funcPal("_$$$eye$$$_"));