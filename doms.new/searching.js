const body=document.body
const list=document.querySelector("ol")
const btn=document.querySelector("button")
const input=document.querySelector("input")
/* Things to do
1.If car not in the list,add it
2.error numbers
3. If car already on the list,don't add.
4.If empty,do nothing
*/
btn.addEventListener("click", function(e){
  let carInList=false
  let isInputValid=stringRegex(input.value)
      if (input.value.length>0 && isInputValid){
        for(let i=0;i<list.children.length;i++){
            console.log(list.children[i].innerHTML)
            
            if (input.value === list.children[i].innerHtml){
                carInList = true
            }
            console.log(carInList)
        } 
        if(carInList){
            alert("Car already in list")
        }else {
            const newInput=document.createElement("li")
            newInput.innerHTML=input.value
            list.append(newInput)
        } 
    } else {
        alert("Input invalid")
    }
    
    
})
function stringRegex(param){
    const pattern= /^[a-zA-Z]+$/;
    return pattern.test(param)
}
