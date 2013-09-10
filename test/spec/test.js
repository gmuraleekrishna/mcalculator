describe("A suite", function() {

  it("contains function to answer all the questions", function() {
    expect(superSmartFunction()).toBe(42);
  });

  it("contains h1 element with text", function() {
    loadFixtures("html_fixtures.html");
    expect($("h1").text()).toBe("Test");
  });

  it("supports spying on ajax requests", function() {
    spyOn($, "get"); // spy on "post" if you need to
    ajaxRequest();

    // check for $.post.mostRecentCall.args[0] if you need to
    expect($.get.mostRecentCall.args[0]).toBe("https://api.github.com/repos/zigomir/rubber_ring/events");
  });

});
