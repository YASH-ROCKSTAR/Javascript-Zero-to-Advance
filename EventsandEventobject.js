console.log('We are learning Events and events object')

//mouseover
document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log('Youu have clicked heading')
})
//click event
document.getElementById('heading').addEventListener('click',function(e){
    console.log('Youu have clicked heading')
    console.log(e);
    let variable =e.target;
    variable=e.target.className
    variable=e.target.id
    variable=Array.from(e.target.classList);
    variable=e.offsetX
    variable=e.offsetY;
    variable=e.clientX;
    console.log(variable);
    // location.href='//codewithharry.com'
})
//More events in javascript
//click on button and doubleclick
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    console.log("Thanks",e);
    //for bypassing the events to be stay remain on same page
    e.preventDefault();
}
function func2(e){
    console.log("Thanks for double click",e);
    //for bypassing the events to be stay remain on same page
    e.preventDefault();
}
//mousedown on button
function func3(e){
    console.log("Thanks for mouse down",e);
    //for bypassing the events to be stay remain on same page
    e.preventDefault();
}

//mouse enter
document.querySelector('.no').addEventListener('mouseenter',func4)
function func4(e){
    console.log("Thanks for entering no",e);
    //for bypassing the events to be stay remain on same page
    e.preventDefault();
}
//mouseleave
document.querySelector('.no').addEventListener('mouseleave',func5)
function func5(e){
    console.log("Thanks for entering on mouseleave",e);
    //for bypassing the events to be stay remain on same page
    e.preventDefault();
}
//mousemove
document.querySelector('.container').addEventListener('mousemove',func6)
function func6(e){
    console.log("Thanks for mousemove",e);
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetX},154)`;
    //for bypassing the events to be stay remain on same page
    // e.preventDefault();
}