// Promises:
// resolve
// reject
//while watching video its pending
// -pending
function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log('Function: Your promises has been resolved')
                resolve();
            }
            else{
                console.log('Function: Your promise has not been resolved');
                reject('sorry not fulfilled')
            }
        },2000)
    })
}
//we use then as a callback subsitute
func1().then(function(){
    console.log('Yash: Thanks for resolving');
}).catch(function(error){
    console.log('very bad bro '+error);
})