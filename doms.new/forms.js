const body=document.body
const nameInput=document.getElementById("name")
const form=document.querySelector("form")

function checkName(){
    var res=false 
    if (nameInput.value.length>=2 && nameInput.value.length<=12){
        res=stringRegex(nameInput.value)
        console.log(res)
    }

    return res 
}
form.addEventListener("submit",function(e){
    e.preventDefault()
    var outcome=checkName()
    
    if (outcome === true){
        alert("pass")
    }else{
        alert("fail")
    }
})


function stringRegex(param){
    const pattern= /^[a-zA-Z]+$/;
    return pattern.test(param)
}




//questions to ask when you do this
/*
1.Name input is empty do not pass.
2.name correct pass/ alert user 
3.name meet length requrirement 
4.check name is its a string
*/