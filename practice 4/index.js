function facTorial(fac){
  let facNum = 1;  
for(let i = 1; i<=fac ;i++){
facNum *= i;

}
return facNum;
}

console.log(facTorial(5));