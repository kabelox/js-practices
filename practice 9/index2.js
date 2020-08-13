function endMe(str,words){

    if(str.substr(-words.length)== words
    ){
        return true;
    }
    else{
        return false;
    }



}

console.log( endMe("kabelox","belox"));