let display = document.getElementById("display");
let equation = "";

function clearDisplay() {
    equation = "";
    display.value = "";
}

function appendToDisplay(value) {
    equation += value;
    display.value = equation;
}

function calculateResult() {
    try {
        equation = eval(equation);
        display.value = equation;
    } catch (error) {
        display.value = "Error";
        equation = "";
    }
}

function deleteLastCharacter() {
    if (equation.length === 0) {
      // Handle invalid input or an empty string.
      return equation;
    }
  
    // Use the slice method to create a new string without the last character.
    equation = equation.slice(0, -1);
  
    display.value = equation;
  }