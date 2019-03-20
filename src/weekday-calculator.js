export default class Date {
  constructor(year, month, day, countDays) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.countDays = countDays;
  }

  leapYearAddDays(year, countDays) {
    let leapMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let notLeapMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 1; i <= parseInt(year) - 1; i++) {
      if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
        countDays += 366;
      } else {
        countDays += 365;
      }
    }
    for (let m = 0; m < this.month - 1; m++) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        countDays += leapMonths[m];
      }
      else {
        countDays += notLeapMonths[m];
      }
    }
    for (let d = 0; d < this.day; d++) {
      countDays += 1;
    }
    return countDays;
  }

  resetDays() {
    this.countDays = 0;
  }

  getWeekday(countDays) {
    if (countDays % 7 === 1) {
      return "Monday";
    } else if (countDays % 7 === 2) {
      return "Tuesday";
    } else if (countDays % 7 === 3) {
      return "Wednesday";
    } else if (countDays % 7 === 4) {
      return "Thursday";
    } else if (countDays % 7 === 5) {
      return "Friday";
    } else if (countDays % 7 === 6) {
      return "Saturday";
    } else {
      return "Sunday";
    }
  }
}