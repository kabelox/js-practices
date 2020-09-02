function primeNum(num){

for(let i = 2;i<num;i++){
if(num<2){
    return false;
}
if(num % i === 0){
    return false
}
else{
    return true;
}

}




}
console.log(primeNum(66));
console.log(primeNum(11));
console.log(primeNum(7));
console.log(primeNum(10));
console.log(primeNum(664343434));
console.log(primeNum(643));