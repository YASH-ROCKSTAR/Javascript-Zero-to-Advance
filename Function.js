console.log("We are learning functions");
function greet(name,thank='Thank You'){
    let msg=`How are you ${name} ${thank}!`;
    return msg;
}
const mygreet=function(name,thank='Thank You'){
    let msg=`How are you ${name} ${thank}!`;
    return msg;
}

let name='SkillF';
let name2='Rohan';

let val=greet(name,'Thanks a lot');
console.log(val);

const myobj={
    name:'skillF',
    game:function(){
        return"GTA";
    }
}
console.log(myobj.game());

arr=['fruit','vegetable','function'];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});
