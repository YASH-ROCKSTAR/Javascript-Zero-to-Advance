console.log("We are learning string");
const name="Harry";
const greeting="Good morning";
console.log(greeting+name);
console.log(greeting+' '+name);

let html;
html="<h1>this is Heading</h1>"+
"<p> this is my Para</p>";
//this will add in last 
html=html.concat('this','str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());;

//accessing and printing element
console.log(html[1]);

console.log(html.indexOf('h1'));
console.log(html.indexOf('52'));
console.log(html.lastIndexOf('h1'));

//return character at index;
console.log(html.charAt(3));

//endswith give true amd false;
console.log(html.endsWith('str2'));
console.log(html.endsWith('str2ccsdcds'));

//includes
console.log(html.includes('fg'));

//substring
// start index includes and last index is n-1
console.log(html.substring(1,6));

//slice
console.log(html.slice(0,4));
console.log(html.slice(-4));

// /split
//split in separate comman particular word
console.log(html.split(' '));

//replace
//changes only first occurence
console.log(html.replace('this','it'))


//by using backticks
//we can use refernece variabvle using ${};
let fruit1='orange';
let fruit2='Apple';
let myHtml=`hello ${name}
        <h1> this is heading</h1>
        <p> You like ${fruit1} and ${fruit2}`;
console.log(myHtml);        