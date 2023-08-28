// Get all the buttons and the display element
const buttons = document.querySelectorAll('.pad button');
const display = document.querySelector('.display p');

let currentInput = '';  // Store the current input string
let currentOperator = '';  // Store the current operator

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Handle different button actions
    switch (buttonText) {
      case 'CL':
        clearDisplay();
        break;
      case 'DEL':
        deleteLastCharacter();
        break;
      case '=':
        evaluate();
        break;
      default:
        addToDisplay(buttonText);
        break;
    }
  });
});

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  display.textContent = '0';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

// Function to add the clicked button value to the display
function addToDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

// Function to evaluate the expression when '=' is clicked
function evaluate() {
  try {
    const result = eval(currentInput);  // Use JavaScript's eval function to evaluate the expression
    display.textContent = result;
    currentInput = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}
