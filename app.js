//===================================Assignment # 7 JAVASCRIPT Chapter(9-11)======================//
//====================================USER INPUT AND CONDITIONAL STATEMENTS===========================//



//Q1:Write a program to take "city" name as input from user. If user enters "Karachi"; welcome the user like this:
// "Welcome to city of lights".
//Ans:
// var cityName = prompt( "Write the city name here." );
// if (cityName == "karachi" || cityName == "Karachi" || cityName == "KARACHI"){
//     alert( "Welcome to the city of lights." );
// }
// else {
//     alert( "Welcome!");
// }



//Q2:Write a program to take "gender" as input from user. If the user is male, give the message:
// Good Morning Sir. If the user is female, give the message: Good Morning Ma'am.
//Ans:
// var gender = prompt( "Hello! Who are you male or female?" );
// if (gender == "female" || gender == "Female" || gender == "FEMALE"){
//     alert( "Good Morning Ma'am!" );
// }
// else {
//     alert ( "Good Morning Sir! ");
// }



//Q3:Write a program to take input color of road traffic signal from the user and show the message according to this table:
//Signal color :  Message
//  Red        :  Must Stop
//  Yellow     :  Ready to move
//  Green      :  Move now
//Ans:
// var signalColor = prompt( "Write here a color of traffic signal rule!");
// document.write ( "<b>SIGNAL COLOR RULES:</b>" + "<br>" + "<br>" );
// if (signalColor == "red" || signalColor == "Red" || signalColor == "RED"){
//     document.write ( "Red Color: Must stop!" );
// }
// else if (signalColor == "yellow" || signalColor == "Yellow" || signalColor == "YELLOW"){
//     document.write ( "Yellow Color: Ready to move!" )
// }
// else{
//     document.write ( "Green Color: Move now!" );
// }



//Q4:Write a program to take input remaining fuel in car(in litres) from user.
//If the current fuel is less than 0.25 litres, show the message, "Please refill the fuel in your car."
//Ans:
// var remainingFuel = +prompt ("How much fuel in litres is remaining in your car?");
// if (remainingFuel < 0.25 ){
//     alert ( "Please refill the fuel in your car!" );
// }
// else {
//     alert ( "Okay!" );
// }



//Q5:Run this script, and check whether alert message would be displayed or not. Record the outputs.
//Ans:
// var a = 4;
// if (++a === 5){
//     alert ( "Given condition for variable a is true!" );
// }

// var b = 82;
// if (++b === 83){
//     alert( "Given condition for variable b is true!" );
// }

// var c = 12;
// if (c++ === 13){
//     alert( "Condition 1 is true!" );
// }
// if (c === 13){
//     alert ( "Condition 2 is true!" );
// }
// if (++c < 14){
//     alert ( "Condition 3 is true!" );
// }
// if (c === 14){
//     alert( "Condition 4 is true!" );
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === materialCost+laborCost){
//     alert( "The cost equals!" );
// }

// if(true){
//     alert( "True!" );
// }
// if(false){
//     alert( "false!" );
// }

// if("car" < "cat"){
//     alert( "Car is smaller than cat!" );
// }



//Q6:Write a program to take input the marks obtained in three subjects and total marks.
//Compute and resulting percentage on your page. Take percentage and compute grade as per.
//Ans:
// var totalMarks = +prompt ( "Write down the total marks of three subjects!" );
// var marksObtained = +prompt ( "Write here the marks obtained in three subjects." );
// var percentage = marksObtained/totalMarks*100;
// document.write ( "<b> Marks Sheet <b>" + "<br>" + "<br>" + "<br>" );
// document.write ( "Total Marks: " + totalMarks + "<br>" );
// document.write ( "Marks Obtained: " + marksObtained + "<br>" );
// document.write ( "Percentage: " + percentage + "%" + "<br>" );
// if (percentage > 80 || percentage == 80){
//     document.write ( "Grade: A-One" + "<br>" );
//     document.write ( "Remarks: Excellent" + "<br>" );
// }
// else if(percentage > 70 || percentage == 70){
//     document.write ( "Grade: A" + "<br>" );
//     document.write ( "Remarks: Good" + "<br>" );
// }
// else if ( percentage > 60 || percentage == 60){
//     document.write ( "Grade: B" + "<br>" );
//     document.write ( "Remarks: You need to improve!" + "<br>" );
// }
// else{
//     document.write ( "Grade: Fail" + "<br>" );
//     document.write ( "Remarks: Sorry !" + "<br>" );
// }



//Q7:Store a secret number(ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//a.If the user guesses the same number, show "Bingo! Correct answer".
//b.If the guessed number +1 is the secret number, Show "Close enough to the corect answer".
//Ans:
// var secretNumber = 3;
// var guess = +prompt ( "Guess the secret number!" );
// if (guess == secretNumber){
//     document.write ( "Bingo! Correct answer" );
// }
// else if (guess == 4 ){
//     document.write ( "Close enough to the correct answer!" );
// }
// else{
//     document.write ( "Wrong Answer !" );
// }



//Q8:Write a program to check whether the given number is divisible by 3.
//Show the message to the user if the number is divisible by 3.
//Ans:
// var num = 3;
// var div = +prompt( "Enter the number whose divisibility by 3 need to be checked." );
// if (div % num == 0){
//     alert( "The number is divisible" );
// }
// else {
//     alert( "The number is not divisible" );
// }



//Q9:Write a program that checks whether the given input is an even number or an odd number.
//Ans:
// var number = +prompt( "Enter a number!" );
// document.write( "<b>Even or odd:</b>" + "<br>" + "<br>" );
// if (number%2 == 0){
//     document.write( "The given input is an even number" );
// }
// else{
//     document.write( "The given input is an odd number" );
// }



//Q10:Write a program that takes temperature as input and shows a message based on following criteria.
//a.T > 40 then "It's too hot outside."
//b.T > 30 then "The weather today is normal."
//c.T > 20 then "Today's weather is cool."
//d.T > 10 then "OMG! Today's weather is so cool."
//Ans:
// var temperature = +prompt( "Write here the temperature" );
// document.write( "<b>Temperature</b>" + "<br>" + "<br>" );
// if (temperature > 40){
//     document.write( "It's too hot outside." );
// }
// else if(temperature > 30){
//     document.write( "The weather today is normal." );
// }
// else if(temperature > 20){
//     document.write ( "Today's weather is cool." );
// }
// else{
//     document.write ( "OMG! Today's weather is so cool." );
// }



//Q11:Write a program, to create a calculator for +,-,*,/ and % using if statement.
//Take the following input:
//a.First Number.
//b.Second Number
//c.Operation(+,-,*,/,%)
//d.Compute and show the calculated result to the user.
//Ans:
var firstNumber = +prompt( "Enter the first number." );
var secondNumber = +prompt( "Enter the second number." );
var operator = prompt( "Write the operator." );
document.write( "<b>Calculator</b>" + "<br>" + "<br>" );
if(operator== "+"){
    document.write( "Result: " + (firstNumber+secondNumber) + "<br>" );
}
else if(operator == "-"){
    document.write( "Result: " + (firstNumber-secondNumber) + "<br>" );
}
else if(operator == "*"){
    document.write( "Result: " + (firstNumber*secondNumber) + "<br>" );
}
else if(operator == "/"){
    document.write( "Result: " + (firstNumber/secondNumber) + "<br>" );
}
else{
    document.write( "Result: " + (firstNumber%secondNumber) + "<br>" );
}





//===============================================Chapters (9-11) completed=====================================//
