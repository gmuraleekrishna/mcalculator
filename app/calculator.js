function Calculator(operand1,operand2){
  this.operand1 = operand1;
  this.operand2 = operand2;
  this.operator = '';
  
  this.add = function() {
    return(this.operand1 + this.operand2);
  };

  this.subs = function() {
    return(this.operand1 - this.operand2);
  };

  this.multiply = function() {
    return(this.operand1 * this.operand2);
  };

  this.divide = function() {
    return(this.operand1 / this.operand2);
  };

  this.power = function() {
    return(Math.pow(this.operand1,  this.operand2));
  };

  this.modulus = function(){
    return(this.operand1 % this.operand2);
  };

  this.operators = { '+': this.add(), '-': this.subs(), '*': this.multiply(), '/': this.divide(), '^': this.power(), '%': this.modulus()  };
  
  this.doCalc = function(operator) {
    return(this.operators[operator]);
  };
}
