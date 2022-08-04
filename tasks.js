//---------------------Part1:Basic---------------------
//---------------Q1---------------
// In the next 5 small tasks type the correct answer.
//  Replace null with your answer in all tasks.

// Task 1: What will the value of `ln` be?

let sentence = "thisIsARandomSentence";
let ln = sentence.length;
let answer1 = 21;

// Task 2: What will the value of `position` be?

let string = "Please do all of your assignments";
let position = string.indexOf("your");

let answer2 = 17;

// Task 3: What will the value of `pick` will be?

let colors = "Red, Blue, Green, Yellow";
let pick = colors.slice(5, 9);

let answer3 = "Blue";

// Task 4: What should be the values of `k` and `l`
// in order for the `result` to be `Yellow`?

let k = 18;
let l = 24;
let result = colors.slice(k, l);

// Task 5. Consider you have the following variables.
// Write an if-else statement that will take those numbers and it
// will console.log the greater number.

let a = 3;
let b = 5;
if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
}
//---------------Q2-----------------------------------
// Escaping characters:

// console.log the following statement ("Up up\n\tdown down");
console.log("Up up\n\tdown down");
// Now:
// Declare a variable and assign it a value that will result in a console.log in this format:
let str =
  'The file located at "C:\\\\Desktop\\My Documents\\Roster\\names.xt" contains the names on the roster.';
console.log(str);
// "The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

// Note:check the following link for more information about escaping characters in js.
// https://www.quackit.com/javascript/tutorial/javascript_escape_characters.cfm

//---------------Q3.1 :Logical operators---------------
/*
Evaluate the following values on console.
*/
true; //your answer = true
false; //your answer = false
!true; //your answer = false
!false; //your answer = true

true && true; //your answer = true
true && false; //your answer = false
false && true; //your answer = false
false && false; //your answer = false

true || true; //your answer = true
true || false; //your answer = true
false || true; //your answer = false
false || false; //your answer = false

// ----------------- Q3.2:Comparison operator---------------
let num = 9;
/*
Given that num = 9;
Evaluate the following statement on console.
//  Replace null with your answer in all the following statements.
*/

num > 12;
let answer4 = false;

num < 13;
let answer5 = true;

(num && true) || false;
let answer6 = true;

num == "9";
let answer7 = true;

num === "9";
let answer8 = false;

num === 9;
let answer9 = true;

num != "9";
let answer10 = false;

num !== "9";
let answer11 = true;

num >= 6;
let answer12 = true;

num <= 13;
let answer13 = true;

// ------------------Q4-----------------------------------
//   Given that
let num1 = 20;
let num2 = 4;

// then what the answers will be ?

num1 > 20 || num2 < 2;
let answer14 = false;

!(num1 <= num2) && num1 === 20;
let answer15 = true;

//---------------------Part2:Intermediate---------------------
//---------------Q5---------------

/*
Given the following pseudocode for real life example,
turn them into code.
Think about the variables you need to declare, and console.log() your 
answers.
*/

//---------------Q5.1:----------------
// if it is raining
// you should wear a raincoat

/* Your code here */
let raining = true;
if (raining) {
  console.log("You should wear a raincoat");
}
// ---------------Q5.2:----------------
// if your score plus, added to my score, is greater than 90
// we should celebrate

/* Your code here */
let score = 45;
let myScore = 55;
if (score + myScore > 90) {
  console.log("We should celebrate");
}
// --------------- Q5.3:----------------

// Given that
let password = "HBffN90oDVDFRET";

// if  the password length is greater than 9 and less than 20
// your password is strong enough.
// otherwise Please write a strong valid password.

/* Your code here */
if (password.length > 9 && password.length < 20) {
  console.log("Your password is strong enough.");
} else {
  console.log("Please write a strong valid password.");
}
// ---------------Q5.4:----------------

// Given that you have the following Grades

let mathGrade = 90;
let codingGrade = 97;
let scienceGrade = 80;
let artGrade = 78;
let geographyGrade = 70;

/*
1.  find the average
2.  if your average is greater than 90, print on console "your average is excellent".
3.  if your average is less than 90 and greater than 80, print "your average is veryGood"
4.  if your average is greater than 70 and less than 80, print "your average is good"
5.  Otherwise print "You need to work harder"
*/

