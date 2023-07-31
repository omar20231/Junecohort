/*const age =21
var occoupation="disabled"
if (age>=21 && occoupation==="student"){
    console.log("no stabe income, you font quilify")
}else if (age>=21 && occoupation==="disabled" ){
    console.log("you have a discount")
}else if (age>=21){
    console.log("you can qualify")
}else {
    console.log("too young")
}*/

//nested version
const score =500
 if (typeof score ==="number"){
    if (score>=90 && score <=100){
        console.log("A*")
    }else if (score>=80 && score <90){
        console.log("A")
    }else if (score>=70 && score <80){
        console.log("B")
    }else if (score>=60 && score <70){
        console.log("C")
    }else if (score < 60){
        console.log("FAILL!!!")
    }else {
        console.log("dont exist")
    }
}else {
    console.log("error")
}

/* .includes(). this is a method were it allows you to check for items inside an array. It works with 
Boolen, if it's true it will print, if not you will recieve no output*/

let array=[1,2,3,4,5,6,]
if (array.includes(4)){
    console.log("Array do contain this")
}


/*Switch- this is a differnet type of connditional statement, this will help you if you already have 
multiple conditional statements*/
/*var day ="MONDAY" 
switch (day.toLowerCase()){
    case"monday":
    console.log(`Today is ${day}`)
    break;
    case"tuesday":
    console.log(`Today is ${day}`)
    break;
    case"wednesday":
    console.log(`Today is ${day}`)
    break;
    case"thursday":
    console.log(`Today is ${day}`)
    break;
    case"friday":
    consonle.log(`Today is ${day}`)
    break;
    case"saturday":
    console.log(`Today is ${day}`)
    break;
    case"sunday":
    console.log(`Today is ${day}`)
    break;
default:
    console.log("not possible")
}*/

const score2 ="I got it"
if (typeof score2 === "number"){
    switch(true){
        case(score2>=90 && score2 <=100):
        console.log("A*")
        break;
        case(score2>=80 && score2 <90):
        console.log("A")
        break;
        case(score2>=70 && score2<80):
        console.log("B")
        break;
        case(score2>=60 && score2<70):
         console.log("C")
        break;
        case (score2<60):
            console.log("yo have failed")
        break;
     default:
        console.log("not posible")
        
    
 

    }
}else {
    console.log("not a score")
}
