// funciton with a str parameter

function firstLong(str){

    // split the str , to iterate through
    let result = str.split(" ");
    let maxNum= []
    
    for(let i = 0;i<result.length;i++){
        let firstWord = result[i][0].toUpperCase();
        let rest = result[i].slice(1)
        let max = firstWord + rest;
        
    maxNum.push(max)
    }
    return maxNum.join(' ');
    
    }
    console.log(firstLong("i woke about up this morning and took a comfortable walk"));
    
    
    // split the str , to iterate through
    // use slice to make the first letter upeprcase
    // use slice to concatenate the uppercase with the rest of the words of the word
    // use the join method to make a string
    
    