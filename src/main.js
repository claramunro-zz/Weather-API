import Haiku from './haiku-creator.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#haikuForm").submit(function(event){
    event.preventDefault();
    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();
    let haikuPoem = new Haiku(lineOne, lineTwo, lineThree);
    let haikuSplit = haikuPoem.splitWords(lineOne);
    let haikuSplit2 = haikuPoem.splitWords(lineTwo);
    let haikuSplit3 = haikuPoem.splitWords(lineThree);
    let haikuCount = haikuPoem.countSyllables(haikuSplit);
    let haikuCount2 = haikuPoem.countSyllables(haikuSplit2);
    let haikuCount3 = haikuPoem.countSyllables(haikuSplit3);
    let finalHaiku = haikuPoem.isHaiku(haikuCount, haikuCount2, haikuCount3);
    console.log(finalHaiku);
    // $("#result").text(isHaiku);

  });
});
