import "./index.css";

const number1El = document.getElementById("number1");
const number2El = document.getElementById("number2");
const resultEl = document.getElementById("result");

number1El.addEventListener("input", calculate);
number2El.addEventListener("input", calculate);

function calculate() {
  const number1 = number1El.value;
  const number2 = number2El.value;
  const result = add(number1, number2);
  resultEl.style.setProperty("--value", result);
}

function add(a, b) {
  return a + b;
}
