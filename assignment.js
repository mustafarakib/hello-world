// Problem 1: Write a function to calculate the area of a triangle.

function area(base, height) {
    return 0.5 * base * height;
}

let result1 = area(5, 4);
console.log(result1 + " square-centimetre");


// Problem 2: Write a function to convert degrees to radians.

function convert(degree) {
    return degree * (Math.PI / 180);
}

let result2 = convert(90);
console.log(result2 + " radian");


// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(num) {
    if (num === 0 || num === 1) return 1;

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let result3 = calculateFactorial (4);
console.log(result3);


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(n) {
    // The number 1 is not considered a prime number because it only has one factor, which is 1.
    if (n===1) {
        return false;
    }
    // The number 2 is the only even prime number
    else if(n === 2) {
        return true;
    }

    else {
        for(let x = 2; x < n; x++) {

            if(n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

const inputNumber = isPrime(13);
console.log(inputNumber);


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let name1 = ['Sakib', 'Tamim'];
let name2 = ['Rahim', 'Mahmud'];

let allNames = mergeArrays(name1, name2);
console.log(allNames);


/*Problem 6:
Create a function isLeapYear that takes a year as a parameter and returns
"This is a leap year" if it's a leap year, and "Not Leap year" otherwise.*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "This is a leap year";
    } else {
        return "Not Leap year";
    }
}

const inputYear = isLeapYear (1900);
console.log(inputYear);


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let chars = ['A', 'B', 'A', 'C', 'B'];
let newArray = removeDuplicates(chars);
console.log(newArray);


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(degree) {
    return (degree - 32) * 5/9;
}

let inputFahrenheit = convertToCelsius(96);
console.log(inputFahrenheit + " Celsius");


// Problem 9: Write a function to find the maximum of five numbers.

function maximum(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}

let fiveNumbers = maximum(3 , 6, 2, 56, 32);
console.log(fiveNumbers);


/* Problem 10:
Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number
of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]*/

function evenOdd(myString) {
    if(typeof myString !== 'string') {
        return "Input string";
    }

    if (myString.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(evenOdd('JavaScript'));
console.log(evenOdd('Hello'));



// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/*
Use cases:
----------
if...else is suitable for all kinds of conditions, including complex ones with multiple checks, comparisons, or boolean operations.
Switch is primarily suitable for situations where a single expression or variable is compared against multiple constant values.

Expression Evaluation:
---------------------
if...else can evaluate a series of unrelated conditions,
Switch evaluates a single expression against multiple potential constant matches.

Versatility:
-----------
if...else can handle complex conditions, multiple relational operations, and boolean logic.
Switch, in many languages, only works with integer, enumeration, or character constants.

Readability:
-----------
In situations where there are many branches based on the value of a single variable or expression, a switch statement can be more readable.

Performance:
------------
The performance difference between if...else and switch is generally negligible.
However, in some cases and languages, compilers might optimize switch statements more effectively, especially when there is a large number of cases.
*/


// 2. What is JavaScript, and what is its primary purpose in web development?

/*
Definition:
----------
JavaScript is a cross-platform, object-oriented programming language used by developers to make web pages interactive.
It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.

Primary Purpose in Web Development:
-----------------------------------
Interactivity: Makes web pages dynamic and interactive.

Asynchronous Operations: Enables data updates without full page reloads (e.g., AJAX).

DOM Manipulation: Allows dynamic content updates by altering page structure and content.

Web APIs: Supports multimedia, graphics, user input, and local data storage.

Server-Side: With Node.js, JS can run server-side applications, making it suitable for full-stack development.
*/


// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

/*
The var keyword
---------------
The var keyword was originally used for declaring variables in JavaScript.
It has certain characteristics that can lead to unexpected behavior.
For example, variables declared with var are function-scoped, meaning that they are accessible within the entire function that they are declared in.
This can lead to bugs and make it harder to understand code.

The let keyword
---------------
let was introduced in ES6 as a replacement for var.
let is block-scoped, meaning that variables declared with let are only accessible within the block that they are declared in.
This makes it easier to reason about code and prevents variable hoisting issues.
Additionally, variables declared with let can be reassigned later in the code.

The const keyword
-----------------
const is similar to let in that it is also block-scoped. However, variables declared with const cannot be reassigned.
This makes const useful for declaring values that should not change throughout the course of the program.
It also helps prevent accidental variable reassignment, which can lead to bugs and lots of headaches.

In general, it is best to use let or const instead of var when declaring variables in JavaScript.
let should be used for variables that may be reassigned, while const should be used for variables that should not be reassigned.
*/


// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

/*
The scope could be defined as a protection or filter of code variables, with which we define which variables we will be able to access in a declared code.
It determines the lifespan, access, and visibility of variables, functions, and objects throughout our code.

Global scope
------------
These are the variables that we can access and that are declared outside a block or a function.
Here we will be able to access these variables from any part of the code, without the need to mention the function because it’s not inside it.

Local Scope
-----------
If a global variable can be accessed anywhere in the code, the local variable is the opposite.
Here we will only have access to it in a specific section of the code, which is in turn within a declared function or block.
If we try to access the variable in any other part of the code, the operation cannot be executed because the variable will not be defined.

There are ways to make variable declarations that will define what the scope will allow us to access, this is achieved through “let”, “const” and “var”.
*/

