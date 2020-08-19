// function looker(arr){
// let res = arr.filter(function(item){
//     return item
// })
// return res
// }
// console.log(looker(["hello",false,undefined,"",4,9,0]))

function looker(arr){

let truth = [];
for(let item of arr){
if(item){
    truth.push(item)
}


}




return truth;



}
console.log(looker(["hello",false,undefined,"",4,9,0]))

