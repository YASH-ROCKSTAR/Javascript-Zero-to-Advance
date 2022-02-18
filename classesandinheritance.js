console.log("we are learning class and inheritance in javascript")

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision
    }
    slogan(){
        return `I am ${this.name} and my company is the best`
    }
    joinyear(){
        return 2019- this.experience
    }
    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        //super matlab pivhli class ka constructor
        super(givenName,givenExperience,givenDivision,);
        this.language=language;
        this.github=github;
    }
    favouriteLanguage(){
        if(this.language=='python'){
            return 'python';
        }else{
            return 'javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

// harry=new Employee('Harry',56,'Divison');
// console.log(harry.joinyear());

console.log(Employee.add(34,5));

rohan=new Programmer('Rohan',3,'Lays','Go','rohan420');
console.log(rohan);
console.log(rohan.favouriteLanguage());
