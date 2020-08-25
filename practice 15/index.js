function whereIBelong(arr,num){
 let sorter = arr.sort(function(a,b){
    return a - b;
})

for(let i = 0; i <= arr.length;i++){
    if(num <= arr[i]){
        return i
    }
}
return arr.length;

}
console.log(whereIBelong([45,30,66,4],44));