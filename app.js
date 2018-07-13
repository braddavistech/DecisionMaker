var diceRoll = Math.floor(Math.random()*2)+1;

var choice1=prompt("What is option 1?");
var choice2=prompt("What is option 2?");

document.write('<p id="boxTop">Looks like we are going to :<br><br>');

if (diceRoll==1){
  document.write('<p id="boxBottom">' + choice1);}
else {
  document.write('<p id="boxBottom">' + choice2);}
