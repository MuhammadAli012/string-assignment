//1. Write a ts program to find maximum between two numbers using conditional operator.
var checkMax = 45;
var checkMax2 = 50;
if (checkMax > checkMax2) {
    console.log(checkMax, " is maximum Number");
}
else {
    console.log(checkMax2, " is maximum Number");
}
//2. Write a ts program to find maximum between three numbers using conditional operator.
var a = 30; //prompt("Enter first Number");
var b = 45; //prompt("Enter 2nd Number");
var c = 60; //prompt("Enter 2nd Number");
if (a > b && a > c) {
    console.log("maximum number is :", a);
}
else if (b > a && b > c) {
    console.log("maximum Number is :", b);
}
else {
    console.log("maximum Number is :", c);
}
//3. Write a ts program to check whether a number is even or odd using conditional operator.
var num = 110; //prompt("Enter your Number");
if (num % 2 == 0) {
    console.log(num, "Number is EVEN");
}
else {
    console.log(num, "Number is ODD");
}
//4. Write a ts program to check whether year is leap year or not using conditional operator.
var year = 2002; //prompt("Enter your year");
if (year % 4 == 0) {
    console.log(year, " is leap year"); //divide the year by 4. If it is fully divisible by 4, it is a leap year
}
else {
    console.log(year, " is not leap year");
}
//5. Write a ts program to check whether character is an alphabet or not using conditional operator.
var input = "h"; //prompt("Enter your charachter");
var check = /^[a-zA-Z]+$/;
if (input.match(check)) {
    console.log(input, "is an alphabet");
}
else {
    console.log(input, " is not an ALphabet");
}
