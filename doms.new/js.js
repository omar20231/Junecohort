const body=document.body
const emailVar=document.querySelector("input")
const form=document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    if(emailVar.value.length>1){
        console.log(emailVar.value)
    }
})