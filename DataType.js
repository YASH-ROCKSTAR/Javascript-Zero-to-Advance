var myName="Yash Nigam"
//this is String
// -----Method for finding Datatype use typeof(variablename)----
console.log(myName,typeof(myName));

var myAge=27;
//this is number
console.log(myAge,typeof(myAge));

var iamyash=true;
//this is boolean type;
console.log(iamyash,typeof(iamyash));

var iamyash=false;
//this is boolean type;
console.log(iamyash,typeof(iamyash));

//checking various type of conversion and 
//various method 
console.log(10+"5");//concat
console.log(9-"5");//1 -- bug 
console.log("Java"+"Script");//concatenation
console.log(" "+0);
console.log("yash"-"nigam");//give NaN--not  number
//it is string so cannot minus
console.log(true+true); //2--1+1
console.log(false+false)
console.log(false-true)
console.log(true+false)

//Interview Question
//Differnece b/w null vs undefined?

//null
var aa=null;
console.log(aa);
//2 ---  bug
console.log(typeof(aa));//bug --datatype is object a/c to javascript

////undefinded because we have not assign value
var iAmStandBy;
console.log(iAmStandBy)
console.log(typeof(iAmStandBy));
