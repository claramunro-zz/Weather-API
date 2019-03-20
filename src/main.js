import Date from './weekday-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#weekdayForm").submit(function(event){
    event.preventDefault();
    let countDays = 0;
    let monthInput = $("#monthInput").val();
    let dayInput = $("#dayInput").val();
    let yearInput = $("#yearInput").val();
    const dayNumber = parseInt(dayInput);
    const monthNumber = parseInt(monthInput);
    const yearNumber = parseInt(yearInput);
    let dateObject = new Date(yearNumber, monthNumber, dayNumber, countDays);
    let updatedDays = dateObject.leapYearAddDays(yearNumber, countDays);
    let finalDay = dateObject.getWeekday(updatedDays);
    $("#result").text(finalDay);
    dateObject.resetDays(yearNumber, monthNumber, dayNumber);
  });
});