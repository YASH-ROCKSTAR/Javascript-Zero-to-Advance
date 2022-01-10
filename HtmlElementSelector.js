console.log("WE are learning HTML element selector");

/*
element selector are of two type
1. single element selector
2.multi element selector
*/
//single element selector
let element =document.getElementById('first');
// element=element.className
//it contians text node here
// element=element.childNodes;
// element=element.parentNode;
element.style.color='red';
element.innerText='Yash is good boy'
// console.log(element.innerHTML);

let sel=document.querySelector('#first');
sel=document.querySelector('.child')
sel=document.querySelector('h1');
sel=document.querySelector('div')
sel.style.color='magenta';
console.log(sel);

//multi element selector
let elem=document.getElementsByClassName('child');
elem=document.getElementsByClassName('container');
elem=document.getElementsByTagName('div')
console.log(elem);
// console.log(elem[1]);


//old syntax of for loop
for(let index=0;index<elem.length;index++){
    const element=elem[index];
    console.log(element);
    element.style.color='blue';
}
//for each loop cannot be used in htlm element so we 
//user this syntax by using array
/*
Array.from(elem).forEach(element=>{
    console.log(element);
    element.style.color='blue';
})
*/
    