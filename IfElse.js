console.log('We Are learning if Else');

const age=18;
const var1=34;

const doesdrive=true;
if(age==18){
    console.log('age is 19');
}
//in double equal only value is checked
//in tripel equal both type and vaue is checked
else if(age===65){
    console.log('Age is 65');
}
else{
    console.log('age is not 19');
}

if(var1!='undefined'){
    console.log('var1 is defined');
}

if(typeof var1 !==undefined){
    console.log('var1 is defined')
}
else{
    console.log('var1 is not defined');
}

if(doesdrive || age>18){
    console.log('you can drive')
}
else{
    console.log('you cannot drive');
}

console.log(age==45? 'Age is 45' : 'age is not 45');

switch(age){
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;    
    case 38:
        console.log('You are 38');
        break;    
    default:
        console.log('You are unknown age');
        break;    
}