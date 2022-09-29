//1. Write a ts program to print day of week name using switch case.
var day = 4;
switch (day) {
    case 1:
        console.log("It's Sunday!");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
}
//2. Write a ts program print total number of days in a month using switch case.
var month = 'november';
switch (month) {
    case 'january' && 'march':
        console.log(month, 'has 31 days');
        break;
    case 'may' && 'july':
        console.log(month, 'has 31 days');
        break;
    case 'octuber' && 'december':
        console.log(month, 'has 31 days');
        break;
    case 'august':
        console.log(month, 'has 31 days');
        break;
    case 'feburary' && 'april':
        console.log(month, 'has 30 days');
        break;
    case 'june' && 'september':
        console.log(month, 'has 30 days');
        break;
    case 'november':
        console.log(month, 'has 30 days');
        break;
}
//3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
var ch = 'm';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(ch, "is a vowel");
        break;
    default:
        console.log(ch, 'not a vowel');
        break;
}
//4. Write a ts program to find maximum between two numbers using switch case.
var numOne = 23454;
var numTwo = 89;
switch (true) {
    case (numOne > numTwo):
        console.log("Bigger number is ".concat(numOne));
        break;
    case (numOne < numTwo):
        console.log("Bigger number is ".concat(numTwo));
        break;
    default: console.log(false, '-> Something went wrong');
}
//5. Write a ts program to check whether a number is even or odd using switch case.
var x = 10 % 2;
switch (x) {
    case 0:
        console.log(x, "is even number");
        break;
    case 1:
        console.log(x, "is odd number");
        break;
}
//6. Write a ts program to check whether a number is positive, negative or zero using switch case.
var num = -857;
switch (num > 0) {
    case true:
        console.log(num, "is positive");
        ;
        break;
    case false:
        switch (num < 0) {
            case true:
                console.log(num, "is negative");
                ;
                break;
            case false:
                console.log(num, "is zero");
                break;
        }
        break;
}
//8. Write a ts program to create Simple Calculator using switch case.
var num1 = 50;
var num2 = 2;
var operation = "-";
var result;
switch (operation) {
    case '+':
        result = num1 + num2;
        console.log("addition is", result);
        break;
    case '-':
        result = num1 - num2;
        console.log("subtraction is", result);
        break;
    case '*':
        result = num1 * num2;
        console.log("Multiplication", result);
        break;
    case '/':
        result = num1 / num2;
        console.log("division is", result);
        break;
}
