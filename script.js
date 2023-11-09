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
