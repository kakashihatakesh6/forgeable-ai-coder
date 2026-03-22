# Simple Calculator

A lightweight, self‑contained web calculator built with **HTML**, **CSS**, and **JavaScript**. It provides a clean UI, keyboard support, and basic error handling (e.g., division by zero).

---

## Tech Stack
- **HTML5** – Structure of the calculator UI.
- **CSS3** – Custom styling with CSS variables, responsive layout, and visual feedback for buttons.
- **JavaScript (ES6)** – Core calculator logic, click handling, and keyboard shortcuts.

---

## Features
- Basic arithmetic: addition, subtraction, multiplication, division.
- Clear (`C`) button to reset the calculator.
- Keyboard shortcuts:
  - Digits `0‑9` and decimal point `.`
  - Operators `+`, `-`, `*`, `/`
  - `Enter` or `=` to evaluate
  - `Backspace` to clear (acts like the `C` button)
- Error handling for division by zero – displays **Error** briefly before resetting.
- Responsive design – works on phones, tablets, and desktop browsers.
- No external dependencies – just open the HTML file.

---

## Installation / Setup
The project is **self‑contained**. No build step or package manager is required.

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
   ```
   # Example (Linux/macOS)
   open index.html   # macOS
   xdg-open index.html   # Linux
   ```
3. The calculator UI will appear and be ready for use.

---

## Usage
### UI Interaction
- Click the buttons to enter numbers and operators.
- The display (top area) shows the current entry or the result of the last calculation.
- Press **C** to clear the current entry and reset the state.

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0‑9` | Append digit |
| `.`   | Add decimal point (only one per number) |
| `+ - * /` | Set operator |
| `Enter` or `=` | Evaluate the expression |
| `Backspace` | Clear (same as the **C** button) |

### Error Handling
- Attempting to divide by zero shows **Error** in the display for 1.5 seconds, then automatically clears the calculator.
- Invalid sequences (e.g., pressing `=` without a complete expression) simply reset the calculator without crashing.

---

## Development
If you want to modify or extend the calculator:

1. **Run a local development server** (optional but convenient for live‑reload). For example, using the `serve` package:
   ```bash
   npx serve .
   ```
   This will start a server at `http://localhost:5000` (or another port) and automatically reload the page when you edit files.

2. **File Overview**
   - `index.html` – Markup for the calculator layout.
   - `style.css` – All visual styling, variables, and responsive rules.
   - `script.js` – Core JavaScript logic: state management, button/keyboard handling, calculations, and error display.

3. **Typical changes**
   - **Add new operations** – Extend the `performCalculation` switch‑case in `script.js` and add a corresponding button in `index.html`.
   - **Adjust styling** – Modify CSS variables or rules in `style.css`.
   - **Change UI layout** – Edit the HTML structure or the CSS grid definitions.

4. **Testing** – Simply refresh the page in the browser after each change. The logic is pure client‑side, so no test framework is required for this tiny project.

---

## License
This project is released under the **MIT License**. See the `LICENSE` file for details (if you add one).
