function cipher(str){

let solved = "";
for(let i = 0; i<str.length;i++){
let num = str.charCodeAt();
if(num >= 65 && num <= 77){
    solved += String.fromCharCode(num + 13)
}
else if(num >= 78 && num <= 95){
    solved += String.fromCharCode(num - 13)

}
else{
    solved += str[i]
}
return solved;
}



}
console.log(cipher("Z"));