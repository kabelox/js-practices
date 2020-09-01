//function with the parameter of arr
// sort the arrys in any order descen nor assen
//iterate through the arrays
// test if the poped nor shifted num is equal to the sum of the arrays
//if true return true else false

function maxNum(arr){
let arrays = arr.sort(function(a,b){
    return b-a;
});

let max = arrays.shift();
let total=0;

for(let i = 0;i<arrays.length;i++){
    total+= arrays[i];


}
if(total === max){
    return true
}
else{
    return false;
}



}
console.log(maxNum([3,56,8,9,7,89,7,7]));
console.log(maxNum([1,2,3,6,7,1,20]));