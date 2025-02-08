// Function to append a character (number or operator) to the display
function appendCharacter(char) {
  document.getElementById("display").value += char;
}

// Function to clear the display (AC)
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLastCharacter() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression
function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value); // Using eval() to calculate the expression
  } catch (e) {
    display.value = "Error"; // In case of invalid input, show error
  }
}
