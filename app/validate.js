function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var validateField = function (field,help_text){
  if(!isNumber(field.value)){
    help_text.innerHTML = "Enter a value";
    return false;
  }
  else {
    help_text.innerHTML = "";
  }                               
  return true;
};

var validateOperator = function(field,help_text){
  var operators = ["+", "-","*","/","%","^"];
  if(operators.indexOf(field.value) == -1){
    help_text.innerHTML = "Enter an operator";
    return false;
  }
  else{
    help_text.innerHTML = "";
    return true;
  }
  };


