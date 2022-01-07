console.log('we are learning scope');

//global scope
if(1)
{
    var i=234;
    console.log(i)
}
console.log(i);

function ui(name){
    //local scope
    var i=9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui('harry'),i);