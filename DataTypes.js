//datatype are of two type
/*
    Primitive -in stack
        -String
        -number
        -boolean
        -null
        -undefined
        -symbol
    reference-in heap
        -Array
        -object literal
        -function
        -Dates
*/
//string
var name='harry';
console.log("My string is "+name);
console.log("Datatype is "+(typeof name));

//number
let marks=34;
console.log(marks);

//boolean
let isDrive=true;
console.log("Datatype is "+(typeof isDrive));

//null
let nullvar=null;
//datatype object batata hai lekin printive hai
console.log("Data type is "+(typeof null));

//undefined
let undef=undefined;
console.log(undef);

//refernce data type
let myarr=[1,2,3,4,false,"string"];
//myarr is object
console.log("Data type is "+(typeof myarr));
 //OBJECT LITERALS   
let stmarks={
    harry:89,
    shubham:36,
    rohan:34
}
console.log(typeof stmarks)

function findName(){

}
console.log(typeof findName);

let date=new Date();
console.log(typeof date);
