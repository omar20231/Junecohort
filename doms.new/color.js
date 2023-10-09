const body=document.body
const btn=document.querySelector("button")
const newBtn=document.getElementById("add")


//developer use only
var array=["green","blue","purple","pink","yellow","#4287f5"]

function changeColor(e){
    var generator = Math.floor(Math.random()*array.length)
    console.log(array[generator])
    body.style.backgroundColor = array[generator]
}
btn.addEventListener("click",changeColor)


//improvements- this code below gives the user power on what color they want 

//var res=prompt("What color would you like for the background?")
/*
1. If the has no value don't store in the varaiable.
2.If the color already exist,respond back to say it exist.
3.If the color does'nt exist then dont change the background
4.#
*/
//console.log(res>0)
//2
/*This below is bad practice because if the user chooses a color that's already on the list it won't 
be able to pick again.Any color that it chooses would be ignored so we used function*/
/*if (res.length>0){
    if(array.includes(res)){
        alert("Already in the list")
        console.log("Already on the list")
        var res=prompt("What color would you like for the background?")
    }else {
        array.push(res)
    }
}*/
var res=prompt("What color would you like for the background?")
function color (color){
    if (array.includes(color)){
        alert("color already on the list")
        question()
    } else{
        array.push(color)
    }
}
function question (){
    var res=prompt("What color would you like for the background")
    if (res.length>0){
        color(res)
}
}

console.log(array)

newBtn.addEventListener("click",question)
