var calculate = function() {
  var operand1 = document.getElementById("operand1");
  var help_operand1 = document.getElementById("help_operand1");
  var operand2 = document.getElementById("operand2");
  var help_operand2 = document.getElementById("help_operand2");
  var operator = document.getElementById("operator");
  var help_operator = document.getElementById("help_operator");
  if(
      validateField(operand1, help_operand1) &&
      validateField(operand2, help_operand2) &&
      validateOperator(operator, help_operator))
  {
    var calculator = new Calculator(parseFloat(operand1.value), parseFloat(operand2.value));
    document.getElementById("result").value = calculator.doCalc(operator.value);
  }
};



