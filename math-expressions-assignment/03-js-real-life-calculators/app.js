// Task 6: Temperature converter

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


// Prices & Quantities
let item1Price = 650;
let item2Price = 100;
let item1Quantity = 3;
let item2Quantity = 7;
let shippingCharges = 100;

// Calculations
let totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// Task 7: Shopping Cart

document.writeln("<h2>Task 7: Shopping Cart</h2>");
document.writeln("<hr>");

document.writeln("<p style='font-size: 24px;'>Price of item 1 is " + item1Price + "</p>");
document.writeln("<p style='font-size: 24px;'>Quantity of item 1 is " + item1Quantity + "</p>");
document.writeln("<p style='font-size: 24px;'>Price of item 2 is " + item2Price + "</p>");
document.writeln("<p style='font-size: 24px;'>Quantity of item 2 is " + item2Quantity + "</p>");
document.writeln("<p style='font-size: 24px;'>Shipping Charges: " + shippingCharges + "</p>");
document.writeln("<hr>");
document.writeln("<p style='font-size: 28px; font-weight: bold;'>Total cost of your order is " + totalCost + " PKR</p>");
document.writeln("<p style='font-size: 16px;'>— End of Task 7 —</p>");
document.writeln("<hr>");

// Task 8: Marks Sheet

// Total & Obtained Marks
let totalMarks = 980;
let marksObtained = 804;

// Calculation
let percentage = (marksObtained / totalMarks) * 100;

document.writeln("<h2>Task 8: Percentage Calculator</h2>");
document.writeln("<hr>");

document.writeln("<p style='font-size: 24px;'>Total Marks: " + totalMarks + "</p>");
document.writeln("<p style='font-size: 24px;'>Marks Obtained: " + marksObtained + "</p>");
document.writeln("<p style='font-size: 24px;'>Percentage: " + percentage + "%</p>");

document.writeln("<p style='font-size: 16px;'>— End of Task 8 —</p>");
document.writeln("<hr>");

// Task 9: Currency Converter

// Currency amounts
let usDollars = 10;
let saudiRiyals = 25;

// Exchange rates
let usdToPkr = 104.80;
let sarToPkr = 28;

// Total in PKR (single expression)
let totalInPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

document.writeln("<h2>Task 9: Currency Converter</h2>");
document.writeln("<hr>");

document.writeln("<p style='font-size: 24px;'>Total Currency in PKR: " + totalInPkr + "</p>");

document.writeln("<p style='font-size: 16px;'>— End of Task 9 —</p>");
document.writeln("<hr>");

// Task 10; Arithmetic in a Single Expression 

// Initialization
let number = 5;

// One expression: ((5 + 5) * 10) / 2
let result = ((number + 5) * 10) / 2;

document.writeln("<h2>Task 10: Arithmetic in a Single Expression</h2>");
document.writeln("<hr>");

document.writeln("<p style='font-size: 24px;'>Initial number: " + number + "</p>");
document.writeln("<p style='font-size: 24px;'>Final result: " + result + "</p>");

document.writeln("<p style='font-size: 16px;'>— End of Task 10 —</p>");
document.writeln("<hr>");

