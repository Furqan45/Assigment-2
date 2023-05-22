// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  to lower-case and assign it to a variable hasn't been declared beforehand ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var string = ["JAWAN", "PAKISTAN"]
// var index = 0;
// var lowerstring = string[index].toLowerCase();
// console.log(lowerstring);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  alert the upper-case version of the string ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newString = "paksitan zindabad"
// var uppercasestring = newString.toUpperCase()
// alert(uppercasestring);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  var cityName = â€œkaRacHiâ€; cityName in Capitalisation---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var cityName = "kaRacHi";
// var captilisimCityname = cityName[0].toUpperCase() + cityName[1].toLowerCase()
// console.log(captilisimCityname);


                                                                               // Chapter 22 - 25 (Strings)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- "captain" has been assigned to variable â€œsameWordsâ€. You want to slice "ap" out of it. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let sameWords = "captain";
// let newWords = sameWords.slice(1, 3);
// console.log(newWords);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- characters in the string will be assigned ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var sameWords = "captain";
// let wordCount = sameWords.length;
// console.log(wordCount);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  string "elephant" has been assigned to the variable animal ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var animal = "elephant";
// var seg = animal.slice(1, -1)
// console.log(seg);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- string represented by a  variable and assign the number to a second variable---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let myString = "Mian, Furqan!";
// let newWordcount = myString.length;
// console.log(newWordcount);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- a first statement measure how many characters there are ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let newString = "Pakistan, Zindabad!";
// let wordCount = newString.length;

// let sliceString = newString.slice(1, -3);

// console.log(wordCount);
// console.log(sliceString);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  var text = "To be or not to be ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var text = "To be or not to be.";
// var indx = text.indexOf("not");
// console.log(indx);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  var text = "To be or not to be ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- last instance of "go" in the string ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var statement = "let it go, turn away and slam the door. Let it go, can't hold it back anymore.";
// var index = statement.lastIndexOf("go");
// if (index !== -1) {
//   index = index;
// }
// console.log(index);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- indexNum exists in a string. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var string = "Jawan, Pakistan";
// var indexNum = 12;
// if (string.length > indexNum){
//     console.log("segment exists");
// }
// else{
//     console.log("segment does not exists")
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- what character is at index 2? ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var string = "abcde";
// var indexNum = string.charAt(2);
// console.log(indexNum);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- 10th character in the string ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var text = "jawan pakistan wow valley program.";
// var index = text.charAt(10);
// console.log(index);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- str and assign it to x, declared beforehand. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var str = "paksitan, Zindabad";
// var x = str.charAt(str.length - 1)
// console.log(x);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- find the 5th character in a string represented. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var input = "MuhammadFurqan"
// var cha = input.charAt(4);
// console.log(cha);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- 3rd character of a string represented by a variable. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// var string = "Hello World";
// var newWords = "1";
// if (string.charAt(2) === newWords){
//     console.log("The 3rd character is '1'")
// ;}
// else{
//     console.log("The 3rd character is not '1'");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- str replace the first instance of "1" with "one" and assign ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var str = "1, 2, 3, 4, 5, 6";
// var newString = str.replace("1", "one");
// console.log(newString)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- enter 3 characters that need to appear x.replace("a", "z");---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var x = "appleananas"
// var y = x.replaceAll("a","z");
// console.log(y);


// Chapter 26 (Rounding Numbers)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- rounds a number to the nearest integer. ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var number = 2.7;
// var roundedNumber =Math.round(number);
// console.log(roundedNumber);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Round up origNum and assign it to roundNum ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var origNum = 1.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Round down a origNum and assign it to roundNum ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var origNum = 2.7;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- variable and assign the result to a second variable---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newNumber = 2.8;
// var roundedNumber = Math.round(newNumber);
// console.log(roundedNumber);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- variable and assign the result to a second variable---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newNumber = 0.5;
// var roundedNumber;
// if (newNumber === 0.5){
//     roundedNumber = 0;
// }
// else{
//     roundedNumber = Math.round(newNumber)
// }
// console.log(roundedNumber);


                                                                                          // Chapter 27 (Random Numbers)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- JavaScript to a number in the range 1 to 50---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newNumber = Math.random();
