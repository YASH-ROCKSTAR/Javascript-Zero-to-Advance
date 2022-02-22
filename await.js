console.log('We are learning await/async');

async function yash(){

    console.log("Inside  yash function")
    const response=await fetch('https://api.github.com/users');
    console.log('before response')
    //ye bhi ek promise return karta hai
    const user=await response.json();
    console.log('user resolved');
    return user;
    return "Yash";   
}
console.log("Before calling")
let a=yash();
console.log("after calling")
console.log(a);
a.then(data=> console.log(data));
console.log("last line of js")