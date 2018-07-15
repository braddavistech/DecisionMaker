var answers=prompt('What is your 1st option? If done, please enter Done.'); //This is the first question to start.
var numberArray=0; //This will keep track of the number of the item in the array.
var itemNumber=1; //This will keep track of the quesiton number for the following prompt box.
var myOptions = [answers.toUpperCase()]; //This will make all answers upper case to allow for condition checks.

while (myOptions[numberArray] !== "DONE") {//This is the start of a while loop to continue to add options until user enters done.
    itemNumber+=1;
    var answers=prompt('What is option ' + itemNumber        + ' ? If done, please enter Done.');
    myOptions.push (answers.toUpperCase());//Pushes answer into array.
    numberArray+=1;
    }

var diceRoll = Math.floor(Math.random()* numberArray); //Creates random selection for array assignment.
document.write('<p id="boxBottom">' + myOptions[diceRoll]);
