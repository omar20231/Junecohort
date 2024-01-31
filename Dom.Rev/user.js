const body=document.body
const head=document.head

const title=document.createElement(`title`)
title.innerText="Practical"
const form=document.querySelector(`form`)
form.addEventListener(`submit`,function(e){
    e.preventDefault()

    const name=document.getElementById(`name`)
    const imgURL=document.getElementById(`img`)

    const H1E1=document.createElement("h1")
    const imgEL=document.createElement(`img`)
    H1E1.innerText=name.value
    imgEL.src=imgURL.value
    //body.append(H11EL)
    //body.append(imgEL)
    var div=document.querySelector(`div`)
    div.classList.remove(`dontDisplay`)
    body.classList.add(`bright`)

    div.append(imgEL)
    div.append(H1E1)
    
})



const header=document.createElement("h1")
header.innerText="Click me for a change"
header.addEventListener(`click`,function(){
var anwser=prompt("palidomrore word")
var reversed=anwser.split(` `).reverse().join(``)
console.log(reversed)
console.log(anwser)
if (reversed===anwser){
    console.log("This is a palindromee")
}else{
    console.log("Not a palindrome")
}
})
    

body.append(header)
head.append(title)
const btn=document.getElementById(`darkmode`)
btn.addEventListener(`click`,function(){
    body.classList.toggle(`darkmode`)
})

