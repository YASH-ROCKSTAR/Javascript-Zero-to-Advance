//creating element using javascript 
console.log('we are learning how to create ,remove and replace element')

let element=document.createElement('li');
let text=document.createTextNode('I am a text Node');
element.appendChild(text);

//add a class name to the li element
element.className='childul'
element.id='createli'
//syntax
//setAttribute('attributename',''attribute value)
element.setAttribute('title','mytitle');
//by innerText text is not bold that why innerHTML is used
// element.innerText='<b>hello this is created by yash</b>'
// element.innerHTML='<b>hello this is created by yash</b>'


//now how to append to html page
let ul=document.querySelector('ul.this');
ul.appendChild(element)
console.log(ul);
console.log(element)

//replacing the element
let elem2=document.createElement('h3');
elem2.className='elem2';
elem2.id='elem2';
let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2)

//replacing child
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));

//removing child
myul.removeChild(document.getElementById('lui'));

let pr=elem2.getAttribute('class');
let pr1=elem2.getAttribute('id');
let pr2=elem2.hasAttribute('href');
console.log(pr);
console.log(pr1);
console.log(pr2);

//quiz
//practise it 
/*
create a heading element eith text as go to Google and create a
anchor tag outside it with href attribute with value='https://www.google.com/'

*/
let create=document.createElement('h1');
create.className='yash1';
create.id='yash2';
create.innerText='Go to Google'
// let node1=document.createTextNode('Go to codewithharry');
// create.appendChild(node1);

let heading=document.querySelector('div#first');
heading.appendChild(create);

let createlink=document.createElement('a');
createlink.className='yash3';
createlink.id='yash4';
createlink.setAttribute('href','https://www.google.com/');
createlink.innerText='Go to GOOGLE'
// let node1=document.createTextNode('Go to codewithharry');
// create.appendChild(node1);

let headinglink=document.querySelector('div#first');
headinglink.appendChild(createlink);



