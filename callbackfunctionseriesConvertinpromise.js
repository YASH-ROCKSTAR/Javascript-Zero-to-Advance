console.log('We are alerning callback function');

//pretend that this response is coming from the server
const students=[
    {name:"Thapa",subject:"Javascript"},
    {name:"Rohan", subject: "Machine learning"}

]
//callback mean function inside function
function enrollstudent(student,callback){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student Enrolled")
            error=false;
            // callback();
            if(!error){
                resolve();
            }else{
                reject();
            }
            
        },1000)

    })
    
}

function getStudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log("Student fetched");
        
    },5000)
}
let newstudent={name:"Sunny",subject:"Python"};
enrollstudent(newstudent).then(function(){
    getStudent();
}).catch(function(){
    console.log('some error occured')
})
// getStudent();
// function inside then:resolve
// function inside catch:reject
