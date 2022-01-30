console.log('local and session storage');


let arr=['adark','pyaz','bindhi'];
//add a key value inside local storage
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('sabzi',JSON.stringify(arr));
//clear the entire storage
// localStorage.clear();

//removing an item
localStorage.removeItem('Name2');

let name=localStorage.getItem('Name')
name=JSON.parse(localStorage.getItem('sabzi'));
console.log(name);