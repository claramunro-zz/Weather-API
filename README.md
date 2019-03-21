# Haiku Checker

## Description
A webpage that takes 3 indivivual lines of user input, each input is for each line in the Haiku, and checks to see if the result is infact a Haiku.

## Specifications

## RULES FOR CHECKING SYLLABLES FOR EACH LINE & ADD UP SYLLABLES FOR EACH LINE

#### Behavior: Checks for Open Syllables & return # of syllables
A single-letter vowel which occurs at the end of the syllable. This syllable pattern follows the spelling rules: A E O U usually say their names at the end of the syllalble, and I and Y may say their long or short sound at the end of the syllable. For example: me, cry, ta-ble, pro-tect.
* Input: "ta-ble"
* Output: "2"

#### Behavior: Checks for Closed Syllables & return # of syllables
A closed syllable includes a single-letter vowel but the syllable ends in a consonant. In this case the single letter vowel says its short sound. For example: duck, patch, hap-pen, din-ner.
* Input: "hap-pen"
* Output: "2"

#### Behavior: Checks for Multi-Letter Vowel Syllables & return # of syllables
Multi-letter vowels are two or more letters working together to form a single vowel phonogram. (igh, ea, ui, oa, etc.) For example: night, read, fruit, boat.
* Input: "boat"
* Output: "1"

#### Behavior: Checks for Consonant + le Syllables (or Consonant + re) & return # of syllables
These words have a final syllable with a silent final E. They follow the spelling rule: Every syllable must have a written vowel. For example: ti-tle, puz-zle, un-cle, drib-ble, a-cre, mas-sa-cre.
* Input: "mas-sa-cre"
* Output: "3"

#### Behavior: Checks for Vowel + R Syllables & return # of syllables
The consonant R often distorts the vowel sound of the preceeding vowel. These syallables include the phonograms: ar, er, ir, or, ur, ear, wor. For example: car, her, bird, born, surface, early, word.
* Input: "surface"
* Output: "1"

-------

#### Behavior: Checks 1st line of user input for 5 syllables
* Input: "pretend this line has 5 syllables"
* Output: "True"

#### Behavior: Checks 2nd line of user input for 7 syllables
* Input: "pretend this line has 7 syllables"
* Output: "True"

#### Behavior: Checks 3rd line of user input for 5 syllables
* Input: "pretend this line has 5 syllables"
* Output: "True"

#### Behavior: Returns true / false if it is haiku or nah
* Input: "5,7,5"
* Output: "True"




### Setup Instructions
* Clone this repository to your desktop using "git clone""(repository link).""
* Open in preferred text editor to see all code used
* Navigate to project directory
* In your terminal: "$ npm install webpack@4.0.1 --save-dev"
* In your terminal: "$ npm install webpack-dev-server@3.1.0 --save-dev"
* In your terminal: "$ npm i" (assuming all packages needed are in package.JSON file)
* In your terminal: "$ npm run build"
* In your terminal: "$ npm run start" or "$ npm run test"

### Known Bugs
* No known bugs

### Languages/Libraries Used
* Javascript
* CSS
* Bootstrap
* jQuery
* Webpack
* Karma / Jasmine
* NPM

### GitHub Pages link
put link here

Copyright (c) 2019
