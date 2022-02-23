let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText; //e.target -: Means button on which click
    console.log("Button text is ", buttonText); //.innerText -: Gives us a text which written inside button

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText; // screenValue is variable
      screen.value = screenValue; //screen.value is value of screen
    } 
    else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } 
    else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } 
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
