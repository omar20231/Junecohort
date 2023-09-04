const body=document.body;
const head=document.head;
body.style.backgroundColor="pink";

var title=document.getElementById("title")
title.innerText="Homework is all about DOMS"

let updateName=document.getElementById("dom")
updateName.innerText="My name is Omar"

/*body.addEventListener("click" ,function(){
    alert("Welcome to the websie")
    console.log("Welcome to the website")
})*/
const btn=document.querySelector("button")
function response(){
    console.log("welcome to the website")
}
body.addEventListener("click",response)

/*function response(){
    btn.innerText="Body has changed"
    body.style.backgroundColor="blue"
    body.style.color="white"
}*/
//body.addEventListener("click",response)

/*var response=prompt("How are you doing today?")
console.log(response)*/


//body.append(btn)


var array=["pink","red","orange","coral","green"]

for(i=0;i<array.length;i++){
    if ([i]==="pink"){
        function response (){
            btn.innerText="Pink mode"
            body.style.backgroundColor="pink"
            body.style.color="white"
            

        }
        body.addEventListener("click",response)
    } else if ([i]==="red"){
        function red (){
            btn.innerText="red mode"
            body.style.backgroundColor="red"
            body.sttyle.color="white"
        }
        body.addEventListener("click",red)

    }else if ([i]==="orange"){
        function orange (){
            btn.innerText="orange mode"
            body.backgroundColor="orange"
            body.style.color="white"
        }
        body.addEventListener("click",orange)
    }else if ([i]==="coral"){
        function coral (){
            btn.innerText="coral mode"
            body.style.backgroundColor="coral"
            body.style.color="white"
        }
        body.addEventListener("click",coral)
    } else if ([i]==="green"){
        function green (){
            btn.innerText="green mode"
            body.style.backgroundColor="green"
            body.style.color="white"
        }
        body.addEventListener("click",green)
    }else {
        console.log("Error!!")
    }
}