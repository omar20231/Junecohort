/*Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
this will be entire up to you as to what the conditional statement is on.*/

var condition="Night".toLowerCase()

if (typeof condition==="string"){
    if (condition==="morning"){
        console.log(`Good ${condition}`)
    }else if (condition==="afternoon"){
        console.log(`Good ${condition}`)

    }else if(condition==="night"){
        console.log(`Good${condition}`)
    }else{
        console.log("Diifeent planet")
    }

}else{
    console.log("No entry")
}
//Write a conditional statement that prints whether the phone being used is an Iphone or an android

let phone="LG"
if(phone==="Samsung"){
    console.log("Android")
}else if (phone==="Iphone"){
    console.log("Apple Crew")
}else{
    console.log("not suggeted")
}


/*Write a switch case that checks if the operation is a math operation (+,-,*,/) 
if the options is any of the options given it should give me the result of 2
variables created above the switch case. 
For example. math operation is * and the variables are 250 & 10 then the answer should log 2500*/
var num1=250
var num2 =10
var operation="-"

switch(operation){
    case "*":
    console.log(num1 * num2)
     break;
     case "+":
        console.log(num1 + num2)
        break;
      case "-" :
        console.log(num1 - num2) 
        break;
      case "/":
        console.log(num1 / num2)  
        break;

    default:
        console.log("no more") 
        break;

}

let day="chocolateday"

switch(day){
    case "monday":
        console.log(`today is ${day}`)
        break;
    case "tuesday":
        console.log(`today is ${day}`)  
        break;
    case "wednesday":
        console.log(`today is ${day}`) 
        break;
    case "thursday":
        console.log(`today is ${day}`)  
        break;
    case "friday":
        console.log(`today is ${day}`)  
        break;
    case "saturday":
        console.log(`today is ${day}`)  
        break;
    case "sunday":
        console.log(`today is ${day}`)  
        break;
    default:
        console.log("Impossiple")       
        break;     

}