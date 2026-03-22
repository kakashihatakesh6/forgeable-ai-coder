// script.js – Calculator functionality
// Wrapped in an IIFE to avoid polluting the global scope
(function () {
    // State variables
    let currentInput = '';
    let previousValue = null;
    let operator = null;
    const displayEl = document.getElementById('calc-display');

    // Helper: update the calculator display
    function updateDisplay() {
        displayEl.textContent = currentInput || (previousValue !== null ? String(previousValue) : '0');
    }

    // Helper: reset all state to initial values
    function clearCalculator() {
        currentInput = '';
        previousValue = null;
        operator = null;
        updateDisplay();
    }

    // Helper: perform the pending calculation
    function performCalculation() {
        if (operator === null) {
            return; // nothing to calculate
        }
        const a = parseFloat(previousValue);
        const b = parseFloat(currentInput);
        if (isNaN(a) || isNaN(b)) {
            // Incomplete expression – just clear
            clearCalculator();
            return;
        }
        let result;
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) {
                    displayEl.textContent = 'Error';
                    // Reset after a short delay so the user sees the error
                    setTimeout(clearCalculator, 1500);
                    return;
                }
                result = a / b;
                break;
            default:
                return;
        }
        // Store result and reset for next operation
        previousValue = result;
        currentInput = '';
        operator = null;
        updateDisplay();
    }

    // Process a button press based on its data-value attribute
    function handleInput(value) {
        if (value >= '0' && value <= '9' || value === '.') {
            // Digit or decimal point
            if (value === '.' && currentInput.includes('.')) {
                // Prevent multiple decimal points
                return;
            }
            currentInput += value;
            updateDisplay();
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Operator button
            if (currentInput !== '') {
                // Move current input to previous value
                previousValue = currentInput;
                currentInput = '';
            }
            // Allow changing operator before entering next number
            operator = value;
        } else if (value === '=') {
            performCalculation();
        } else if (value === 'C') {
            clearCalculator();
        }
    }

    // Attach click listeners to all calculator buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-value');
            handleInput(val);
        });
    });

    // Keyboard support – map keys to the same logic as button clicks
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        // Digits and decimal point
        if ((key >= '0' && key <= '9') || key === '.') {
            handleInput(key);
            e.preventDefault();
            return;
        }
        // Operators
        if (['+', '-', '*', '/'].includes(key)) {
            handleInput(key);
            e.preventDefault();
            return;
        }
        // Enter or '=' triggers calculation
        if (key === 'Enter' || key === '=') {
            handleInput('=');
            e.preventDefault();
            return;
        }
        // Backspace acts as clear (as per spec)
        if (key === 'Backspace') {
            handleInput('C');
            e.preventDefault();
            return;
        }
    });

    // Initial display setup
    updateDisplay();
})();
