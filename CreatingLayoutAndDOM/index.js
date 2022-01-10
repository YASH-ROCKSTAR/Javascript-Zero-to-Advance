console.log("welcome to this tut")
let a=document;
a=document.all;
// a=document.body;
// a=document.forms[0];
//undefined
// a.forEach(function(element){
//     console.log(element);
// })
// Array.from(a).forEach(function(element){
//     console.log(element);
// });
a=document.links[0];
//use document.images and document.script
//and print the list of image and script on an  html pages
console.log(a);
a=document.links;
var string=".com";
Array.from(a).forEach(function(element){
    if(element.href.includes(string)){
        console.log(element.href);
    }
})