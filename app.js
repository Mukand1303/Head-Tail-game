var player1 =prompt("Enter heads name")
var player2 =prompt("Enter tails name")

var toss =Math.random()*2
var ch =Math.floor(toss)

if(ch ==0){
    document.write(player1+ " heads win")
}

else{
    document.write(player2+" tails win")
}