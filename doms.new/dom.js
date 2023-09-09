const body=document.body;
const head=document.head;
console.log("Welcome to DOMS")
var heading=document.getElementById("heading")
const title=document.createElement("title")
const test=document.createElement("h2")




heading.innerText="I'm working"
title.innerHTML="DOM lessson 1"
test.innerHTML="Testing"
head.append(title)
body.append(test)

//Excercise
// 1. create an element p add anything inside it 
const para=document.createElement("p")
para.innerHTML="In this line of work you have to take accountabilty to your mistake and find that mistake"
body.append(para)
//2.make some style change to the first h1
const style=document.querySelector("h1")
style.style.color="red"
//3.Create a container and make style changes to it.
const cont =document.createElement("div")
cont.style.width="200px"
cont.style.height="200px"
cont.style.border="1px"
cont.style.borderColor="blue"
cont.style.backgroundColor="red"
cont.style.borderBlock="solid"

body.append(cont)
//4. make text changes on h1 
const h1=document.querySelector("h1")
h1.innerText="We made a couple changes in the website"