// var numberInrange = Math.floor(newNumber *50) + 1;
// console.log(numberInrange);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- dice in JavaScript with the use of pseudo- random number ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var dice = rolldice();
// function rolldice (){
//     var newNumber = Math.floor(Math.random() * 6)+ 1;
//     return newNumber;
// }
// console.log("The Dice rolled:" + dice);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- toss (head/tail) JavaScript with the use of pseudo-random number ---------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var toss = tosscoin();
// function tosscoin(){
// var newNumber =Math.random();
// if (newNumber <0.5){
//     return "head";
// }
// else{
//     return "Tail"
// }
// }
// console.log("The coin landed on:" + toss);


                                                                                // Chapter 28, 29 (Converting Strings)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- convert a string to an integer in JavaScript --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var string = "381";
// var num = Number(string);
// console.log(string);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- convert a string containing a decimal number to a floating-point --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var string = "2.175";
// var num = Number(string);
// console.log(num);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- convert a number to a string in JavaScript --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var number = 874;
// var string = number.toString();
// console.log(string);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- convert a number to a string in JavaScript --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newNumber = 42;
// var stringnumber = convertNumber(newNumber);
// function convertNumber(newNumber){
//     var string = newNumber.toString();
//     return string;
// }
// console.log(stringnumber)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- convert a number to a string in JavaScript --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var decimalNumber = "3.14";
// var integer = parseInt(decimalNumber);
// console.log(integer);

                                                                               // Chapter 30 (Controlling the length of decimals)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- number represented by num to 4 places --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var num = 3.2458425;
// var newNumber = num.toFixed(4);
// console.log(newNumber);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- number represented by a variable to 2 places, --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var num = 3.2458425;
// var newNumber = num.toFixed(2);
// console.log(newNumber);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- rounded to 2 digits and converted to a string, --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newNumber = 3.145787451;
// if (newNumber.toFixed(2).toString().length > 4){
//     console.log("The rounded number has more than 4 characters.");}
// else{
//     console.log("The rounded number has 4 or fewer characters.");
// }


                                                                                 // Chapter 31 - 34 (Date & Time)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- new Date object and assigns it to dObj, --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var dObj = new Date();
// console.log(dObj);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- creates a new Date object, converts it to a string, and assigns the string to dStr --------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Code a statement that extracts the day of the week from a Date object--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var x = new Date();
// var day = x.getDate();
// console.log(day);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Date object and assigned to d--------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date().getDay();
// var currentDay = dayNames[d];
// alert(currentDay);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Extract all parts of the Date and Time and assign -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1;
// var day = currentDate.getDay();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Date object for the last day of the last month of 2020-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var later = new Date (2020, 11, 0);

// var year = later.getFullYear();
// var month = later.getMonth() + 1;
// var day = later.getDate();
// console.log("Year" + year);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- displays in an alert the milliseconds that elapsed-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newDate = new Date(); 
// var olddate = new Date(1980, 0, 1); 
// var milliseconds = newDate.getTime() - olddate.getTime();
// alert(milliseconds);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- change the year of a date in JavaScript -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var date = new Date(); 
// date.setFullYear(2023); 
// console.log(date);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- change the minutes of a given time to a specific value. (Value by prompt) -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var currentDate = new Date ();
// var updateTime = specificvalue(currentDate);

// function specificvalue(time){
//     var newTime = prompt("Enter the desired minutes value")
//     time.setMinutes(parseInt(newTime, 10));
//     return time;
// }
// console.log("Before: " + currentDate);
// console.log("After: " + updateTime);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Age calcultater -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function calculateAge(birthDate) {
//     var birthDate = prompt ("Enter your birth date (YYYY-MM-DD):") 
//     var birth = new Date(birthDate);
//     var now = new Date();
//     var diff = now - birth;
//     var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//    console.log("Your age is: " + age);
//   }
//   calculateAge();


                                                           // Chapter 35 - 37 (Functions)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  function displayAlert. -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function displayAlert() {
