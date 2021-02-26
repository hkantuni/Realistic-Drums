//detecting button pressed

var bottumAllNumbers = document.querySelectorAll(".drum").length; //finding out how number of buttons with .drum

// console.log(bottumAllNumbers);
for (var i = 0; i < bottumAllNumbers; i++) {
  //function will start with first button and by adding buttons numbers -next line

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //will asign event addEventListener to each button

    var bottonInnerHTML = this.innerHTML; //variable will be asigned with current letter from innerHTML

    makeSound(bottonInnerHTML); //will call function makeSound with current letter
    animation(bottonInnerHTML);
  });
}

//detecting keyboard pressed

document.addEventListener("keypress", function (event) {
  //will listen to whole document on keydown

  makeSound(event.key); //will call function makeSound with key that was pressed
  animation(event.key);
});

function makeSound(key) {
  //makesound function trough the switch will see what key was pressed and will

  switch (
    key // audio accordingly
  ) {
    case "closehh":
      var closehh = new Audio("sounds/closehh.mp3");
      closehh.play();
      break;
    case "openhh":
      var openhh = new Audio("sounds/openhh.mp3");
      openhh.play();
      break;
    case "leftcrash":
      var leftcrash = new Audio("sounds/crashl.mp3");
      leftcrash.play();
      break;
    case "splash":
      var splash = new Audio("sounds/splash.mp3");
      splash.play();
      break;
    case "rightcrash":
      var rightcrash = new Audio("sounds/crashr.mp3");
      rightcrash.play();
      break;
    case "ride":
      var ride = new Audio("sounds/ride.mp3");
      ride.play();
      break;
    case "kick1":
      var kick1 = new Audio("sounds/kick.mp3");
      kick1.play();
      break;
    case "kick2":
      var kick2 = new Audio("sounds/kick.mp3");
      kick2.play();
      break;
    case "tom1":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "tom2":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "snare":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "tom3":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "floor":
      var floor = new Audio("sounds/tom-4.mp3");
      floor.play();
      break;
    default:
  }
}

function animation(currentKey) {
  //assigns new class . pressed to buttom when clicked
  var activateButton = document.querySelector("." + currentKey);
  if ("pressed" in activateButton.classList) {
    activateButton.classList.remove("pressed");
  }
  activateButton.classList.add("pressed");

  setTimeout(function () {
    //set 0.5 sec delay and then removes .pressed class from pictures
    activateButton.classList.remove("pressed");
  }, 500);
}
