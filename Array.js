console.log("we are learning array");

const marks=[34,23,25,73,25]
const fruits=['orange','apple','pineapple'];
const mixed=['str',89,[8,9]];

const arr=new Array(23,54,21,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray('dfdf'));
arr[0]='harry';
let arrelement=arr[0]
console.log('element : ',arrelement);

let value=marks.indexOf(73);
console.log(value);

//mutating or modifiying array
//at end
marks.push(3564);
// at starting
marks.unshift(45);
console.log(marks);

marks.pop()
marks.shift();

//splice for removing with starting and ending index
marks.splice(2,3);

console.log(marks);

marks.reverse();
console.log(marks);

let myobj={
    name:'harry',
    channel:'codewithharry',
    isActive:true,
    marks:[1,5,3,6]
};
console.log(myobj);
console.log(myobj['channel']);
console.log(myobj.channel);