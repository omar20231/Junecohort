const body=document.body
const head=document.head
const list=document.querySelector(`ul`)
const btn=document.querySelector(`button`)

btn.addEventListener(`click`,function(){
    const input=document.getElementById(`New car`)
    
    const array=[]
    for (let i=0;i<list.children.length;i++){
        console.log(list.children[i].innerHTML)
        array.push(list.children[i].innerHTML.toLocaleLowerCase())
    }
    console.log(array)
        
    
    if (input.value.length>0){
        if(array.includes(input.value.toLocaleLowerCase())){
            alert(`${input.value} is already in the list`)
        }else {
            const newItem=document.createElement(`li`)
            newItem.innerHTML=input.value
            list.append(newItem)
        }
        
    }
    console.log(list.children)
})
