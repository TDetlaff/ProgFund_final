//Text Adventure Game

//starts program as soon as start button is clicked
document.getElementById("startButton").addEventListener("click", mainGame);

function mainGame(){
  //Declare variables and prompt user for input.
  //Display first scenario to player with choices.
  var storyLine = [
    {
      "txt": 'The sound of their footsteps can be heard echoing as they get closer. Your hair stands on end.',
      "Opt1": "Immediately sprint in the opposite direction.",
      "Opt2": "Turn around and face the voice head on."
    },
    {
      "txt": "Wasting no time, you sprint in the opposite direction of the voice. Not far off, you can make out the dim glow of an exit sign above a door. A way out!",
      "Opt1": "Exit through the door."
    },
    {
      "txt": "Turning around, you barely make out the outline of a figure approaching you from the dark. Their movements are quick. Too quick to be human. A feeling of dread washes over you.",
      "Opt1": "Their movements are quick...but yours are quicker (you hope)."
    }
  ];
  var sceneCounter = 0;
  var inputCommand = prompt("" + storyLine[0]["txt"] + "" + "\n\nEnter a number.\n1. " + storyLine[0]["Opt1"] + "\n2. " + storyLine[0]["Opt2"] + "");
  var outputPrompt = "";

//run second scenario after player has made choices
  while(sceneCounter === 0){
    switch(inputCommand){
      case "1":
        inputCommand = prompt("" + storyLine[1]["txt"] + "" + "\n\nEnter a number.\n1. " + storyLine[1]["Opt1"] + "");
        sceneCounter ++;
        break;
      case "2":
        inputCommand = prompt("" + storyLine[2]["txt"] + "" + "\n\nEnter a number.\n2. " + storyLine[2]["Opt1"] + "");
        sceneCounter ++;
        break;
      default:
        outputPrompt = "\"" + inputCommand + "\" is not recognized. You'r state of confusion causes you to loose consiousness again. You died.";
        sceneCounter ++;
    }
  }
  
//display final message after player makes final choices
  while(sceneCounter === 1){
    switch(inputCommand){
      case "1":
        inputCommand = prompt("You escaped! The door slams behind you and you can hear a lock set. You stop to catch your breath.\n\n...THE END...\n\nor is it...");
        sceneCounter ++;
        break;
      case "2":
        inputCommand = prompt("Just as you're about to show off your moves, darkness surrounds you. You lose consiousness once again and collapse on the floor.");
        sceneCounter ++;
        break;
      default:
        outputPrompt = "\"" + inputCommand + "\" is not recognized. Your state of confusion causes you to lose consiousness again. You die.";
        sceneCounter ++;
    }
  }
  
  //display final message if no other message will be displayed
  if(outputPrompt === ""){
    outputPrompt = "To be continued...Thank you for playing!";
  }
  
  //replace the container ID in html with output prompt
  document.getElementById("container").innerHTML = outputPrompt;
}

