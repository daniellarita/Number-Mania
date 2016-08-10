//hi testing
var myGame = function(){
    // User choice
    var userChoice = prompt("Type in your first guess here to begin:");
    // Computer choice
    var randomNumber = Math.floor(Math.random()*10+1);

    // Compare user choice vs computer choice
    var counter = 4; //# of tries the user has to win the game - 5 total
    var result=''; //the result that we will display to the user

    for (var i=counter;i>=0;i--){
       if (randomNumber == userChoice){
        result="You win :) The winning number was "+randomNumber;
        counter=-1;
      } else if (counter===0){
        result="Sorry, you're out of tries :( The winning number was "+randomNumber;
        counter=-1;
      } else if (randomNumber < userChoice){
        userChoice = prompt("Nope, try to guess a lower number!");
        counter--;
      } else if (randomNumber > userChoice){
        userChoice = prompt("Nope, try to guess a higher number!");
        counter--;
      }

    }
    alert(result);
  }
