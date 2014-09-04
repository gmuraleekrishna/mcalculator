describe("Index Page", function() {
  beforeEach(function() {
    loadFixtures("index.html");
  });
  
  describe("Validation", function() {
    describe("with wrong entries", function() {
      it("should show an error message  when  button is clicked", function() {
        document.getElementById('calculate-btn').click();
        expect(document.getElementById('help_operand1').innerHTML).toEqual("Enter a value");
      });

      it("should show an error message  when onblur is triggered on operand1 fields", function() {
        document.getElementById('operand1').onblur();
        expect(document.getElementById('help_operand1').innerHTML).toEqual("Enter a value");
      });

      it("should show an error message  when onblur is triggered on operand2 fields", function() {
        document.getElementById('operand2').onblur();
        expect(document.getElementById('help_operand2').innerHTML).toEqual("Enter a value");
      });

      it("should show an error message  when onblur is triggered on operator fields", function() {
        document.getElementById('operator').onblur();
        expect(document.getElementById('help_operator').innerHTML).toEqual("Enter an operator");
      });

      it("should show an error message  when onblur is triggered on operator fields with wrong operator", function() {
        document.getElementById('operator').value = ")";
        document.getElementById('operator').onblur();
        expect(document.getElementById('help_operator').innerHTML).toEqual("Enter an operator");
      });
    });
    
    describe("with right entries", function() {
      it("should have no error message after the correct entry is done for operand1", function() {
        document.getElementById('operand1').onblur();
        expect(document.getElementById('help_operand1').innerHTML).toEqual("Enter a value");
        document.getElementById('operand1').value = '3';
        document.getElementById('operand1').onblur();
        expect(document.getElementById('help_operand1').innerHTML).toEqual("");
      });
      
      it("should have no error message after the correct entry is done for operand2", function() {
        document.getElementById('operand2').onblur();
        expect(document.getElementById('help_operand2').innerHTML).toEqual("Enter a value");
        document.getElementById('operand2').value = '3';
        document.getElementById('operand2').onblur();
        expect(document.getElementById('help_operand2').innerHTML).toEqual("");
      });
      
      it("should have no error message after the correct entry is done for operator", function() {
        document.getElementById('operator').onblur();
        expect(document.getElementById('help_operator').innerHTML).toEqual("Enter an operator");
        document.getElementById('operator').value = '+';
        document.getElementById('operator').onblur();
        expect(document.getElementById('help_operator').innerHTML).toEqual("");
      });
    });
  });  
});
