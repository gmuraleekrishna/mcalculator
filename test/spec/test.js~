describe("A suite", function() {

  beforeEach(function() {
    loadFixtures("html_fixtures.html");
    spyOn($, "ajax");
  });

  it("contains function to answer all the questions", function() {
    expect(App.superSmartFunction()).toBe(42);
  });

  it("will change header text", function() {
    var $header = $("h1");
    expect($header.text()).toBe("Test");
    App.clickCallback("h1", "Clicked");
    expect($header.text()).toBe("Clicked");
  });

  it("supports spying on ajax requests", function() {
    App.ajaxRequest(function(data) { return data + ' + test'; });
    var lastCall = $.ajax.mostRecentCall.args[0];

    expect(lastCall.url).toBe("/resource");
    expect(lastCall.success("ajax response")).toBe("ajax response + test");
  });

  it("supports spying on ajax requests", function() {
    spyOn(App, "ajaxRequest").andCallFake($.ajax);
    expect($("span").text()).toBe("Empty");

    App.changeText();
    expect(App.ajaxRequest).toHaveBeenCalled();

    // mock response of ajax callback
    $.ajax.mostRecentCall.args[0]("New text");
    expect($("span").text()).toBe("New text");
  });

});
