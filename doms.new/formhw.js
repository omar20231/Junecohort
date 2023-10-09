const body=document.body
const inputName=document.getElementById("Name")
const inputLast=document.getElementById("Lname")
const emailAdd=document.getElementById("email")
const form=document.querySelector("form")

function checkName (param){
   let res=false
    if(param.value.length>=2 && param.value.length<=20){
        res=stringRegex(param.value)
        success(param)

    }else {
        error(param,"does not meet the requirement")
    }
    return res
}
function error(param, message){
    const outputMessage=document.querySelector("small")
    outputMessage.textContent=message
    param.style.borderColor="red"
    outputMessage.style.color="red"
}
function success(param){
    param.style.borderColor="green"
}
function stringRegex(param){
    const pattern=/^[a-zA-Z]+$/;
    return pattern.test(param)
}

function checkEmail(param){
    let res = false 
    if (param.value.length>0){
        res=emailRegex(param.value)
        success(param)
    }
    return res
}
function emailRegex(param){
    const pattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(param)
}


form.addEventListener("submit",function(e){
    e.preventDefault()
    var firstNameOutcome=checkName(inputName)
    var lastNameOutcome=checkName(inputLast)
    var emailOutcome=checkEmail(emailAdd)
    if(firstNameOutcome && lastNameOutcome && emailOutcome){
        alert("Form passes")
    }else {
        alert("Form fails")
    }
})