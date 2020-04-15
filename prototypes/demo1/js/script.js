const sectionElement = document.getElementsByTagName("section")[0];
const spanArray = document.getElementsByTagName("span");
const inputArray = document.getElementsByTagName("input");
let menuItem = 1;
let menuFocus = false;
let formItem = 0;
let inputFocus = false;
let inputItems = 0;
let currentInputItem = 0;
let aFocus = false;

//Let's start off with a hacky function
function focusWindow() {
  inputFocus = false;
  menuFocus = false;
  aFocus = false;
  //Creating and removing a button to give the window focus
  let tempButton = document.createElement("button");
  document.body.appendChild(tempButton);
  tempButton = document.getElementsByTagName("button")[0];
  tempButton.focus();
  document.body.removeChild(tempButton);
}

document.getElementsByTagName("a")[0].addEventListener("click", function(e) {
  sectionElement.classList.add("hidden");
});

document.getElementsByTagName("a")[0].addEventListener("click", vertrek);
document.getElementsByTagName("a")[6].addEventListener("click", vertrek);
function vertrek() {
  focusWindow();
  formItem = 1;
}

document.getElementsByTagName("a")[1].addEventListener("click", aankomst);
document.getElementsByTagName("a")[7].addEventListener("click", aankomst);
function aankomst() {
  focusWindow();
  formItem = 2;
}

document.getElementsByTagName("a")[2].addEventListener("click", datum);
document.getElementsByTagName("a")[8].addEventListener("click", datum);
function datum() {
  focusWindow();
  formItem = 3;
  inputItems = 3;
}

document.getElementsByTagName("a")[3].addEventListener("click", tijd);
document.getElementsByTagName("a")[9].addEventListener("click", tijd);
function tijd() {
  focusWindow();
  formItem = 4;
}

document.getElementsByTagName("a")[4].addEventListener("click", lastCheck);
function lastCheck() {
  focusWindow();
  formItem = 5;
}

document.getElementsByTagName("a")[5].addEventListener("click", done);
function done() {
  let values = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].value) {
      values.push(inputArray[i].value);
    } else {
      values.push("00");
    }
  }

  console.log(values);
  window.location.href = `https://www.ns.nl/reisplanner/#/?vertrek=${
    values[0]
  }&vertrektype=treinstation&aankomst=${
    values[1]
  }&aankomsttype=treinstation&type=vertrek&tijd=${values[4]}-${values[3]}-${
    values[2]
  }T${values[5]}:${values[6]}`;
}

document
  .getElementsByTagName("form")[0]
  .addEventListener("change", function(e) {
    for (var i = 0; i < spanArray.length; i++) {
      if (inputArray[i].value) {
        spanArray[i].textContent = inputArray[i].value;
      }
    }
  });

document.onkeydown = function myFunction() {
  switch (event.keyCode) {
    case 38:
      if (inputFocus == false) {
        console.log("up pressed");
        if (menuFocus == true) {
          console.log("Navigating away from menu");
          menuFocus = false;
          focusWindow();
          break;
        }
        if (menuFocus == false && menuItem > 0) {
          console.log("menu is not focused");
          break;
        }
      }
      break;
    case 40:
      console.log("down pressed");
      if (inputFocus == false) {
        if (menuFocus == true) {
          console.log("Menu is already focused");
          break;
        }
        if (menuFocus == false && formItem > 0) {
          console.log("Putting the focus on the menu");
          menuFocus = true;
          menuItem = 1;
          document.getElementsByTagName("a")[menuItem + 5].focus();
          break;
        }
      }
      break;
    case 37:
      console.log("left pressed");
      if (inputFocus == false) {
        if (menuFocus == true) {
          if (menuItem > 1) {
            console.log("Moving left in the menu");
            menuItem--;
            document.getElementsByTagName("a")[menuItem + 5].focus();
            break;
          }
          if (menuItem == 1) {
            console.log("Already at the start");
            break;
          }
          break;
        }
        if (menuFocus == false) {
          aFocus = false;
          if (formItem == 0) {
            console.log("No input to select");
            break;
          }
          if (formItem > 0 && formItem < 3) {
            document.getElementsByTagName("input")[formItem - 1].focus();
            console.log("selecting input no: " + (formItem - 1));
            inputFocus = true;
            break;
          }
          if (formItem == 3) {
            document.getElementsByTagName("input")[formItem - 1].focus();
            inputFocus = true;
          }
          if (formItem == 4) {
            document.getElementsByTagName("input")[formItem + 1].focus();
            inputFocus = true;
          }
          break;
        }
      }
      break;
    case 39:
      console.log("right pressed");
      if (inputFocus == false) {
        if (menuFocus == true) {
          if (menuItem < 4) {
            menuItem++;
            console.log("moving right in menu");
            document.getElementsByTagName("a")[menuItem + 5].focus();
            break;
          }
          if (menuItem == 4) {
            console.log("already at end");
            break;
          }
          break;
        }
        if (menuFocus == false) {
          document.getElementsByTagName("a")[formItem].focus();
          console.log("selecting button no: " + formItem);
          aFocus = true;
          break;
        }
      }
      break;
    case 13:
      console.log("Enter key is pressed");
      if (inputFocus == true) {
        focusWindow();
        break;
      }
      if (inputFocus == false && aFocus == false && menuFocus == false) {
        if (formItem > 0 && formItem < 3) {
          document.getElementsByTagName("input")[formItem - 1].focus();
          console.log("selecting input no: " + (formItem - 1));
          inputFocus = true;
          break;
        }
      }
      break;
  }
};
