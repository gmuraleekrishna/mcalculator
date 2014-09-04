describe("Index Page", function(){
  beforeEach(function() {
    loadFixtures("index.html");
  });
  
  describe("Results", function() {
    describe("with wrong entries", function() {
      it("should calculate the result on calculate button click", function() {
        document.getElementById("operand1").value = '3';
        document.getElementById("operand2").value = '8';
        document.getElementById("operator").value = '&';
        document.getElementById("calculate-btn").click();
        expect(document.getElementById('result').value).toEqual('');
      });
    });
    
    describe("with right entries", function() {
      it("should calculate the result on calculate button click", function() {
        document.getElementById("operand1").value = '3';
        document.getElementById("operand2").value = '8';
        document.getElementById("operator").value = '*';
        document.getElementById("calculate-btn").click();
        expect(document.getElementById('result').value).toEqual('24');
      });
    });
  });
});
