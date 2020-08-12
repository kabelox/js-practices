function firstLong(str){
let test = str.toLowerCase().split(" ").map(function(item){
return item[0].toUpperCase()+item.slice(1);
})
return test.join(" ");

}
console.log(firstLong("I'm a very excited chap because i'm learning javascript by kabelox"));