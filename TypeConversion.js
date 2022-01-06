//type cpnversion
console.log("Welcome to type conversion")
let myvar;
myVar=String(34);
console.log(myVar,(typeof myVar));
 
let booleanVar=String(true);
console.log(booleanVar,(typeof booleanVar));

let date=String(new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i=new Date();
console.log(i.toString(),(typeof i));

//to convert to number

let str1=Number("3434");
str1=Number("3434d4"); //not a NaN
str1=Number([1,2,3,4,5.6,7,8,9]);
console.log(str1,(typeof str1));

let number =parseInt('34');
console.log(number,(typeof number));

let number1 =parseFloat('34.098');
console.log(number1,(typeof number1));

//toFixed 
//here upto 30 decimal places
console.log(number1.toFixed(30))

//tyep coercion
let mystr="695";
let mynum=34;
//concat
console.log(mystr+mynum);

let mystr1=Number("695");
let mynum1=34;
//adding
console.log(mystr1+mynum1);
