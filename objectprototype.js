console.log("welcome to object prototype");

let obj={
    name:"yash",
    channel:"welcome to codechef",
    address:"Mars"
}
function Obj(givenname){
    this.name=givenname;
}
Obj.prototype.getName=function(){
    return this.name;
}
Obj.prototype.setName=function(newname){
    return this.name=newname;
}
let obj2=new Obj("RAJESH");
console.log(obj2);