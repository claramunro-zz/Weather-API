// export const vowelR = ["ar", "er", "or", "ir", "ur", "wor"];

export default class Haiku {
  constructor(lineOne, lineTwo, lineThree, syllableCount) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
    this.syllableCount = syllableCount;
  }

  splitWords(line) {
    let splitLine = line.split(" ");
    return splitLine;
  }

  countSyllables(splitLineArr, syllableCount) {
    let vowels = ["a", "e", "i", "o", "u"];
    syllableCount = 0;
    splitLineArr.forEach(function(i) {
      i.toString().split("");
      for(let j = 0; j <= i.toString().split("").length-1; j++) {
        if (i[j] === i[j + 1]) {
          syllableCount++;
        }
      }
    });
    // splitLineArr.forEach(function(i){
    //   i.toString();
    //   if (vowels.includes(i[i])) {
    //     syllableCount++;
    //   }
    //   console.log(i.toString());
    // });
    console.log(syllableCount);
    return syllableCount;
  }

  isHaiku(lineOne, lineTwo, lineThree) {
    if (lineOne === 5 && lineTwo === 7 && lineThree === 5) {
      return `IT'S A HAIKU!`;
    } else {
      return `IT'S NOT A HAIKU!`;
    }
  }
}
