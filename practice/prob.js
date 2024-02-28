const body=document.body


window.addEventListener(`click`,function(){
    console.log(`Window is clicked`)
},true)

document.addEventListener(`click`,function(){
    
    console.log(`document clicked`)
},{once:true})

document.querySelector(`button`).addEventListener(`click`,function(e){
    console.log(e.target.innnerText=`Clicked`+" Has been clicked")

})