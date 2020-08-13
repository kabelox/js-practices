function theLongNum(arr){
let maxes = [];
for(let i = 0; i<arr.length;i++){
let tempMax = arr[i][0];
    for(let ii = 0 ; ii<arr[i].length;i++){
        let current = arr[i][ii];
        if(tempMax >= current){
            tempMax = current;
        }
    }

    maxes.push(tempMax)
}

return maxes;


}
console.log(theLongNum([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));