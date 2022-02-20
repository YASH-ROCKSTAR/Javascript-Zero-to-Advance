console.log("we are laerning AJAX")


let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    console.log('you have clicked the fetchbtn')
    //  instantiate an xhr
    const xhr=new XMLHttpRequest();

    //OPEN THE OBJECT
    //get- url de gye aur kya hai
    //post data bhi aur url bhi 

    //true matlab asynchronous
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','https://api.instantwebtools.net/v1/airlines',true);
    xhr.setRequestHeader('Content-type','application/json');

    //what to do on progess
    xhr.onprogress=function(){
        console.log('On progress');
    }
    // xhr.onreadystatechange=function(){
    //     console.log("ready state is ",xhr.readyState)
    // }
    //what to do when resposne is ready
    xhr.onload=function(){
        //200 is response code of http
        if(this.status===200){
            let obj=JSON.parse(this.responseText)
            console.log(obj);
            
            let list=document.getElementById('list');
            str="";
            for (key in obj){
                str +=`<li>${obj[key]}</li>`;
            }
            list.innerHTML=str;
        }else{
            console.log("some error ocuured")
        }
        
    }
    //send the request
    params=`{"name":"test21455","salary":"123","age":"23"}`
    xhr.send(params);
    console.log("we are done");
}

let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log('You have clicked the pop handler');

    const xhr=new XMLHttpRequest();

    //OPEN THE OBJECT
    //get- url de gye aur kya hai
    //post data bhi aur url bhi 

    xhr.open('GET','https://api.instantwebtools.net/v1/airlines',true);
   
    //what to do when resposne is ready
    xhr.onload=function(){
        //200 is response code of http
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
        }else{
            console.log("some error ocuured")
        }
        
    }
    //send the request
    // params=`{"name":"test21455","salary":"123","age":"23"}`
    xhr.send();
    console.log("we are done");
}