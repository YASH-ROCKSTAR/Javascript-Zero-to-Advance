console.log('we are learning Arrow function');

let myBtn=document.getElementById('myBtn');

let content=document.getElementById('content');

// function getData(){
//     console.log("Started getdata");
//     url="harry.txt"
//     //ye background mein running ho gyi
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.group("Inside first then")
//         console.log(data)
//     })
// }
function getData(){
    console.log("Started getdata");
    url="https://api.github.com/users"
    //ye background mein running ho gyi
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.group("Inside first then")
        console.log(data)
    })
}
function postData(){
    // console.log("Started getdata");
    //string ko strinfy ki karni ki jaruruat nhi hai object kpo
    data='{"name":"yash442","salary":"123","age":"23"}';
    url="http://dummy.restapiexample.com/api/v1/create"
    params={
        method:'post',
        headers:{
            'content-Type':'application/json'
        },
        body: data
    }
    //ye background mein running ho gyi
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(data)
    )
}
// console.log("before running get data")
// getData();
// console.log("after running getdata");
postData();