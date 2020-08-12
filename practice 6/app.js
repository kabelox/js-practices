function findLong(str){
let arrStr = str.split(" ");
let result = "";
for(let item of arrStr){
    if(result.length<item.length){
        result = item;
    }
 
}
return result;
}
console.log(findLong("hey I'm Kabelo and I am inlove with sucessss"));