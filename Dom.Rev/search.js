const head=document.head
const body=document.body
const list=document.querySelector(`ul`)
const btn=document.querySelector(`button`)

btn.addEventListener("click",function(){
    const input=document.getElementById("New car")
    
    const array=[]
for (let i=0;i<list.children.length;i++){
    array.push(list.children[i].innerHTML)
}
console.log(array)
//console.log(input.value)
    /*if(input.Value.length>0){
    console.log(input.value)
    }*/
    //console.log(list.children)
    console.log(list.children)
})
