// Task 11: The Age Calculator

let currentYear = 2025
let birthYear = 1984 
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.writeln("<h2>Task 11: Age Calculator</h2>");
document.writeln("<hr>");
document.writeln(`<p style = 'font-size: 30px;'> Your age is either ${age2} or ${age1}Years old.</p>`);
document.writeln("<p style='font-size: 16px;'>— End of Task 11 —</p>");
document.writeln("<hr>"); 

// Task 12: The Geometrizer

let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.writeln("<h2>Task 12: The Geometrizer</h2>");
document.writeln("<hr>");
document.writeln(`<p style='font-size: 24px;'>The circumference is ${circumference.toFixed(2)}</p>`);
document.writeln(`<p style='font-size: 24px;'>The area is ${area.toFixed(2)}</p>`);
document.writeln("<p style='font-size: 16px;'>— End of Task 12 —</p>");
document.writeln("<hr>");

// Task 13 : lifetime Supply Calculator
let favoriteSnack = "Fabulous Chocolate Chip Cookies";
let currentAge = 21;
let maximumAge = 65;
let snakcPerDay = 2;
let totalSnacks = (maximumAge - currentAge) * 365 * snakcPerDay;
document.writeln("<h2>Task 13: The Lifetime Supply Calculator</h2>");
document.writeln("<hr>");
document.writeln(`<p style = font-size: 30px;>You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}.</p>`);
document.writeln("<p style='font-size: 16px;'>— End of Task 13 —</p>");
document.writeln("<hr>");