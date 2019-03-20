import Date from "../src/weekday-calculator";

describe('Date', function() {

  it("should test for days added", function() {
    let date = new Date(2019, 3, 20);
    expect(date.leapYearAddDays(2019, 0)).toEqual(737138);
  });

  it("should test for weekday", function() {
    let date = new Date(2019, 3, 20);
    expect(date.getWeekday(737138)).toEqual("Wednesday");
  });
});