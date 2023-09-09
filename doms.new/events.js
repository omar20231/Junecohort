const body=document.body;
const head=document.head;
const inputName=document.querySelector("input")
const btn=document.querySelector("button")

/*body.addEventListener("click", function (e){
    body.style.backgroundColor="pink"
})
/*body.addEventListener("click",(e)=>{
    console.log(e)
})

btn.addEventListener("click",function(e){
    console.log("button has been pressed")
    console.log(e)
    if (e.ctrlKey){
        console.log("Ctrl + key has been activated")
    }
})
alert ("Hello")

var response=prompt("Good morning, enjoy your stay")
console.log(response)
h1.innerText=response*/
//the top can be done in one place.

/*body.addEventListener("click", function (e){
//body.style.backgroundColor="pink"
//var response=prompt("How are you doing")
//console.log("response" + response)
})

/*btn.addEventListener("click",function (e) {
    console.log(inputName.value)
    
    if (inputName.value.trim() === ""){
        console.log("Error")
    }else {
        alert(`Hello ${inputName.value}`)
        body.style.backgroundColor="pink"
    }
})*/

//now time to let the user pick its color
//change place holer in input to color
btn.addEventListener("click",function(e){

var array=["brown","pink","red","blue","coral","green"]

if (inputName.value.trim()===""){
    console.log("error")
    inputName.value=" "
} else {
    if (array.includes(inputName.value.trim().toLocaleLowerCase())){
        body.style.backgroundColor=inputName.value.trim().toLocaleLowerCase()
        inputName.value=" "
    } else { 
        inputName.value=" "
    }

}
})