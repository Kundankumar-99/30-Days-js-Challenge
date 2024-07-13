// Day 1 Variable and Data Type 

// Tasks / Activities.

// Activity 1: Variable Declaration

// Task 1 : Declare a Variable using var, assign it a number, and log the value to the console.

var num = 45 ;
console.log (num);

//Task_2 - Declare a variable using 'let', assign it a string and log the value to the console.

let firstName = "Kundan" ;
console.log(firstName);

//Task_3 - Declare a variable using 'let', assign it a boolean value and log the value to the console.

let bool = true;
console.log(bool);

//Task_4 - Create variables of different data types(number, string, boolean , object, array) and log each variable's type using the typeof

let Math_number = 95;
console.log(typeof(Math_number));
// result number

let Name = "Kundan Kumar";
console.log(typeof(Name));
// result string

let is_Name = true;
console.log(typeof(is_Name));
// result boolean

let obj = {
    Name : "kundan",
    Profession : "frontend Web Developer",
    Experienced : "3Year",
    is_Working : true,
};
console.log(typeof(obj));
// result object

let arr = [1,2,3,4,function(){}];
console.log(typeof(arr));
// result object

//Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both the values to console.

let value = 95;
console.log("The Value is ", value); //95

value = 65;
console.log("The Value is ", value); //65


// Task_6 - Try reassigning a variable declared with 'const' and observe the error

const val = 65 ;
console.log ("The Const value is" , val);

// val = 56; Showing Error we cannot initialise the const Value.
console.log ("The Const value is" , val);
