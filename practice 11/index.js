function theTrunk(str,num){
    if(num>=str.length)return str;
    if(num <=3 ) return str.slice(0,num)+"...";
    return str.slice(0,num - 3)+"...";

}
console.log(theTrunk("Hey-look-at-me-now",35));