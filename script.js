let calculation = '';

function appendCharacter(value) {
  calculation+=value;
  displayCalculation();
  console.log(value);
}

function clearResult() {
 calculation = '';
 displayCalculation();
}

function evaluateExpression() {
 
  calculation = eval(calculation)
  displayCalculation();

}

function displayCalculation() {
  document.querySelector('.js-result').innerHTML = calculation;
  console.log(calculation);
}
