//var--variable-key
//'Yash nIgam'---value
var myName= 'Yash nigam';
console.log(myName);

var myAge=26;
console.log(myAge);

//rule for writing variable name
//1).cannot start with number
//1.1). first character must be letter, underscore(_) and $;
//2).rest of variable must include letter,any number and the underscore
//3).case sensitive
//4).no limit of length of variable name
// var _myName="Yash";
// var _1myName="Nigam";
    // this is error
    // var 1myName="Yash";
var $myName="technical";
console.log($myName);

//variable in js
//var , let , const
//car is global scope
var name='harry';
console.log(name);
var channel;
channel='code with harry';
console.log(channel);
var _city='delhi';
console.log(_city);

//const
const ownername='hari';
//cannot change name
// ownername=yash;
console.log(ownername);

var fruits;
console.log(fruits);

//let is block scope.
{
    //here only local varibale is access
    let _city ='Rampur';
    _city='kolkata';
    console.log(_city);
}
console.log(_city);
//we can push element in const but we cannot assign value 
const arr1=[12,23,12,533,3];
arr1.push(45);
console.log(arr1);

//most common programming case types
// 1).camelCase
// 2).kebab-Case
// 3).snake_Case
// 4).PascalCase

//let is used for clean code.
//in var we can used it anywhere so will make hotpoch