//     alert("This is an alert message.");
//   }
// displayAlert()

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------  prompts the user to "Enter name" -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function askName() {
//     var userName = prompt("Enter name:");
//     console.log("Hello, " + userName + "!");
//   }
//   askName();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- first line of a function named concat that has 3 parameters -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function concatation(a, b, c){
// }
// var variable = "Jawan";
// var string = " pakistan";
// var num = 52;
// concatation("a", "b", "c", variable, string, num);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- function that has 2 parameters.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// var concatationString = concatenateString("Pakistan", "Zindabad");
// function concatenateString(string1, string2){
// var result = string1 + string2;
// return result;
// }
// console.log(concatationString);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- function that has three parameters -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var concatationString = concatenateString("7", "4", "5");
// function concatenateString(string1, string2, String3){
// var result = string1 * string2 * String3;
// return result;
// }
// console.log(concatationString);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- JavaScript function that takes an array of numbers  -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var numbers = [8, 4, 4, 8, 9];
// var avg = calculateAverage(numbers);

// function calculateAverage(numbers) {
//     var sum = 0;
//     var count = numbers.length;
//     for (var i = 0; i < count; i++) {
//       sum += numbers[i];
//     }
//     var average = sum / count;
//     return average;
//   }
//   console.log("Average:", avg);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- JavaScript function that takes two parameters and returns their sum.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var num1 = 6;
// var num2 = 8;
// var result = calculateSum(num1, num2);
// function calculateSum(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }
// console.log("Sum;", result)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Write a function which tells letter counts of (word).-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//   var word = "Mian Muhammad Furqan";
//   var wordCount = countWords(word);
//   function countWords(sentence) {
//     var words = sentence.split(" ");
//     return words.length;
//   }
//   console.log("Total number of words:", wordCount);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Write a function to set (year) in date object.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var currentyear = 2023;
// var newDate = setYearInDate(currentyear);
// function setYearInDate(currentyear) {
//     var date = new Date();
//     date.setFullYear(currentyear);
//     return date;
//   }
//   console.log("Updated Date:", newDate);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var newArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var chosenword = 'abubakar';
// var isPresent = selectword(newArray, chosenword);
// function selectword(newArray, chosenword) {
//     return newArray.includes(newArray);
//   }
//   console.log("Word Present:", isPresent);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- Write a function which repeat (letter) 10 times.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var letter = 'mian';
// var repeatedLetter = repeatLetter(letter);
// function repeatLetter(letter) {
//     return letter.repeat(10);
//   }
//   console.log("Repeated Letter:", repeatedLetter);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- write a function which reverse array = ['a','b','c','d','e']-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var array = ['a','b','c','d','e']
// var reverseArray = reverseArray(array);
// function reverseArray(arr){
// return arr.reverse();
// }
// console.log("Reversed Array", reverseArray);


                                                                        // Chapter 38 (Local vs. Global Variables)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- function that demonstrates the usage of a local variable.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var name = "Furqan";
// var a = greet(); 
// function greet() {
//     console.log("Mian, " + name + "!");
//   }
  
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- access a global variable inside a function.-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var variable = "I am enrolled in jawan paksitan"

// function globalVariable (){
//     console.log(variable)
// }
// globalVariable();

                                                                       // Chapter 39, 40 (Switch Statements)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- switch statement that checks the value of a variable -------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var dayOfWeek = "Mon";

// switch (dayOfWeek) {
//   case "Mon":
//     console.log("Monday");
//     break;
//   case "Tues":
//     console.log("Tuesday");
//     break;
//   case "Wed":
//     console.log("Wednesday");
//     break;
//   case "Thur":
//     console.log("Thursday");
//     break;
//   case "Fri":
//     console.log("Friday");
//     break;
//   case "Sat":
//     console.log("Saturday");
//     break;
//   case "Sun":
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------- check whether cityName given by user check the cityName if match alert-------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "Newyork":
//     alert("Newyork good for vactions");
//     break;
//   case "Miami FLorida":
//     alert("Best beach of the world");
//     break;
//   case "Dubai":
//     alert("world best tourest Place");
//     break;
//   default:
//     alert("The city name you entered does not match any known city.");
//     break;
// }






















