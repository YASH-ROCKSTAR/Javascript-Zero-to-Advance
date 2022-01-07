//for loop
for(let i=0;i<100;i++){
    console.log(i);
}
let j=110;
while(j<10){
    console.log(j+1);
    j+=1;
}

let k=0;
do{

    console.log(k+1);
    if(k===5){
        break;
    }
    k+=1;
    
}while(k<10)

let arr=[2,5,6,4,2,3];
for(let i=0;i<arr.length;i++){
    const element=arr[i];
    console.log(element);
}

arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

let obj={
    name:'rohan das',
    age:78,
    type:'dangerous',
    os:'ubuntu'
}
for(let key in obj){
    console.log(`this ${key} of object is ${obj[key]}`);  
}
console.log('done');