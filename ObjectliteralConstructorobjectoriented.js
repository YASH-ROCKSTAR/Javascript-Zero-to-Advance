console.log("we are learning about object literal constructor and object oriented");

//object literal for creating objects
let car={
    name:'Maruti 800',
    topSpeed:89,
    run:function(){
        console.log("car is running")
    }
}
//we have already seen constructor like these
//new Date();

//creating a constructor for car
function General(GiveName,topSpeed) {
    this.name=GiveName;
    this.topSpeed=topSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower by ${200-this.topSpeed} km/hr than Mercedes`);
    }
}
car1 =new General('Nissan',180);
car2 =new General('Alto',150);
car3 =new General('Mercedes',200);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car);
