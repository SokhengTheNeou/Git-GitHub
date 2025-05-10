const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function Delete() {
  display.value = display.value.slice(0, -1);
}

function SwitchPos_Neg() {
  if (display.value) {
    display.value = parseFloat(display.value) * -1;
  }
}

function percentage() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}

function reset() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
