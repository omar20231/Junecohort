const body=document.body
const head=document.head

const title=document.createElement("title")
title.innerText="DOMS"
head.append(title)
const heading= document.createElement("h1")
heading.innerText="We are winning"
body.append(heading)
const paragragh=document.createElement("p")
paragragh.innerText="You can do this, we need this type of energy everyday. LETS GOOO"
body.append(paragragh)
paragragh.addEventListener(`mouseout`,function (){
    body.style.backgroundColor="red"
})

const orderedList=document.createElement("ol")
/*const item1=document.createElement("li")
item1.innerText=("Bread")
const item2=document.createElement("li")
item2.innerText=("Cheese")
const item3=document.createElement("li")
item3.innerText=("Milk")*/

/*orderedList.append(item1)
orderedList.append(item2)
orderedList.append(item3)
body.append(orderedList)
console.log(orderedList)*/

alert("We are working")
var name=prompt("What is your name g")
if (name.length>0){
    const h1=document.querySelector("h1")
    h1.innerText=name
}


var array =["Bread","Cheese","Milk"]
for (let i=0;i<array.length;i++){
    orderedList.append(array[i])
}
function changeTheme(){
    body.style.backgroundColor="orange"
    body.style.color="green"
}

heading.addEventListener(`click`,changeTheme)