/* Your code here */
let avg =
  (mathGrade + codingGrade + scienceGrade + artGrade + geographyGrade) / 5;
console.log(avg);
if (avg > 90) console.log("Your average is excellent");
else if (avg < 90 && avg > 80) console.log("Your average is very good");
else if (avg > 70 && avg < 80) console.log("Your average is good");
else console.log("You need to work harder");
// ---------------Q6---------------
/*
Using ternary operator
1.  declare two number variables with  any values.
2.  find the summation
3.  if the sum is greater than 10, print "greater than 10"
4.  otherwise print "less than 10"
*/
/* Your code here */
let z = 10;
let c = 15;
sum = z + c;
sum > 10 ? console.log("greater than 10") : console.log("less than 10");

// ---------------Q7---------------
/*
Musical groups have special names based on the number of people in the group.
1.  Declare a variable called musicians and assign it with any value.
2.  Write a series of conditional statements that:
        -Prints "not a group" if musicians is less than or equal to 0
        -Prints "solo" if musicians is equal to 1
        -Prints "duet" if musicians is equal to 2
        -Prints "trio" if musicians is equal to 3
        -Prints "quartet" if musicians is equal to 4
        -Prints "this is a large group" if musicians is greater than 4

        Note: change the value of your musicians variable to test your code.
*/
/* Your code here */
let musicians = 4;
if (musicians <= 0) console.log("not a group");
else if (musicians === 1) console.log("solo");
else if (musicians === 2) console.log("duet");
else if (musicians === 3) console.log("trio");
else if (musicians === 4) console.log("quartet");
else console.log("this is a large group");

//---------------------Part3:Advanced---------------------
// ---------------Q8---------------
/*
Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores

1.  Declare 3 variables:
        - category
        - eatsPlants,and assign to it false.
        - eatsAnimals and assign to it false.
2.  Write a series of ternary statements that sets the variable category equal to:
        -"herbivore" if an animal eats plants
        -"carnivore" if an animal eats animals
        -"omnivore" if an animal eats plants and animals
        -"undefined" if an animal doesn't eat plants or animals.


 Notes:
    - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
    (change the value of them to test your code)
    - `if` statements aren't allowed 
*/

/* Your code here */
let category;
let eatsAnimals = false;
let eatsPlants = false;

eatsPlants ? (category = "herbivore") : (category = "carnivore");
eatsPlants && eatsAnimals ? (category = "omnivore") : (category = "undefined");

// ---------------Q9---------------
/*
1.  Declare a variable called string and assign it with any set of characters.
2.  Write a series of conditional statements that:
        - print true if the string length is odd.
        - print false if the string length is even.
 */

/* Your code here */
let str2 = "caocnocoeiceoscm";

str2.length % 2 === 0 ? console.log("true") : console.log("false");
// ---------------Q10---------------
/*
Write a function called multiLineString that takes no parameter and return 
the following string in the same format:

This is a long message
that spans across multiple lines
in the code.
*/

/* Your code here */
function multiLineString() {
  console.log(
    "This is a long message \nthat spans across multiple lines \nin the code."
  );
}
multiLineString();
// ---------------Q11---------------
/* 
Write a function called getCharacter that takes two parameters
a string and a number (index) and return the character at the given index.
*/
/* Your code here */
function getCharacter(strg, index) {
  return strg.slice(index, index + 1);
}
console.log(getCharacter("csacsascasc", 7));

// ---------------Q12---------------
/*
Write a function called sayHello.
The function should:
Take one input parameter, the language.
Return a greeting in that language.
If the language is 'English', return 'Hello'
If the language is 'French', return 'Bonjour'
If the language is 'Spanish', return 'Hola'
If the language is anything else, return 'Sorry, I do not speak [language].'
*/
/* Your code here */
function sayHello(lang) {
  if (lang === "English") return "Hello";
  else if (lang === "French") return "Bonjour";
  else if (lang === "Spanish") return "Hola";
  else return `'Sorry, I do not speak ${lang}.'`;
}

console.log(sayHello("Greek"));
/*------------------------Good Luck-------------------------------*/
