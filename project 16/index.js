let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess=0;
let hits = 0;
let guesses = 0;
let isunk = false

while(isunk == false){
    guess = prompt("ready fire go!(0-6)");
        if(guess<0 || guess>6){
        alert("please enter valid!")
    }
    else{
        guesses++;
    }  

        if(guess == location1 || guess == location2 || guess == location3){
            hits++;
            alert("HIt")
        }
        else{
            alert("Missed!")
            alert("I've got you !!")
            hits--;
        }


        if(hits == 3){
            isunk = true;
            alert("you've finished me!")
        }

}
let stats = "you've took " +guesses+ " to sink the enemy's ship and your accuracy was " +(3/guesses);
alert(stats);