// Task 3: Variable Manipulation Step-by-Step

let number;

document.writeln("<h2>Task 3: Variable Manipulation Step-by-Step</h2>");
document.writeln("<hr>");
document.writeln("<p style='font-size: 30px;'>Value after variable declaration is: " + number + "</p>");

number = 5;
document.writeln("<p style='font-size: 30px;'>Initial value: " + number + "</p>");

number++;
document.writeln("<p style='font-size: 30px;'>Value after increment is: " + number + "</p>");

number += 7;
document.writeln("<p style='font-size: 30px;'>Value after addition is: " + number + "</p>");

number--;
document.writeln("<p style='font-size: 30px;'>Value after decrement is: " + number + "</p>");

let remainder = number % 3;
document.writeln("<p style='font-size: 30px;'>The remainder is: " + remainder + "</p>");

document.writeln("<p style='color: gray;'>— End of Task 3 —</p>");
document.writeln("<hr>");

// Task 5: Multiplication Table

let tableNum = +prompt("Enter a number to show its multiplication table:");
let tableLength = 10;

document.writeln("<h2>Task 5: Multiplication Table of " + tableNum + "</h2>");
document.writeln("<hr>");

for (let i = 1; i <= tableLength; i++) {
  document.writeln(
    "<p style='font-size: 24px; color: navy;'>" + 
    tableNum + " × " + i + " = " + (tableNum * i) + 
    "</p>"
  );
}

document.writeln("<p style='color: gray;'>— End of Task 5 —</p>");
document.writeln("<hr>");

//Task 6: Temperature Converter 

// Celsius to Fahrenheit
let celsius = 25;
let fahrenheitResult = (celsius * 9/5) + 32;

// Fahrenheit to Celsius
let fahrenheit = 70;
let celsiusResult = (fahrenheit - 32) * 5/9;

document.writeln("<h2>Task 6: Temperature Converter</h2>");
document.writeln("<hr>");
document.writeln("<p style='font-size: 24px;'>" + celsius + "°C is " + fahrenheitResult + "°F</p>");
document.writeln("<p style='font-size: 24px;'>" + fahrenheit + "°F is " + celsiusResult.toFixed(2) + "°C</p>");
document.writeln("<p style='font-size: 16px;'>— End of Task 6 —</p>");
document.writeln("<hr>");

