const body= document.body
const form= document.querySelector(`form`)
const fNameEl= document.getElementById(`Fname`)
const lNameEl = document.getElementById(`Lname`)
const emailEL=document.getElementById(`Email`)

form.addEventListener(`submit`,function(e){
    e.preventDefault()
   var firstName=checkName(fNameEl,fNameEl)
   var lastName=checkName(lNameEl,lNameEl)
   var emailCheck=checkEmail(emailEL,emailEL)
   
   if (firstName===true && lastName===true && emailCheck===true){
    alert("Successful login")
    form.classList.add(`dontDisplay`)
    const h1=document.querySelector(`h1`)
    h1.innerText=`Welcome back ${fNameEl.value} ${lNameEl.value}`
   }
})
function checkEmail(input,element){
    let passes=false
    let condition=false
    if (input.value.length>0){
        console.log("Requirement met")
        condition=true
        successMessage(element)
    }else {
        errorMessage("Requrement not met",element)
    }

    const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const checkString=regex.test(input.value)
    if (checkString===true && condition===true){
        passes=true
    }
    return passes
}
function errorMessage(text,element){
    console.log(`${element}:${text}`)
}

function checkName(input,element){
    let passes=false
    let condition=false
    if (input.value.length>0 && input.value.length<15){
        console.log("Requirement met")
        condition=true
        successMessage(element)
        
    }else {
        errorMessage("Requrement not met",element)
    }

    const regex=/[a-zA-Z]/
    const checkString=regex.test(input.value)
    if (checkString===true && condition===true){
        passes=true
    }
    return passes
}
function errorMessage(text,element){
    element.style.borderColor="red"

    console.log(`${element}:${text}`)
}

function successMessage(element){
    element.style.borderColor="green"
}