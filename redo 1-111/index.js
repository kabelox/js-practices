// let sunk = false;
// let hit = 0;
// while(sunk == false){
//  let user = prompt("enter number");
// if(user < 0 || user>=6){
//     alert("enter proper num")
// }

// if(user == 1 || user == 2 || user ==3){
//     hit++
// }
// else if(hit == 3){
//     sunk == true;
//     alert("you've sunked me")
// }
// }


function makePhrase(){
    let words1 = ["24/7","multi-tier","30,000 foot","B-to-B","win-win"];
    let words2 = ["empower","value-added","oriented","focused","aligned"];
    let words3 = ["process","solution","tipping-point","strategy","vision"];

let rand1 = Math.floor(Math.random() * words1.length);
let rand2 = Math.floor(Math.random()* words2.length);
let rand3 = Math.floor(Math.random()* words3.length);

let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
alert(phrase);
}
makePhrase();