console.log("We are learning asynchronous programming");

// for(let i=0;i<45;i++){
//     const element=i;
//     console.log("This is index number"+element)
// }
setTimeout(()=>{
    for(let i=0;i<45;i++){
        const element=i;
        console.log("This is index number"+element)
    }
},100);

console.log("done printing")