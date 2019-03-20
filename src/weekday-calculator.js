/* eslint-disable no-unused-vars */
export function Date(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
}

export const DatePrototype = Date.prototype;

const anchorDate = ["01", "01", "1800"];

let countDays = 0;

Date.prototype.splitDate = function (date) {
  let dateSplit = date.split("-");
  return dateSplit;
};

Date.prototype.leapYearAddDays = function (year) {
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
  console.log(countDays);
  return countDays;
};

Date.prototype.resetDays = function () {
  countDays = 0;
};

Date.prototype.getWeekday = function () {
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
};


Date.prototype.showDayOfWeek = function () {
  return "The day of the week is ";
};

/* eslint-disable no-unused-vars */