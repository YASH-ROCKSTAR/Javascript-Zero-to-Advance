console.log("Welcome to prototype INHERTINACE");

const proto={
    slogan:function(){
        'This compant is the best';
    },
    ChangeName:function(newName){
        this.name=newName;
    }
}

//this create harry object
// const harry=Object.create(proto);
// harry.name='harry';
// harry.role='programmer';
// // harry.ChangeName('harry2');
// console.log(harry);

//this also create
const harry=Object.create(proto,{
    //writable is important for changing name
    name:{value:'harry',writable:true},
    role:{value:'programmer'},
})
harry.ChangeName('harry22')
console.log(harry);

function Employee(name,salary,experience) {
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//slogan
Employee.prototype.slogan=function(){
    return `This company is the best Regards, ${this.name}`;
}
let harryobj=new Employee("Harry",870000,45)
console.log(harryobj.slogan());

function Programmer(name,salary,experience,language){
    Employee.call(this.name,salary,experience);
    this.language=language; 
}
//inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);

rohan=new Programmer("Rohan",2,0,'javascript');
console.log(rohan);