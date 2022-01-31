console.log("welcome to date and time object lecture");

let today=new Date();
console.log(typeof today);

let otherDate=new Date('8-4-2003 04:54:08');
otherDate=new Date('June 13 1976');
// otherDate=new Date('13/06/1976'); //invalid ate
otherDate=new Date('11-13-1976');
console.log(otherDate);
let a;
a=otherDate.getDay();
a=otherDate.getDate();
a=otherDate.getMinutes();
a=otherDate.getSeconds();
a=otherDate.getFullYear();
a=otherDate.getTime();
a=otherDate.getMilliseconds();
a=otherDate.getMonth();
otherDate.setDate(23);
otherDate.setMinutes(1);
otherDate.setHours(5);
console.log(otherDate);
console.log(a);