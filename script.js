// Select all buttons
const buttons = document.querySelectorAll('.calcButtons');
let calcEntry = document.querySelector('.calcEntry');
let calcOperation = document.querySelector('.calcOperation');
// Initialize variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Check if the button clicked is a number
    if (!isNaN(button.innerHTML)) {
      // Check if an operator has already been selected
      if (operator === "") {
        num1 += button.innerHTML;
        calcEntry.textContent = num1;
      } else {
        num2 += button.innerHTML;
        calcEntry.textContent = num2;
      }
    // Check if the button clicked is an operator
    } else if (button.innerHTML === "+" || button.innerHTML === "-" || button.innerHTML === "*" || button.innerHTML === "/") {
      operator = button.innerHTML;
      calcOperation.textContent = `${num1} ${operator}`
    // Check if the button clicked is the equals button
    } else if (button.innerHTML === "=") {
        calcOperation.textContent = `${num1} ${operator} ${num2} =`
        calculateSum();
        calcEntry.textContent = result;
        num1 = "";
        num2 = "";
        operator = "";
    }
  });
});
/// Converts variables to integers, switch operators perform math functions
function calculateSum() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }   
}
// Clears ALL fields and reverts back to default values
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function () {
    calcEntry.textContent = "";
    calcOperation.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
})
// deletes last character of num1 or num2 depending on operator variable content
const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', function() {
    if (operator === "") {
        num1 = num1.slice(0, -1);
        calcEntry.textContent = num1;
    }
    else if (result != "") {
        calcEntry.textContent = "";
        calcOperation.textContent = "";
    }
    else if (operator != "") {
        num2 = num2.slice(0, -1);
        calcEntry.textContent = num2;
    }
    
})