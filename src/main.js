/* eslint-disable no-unused-vars */
import { Date, DatePrototype } from './weekday-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#weekdayForm").submit(function(event){
    event.preventDefault();
    let userDate = $("#dateInput").val();
    let dateSplit = DatePrototype.splitDate(userDate);
    const yearNumber = parseInt(dateSplit[0]);
    const monthNumber = parseInt(dateSplit[1]);
    const dayNumber = parseInt(dateSplit[2]);
    let dateObject = new Date(yearNumber, monthNumber, dayNumber);
    dateObject.leapYearAddDays(yearNumber);
    let finalDay = dateObject.getWeekday();
    $("#result").text(finalDay);
    console.log(dayNumber);
    console.log(dateSplit);
    console.log(userDate);
    console.log(finalDay);
    dateObject.resetDays(yearNumber, monthNumber, dayNumber);
  });
});
/* eslint-disable no-unused-vars */