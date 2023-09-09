const body=document.body;
const head=document.head;
body.style.backgroundColor="coral"

const heading1=document.getElementById("title")
heading1.innerText="Homework 1 is all about Document Object Manupulation (DOM)"

let updateName=document.getElementById("dom")
updateName.innerText="My name is Omar"

const dateHolder=document.querySelector("h3")
const  date= new Date()
console.log(date.getMonth()+1)

dateHolder.innerText= `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
const h4=document.createElement("h4")
h4.innerText="Coding languages that I'm currently learning"

const orderedList=document.createElement("ol")
const listItem1=document.createElement("li")
const listItem2=document.createElement("li")
const listItem3=document.createElement("li")

body.append(orderedList)
orderedList.append(h4)
listItem1.innerText="Html"
orderedList.append(listItem1)
listItem2.innerText="CSS"
orderedList.append(listItem2)
listItem3.innerText="JavaScript"
orderedList.append(listItem3)

const btn=document.createElement("button")
btn.innerText="Click me"

body.append(btn)

//Event listener

body.addEventListener("click",function(){
    alert("Welcome to the website")
    console.log("Welcome to the website")
})

//to have an alert anywhere
function response (){
    btn.innerText="button has been pressed"
    body.style.backgroundColor="pink"
    body.style.color="white"
}
body.addEventListener("click",response)


//communication with the user

var response=prompt("How are you doing today")
console.log(response)