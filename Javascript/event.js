const body=document.body;
const head=document.head;


/*body.addEventListener("click", function(e){
    body.style.backgroundColor="pink"
})*/
 /*body.addEventListener("click",(e)=>{
    console.log(e)
})
alert("Hello")
var response=prompt("How are yoy doing today?")
console.log(response)
h1.innerText=response*/

/*body.addEventListener("click",function (e){
    body.style.backgroundColor="pink"
    var response=prompt("How are you doing?")
    console.log("the response" + response)
    h1.innerText=response
})*/

const inputName=document.querySelector("input")
const btn=document.querySelector("button")

btn.addEventListener("click", function(e){
    console.log(inputName.value)
    inputName.value= ""
    
    
})



