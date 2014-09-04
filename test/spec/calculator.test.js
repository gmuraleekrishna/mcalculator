describe("Calculator", function() { 
  var calculator = new Calculator();
  
  describe("add function", function() {
    it("should be defined", function() {
      expect(calculator.add).toBeDefined();
    });
    
    it("should find the sum for valid values", function() {
      calculator.operand1 = 5;
      calculator.operand2 = 10;
      expect(calculator.add()).toEqual(15);
    });
    
    it("should find the sum for valid values", function() {
      calculator.operand1 = 5.8;
      calculator.operand2 = 10;
      expect(calculator.add()).toEqual(15.8);
    });
  });
  
  describe("subs function", function() {
    it("should be defined", function() {
      expect(calculator.subs).toBeDefined();
    });
    
    it("should find the difference for valid values", function() {
      calculator.operand1 = 10;
      calculator.operand2 = 5;
      expect(calculator.subs()).toEqual(5);
      calculator.operand1 = 5;
      calculator.operand2 = 10;
      expect(calculator.subs()).toEqual(-5);
    });
  });
  
  describe("multiple function", function() {
    it("should be defined", function() {
      expect(calculator.multiply).toBeDefined();
    });
    
    it("should find the multiple for valid values", function() {
      calculator.operand1 = 5;
      calculator.operand2 = 10;
      expect(calculator.multiply()).toEqual(50);
      calculator.operand1 = 5;
      calculator.operand2 = -10;
      expect(calculator.multiply()).toEqual(-50);
    });
  });
  
  describe("divide function", function() {
    it("should be defined", function() {
      expect(calculator.divide).toBeDefined();
    });
    
    it("should find the result for valid values", function() {
      calculator.operand1 = 10;
      calculator.operand2 = 5;
      expect(calculator.divide()).toEqual(2);
    });
    
    it("should not find the result for invalid values", function() {
      calculator.operand1 = 10;
      calculator.operand2 = 0;
      expect(calculator.divide()).toEqual(Infinity);
    });
  });
  
  describe("power function", function(){
    it("should be defined", function(){
      expect(calculator.power).toBeDefined();
    });
    
    it("should find the power for valid values", function(){
      calculator.operand1 = 10;
      calculator.operand2 = 5;
      expect(calculator.power()).toEqual(100000);
    });
  });
  
  describe("modulus function", function(){
    it("should be defined", function(){
      expect(calculator.modulus).toBeDefined();
    });

    it("should find ths sum for valid values", function(){
      calculator.operand1 = 10;
      calculator.operand2 = 5;
      expect(calculator.modulus()).toEqual(0);
    });
  });
  
  describe("doCalc function", function() {
    beforeEach(function() {
      calculator = new Calculator(5,10);
    });
    
    it("should be defined", function() {
      expect(calculator.doCalc).toBeDefined();
    });

    it("should find the sum for valid values", function() {
      expect(calculator.doCalc('+')).toEqual(15);
    });

    it("should find the diff for valid values", function() {
      expect(calculator.doCalc('-')).toEqual(-5);
    });

    it("should find the multiple for valid values", function() {
      expect(calculator.doCalc('*')).toEqual(50);
    });

    it("should find ths power for valid values", function(){
      expect(calculator.doCalc('^')).toEqual(9765625);
    });

    it("should find ths modulus for valid values", function(){
      expect(calculator.doCalc('%')).toEqual(5);
    });
  });
});
