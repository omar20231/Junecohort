/*Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
this will be entire up to you as to what the conditional statement is on. */
 
var name="James".toLowerCase()
if (typeof name !="string"){
    console.log("Wrong input")
}else if(name==="john"){
    console.log("You may enter")
}else if (name ==="james"){
    console.log("Enter, you are only permitted 2 hours")
}else {
    console.log("Name unrecognised, no entry")
}

//Write a conditional statement that prints whether the phone being used is an Iphone or an android

var phone="LG"
if (phone==="apple"){
    console.log("You are using an Iphone")
}else if (phone==="robot"){
    console.log("You are using an android")
}else {
    console.log("you may be using another company")
}

/*Write a switch case that checks if the operation is a math operation (+,-,*,/) if the options is any of the options given it should give me the result of 2 variables created above the switch case. For example. 
math operation is * and the variables are 250 & 10 then the answer should log 2500*/

int1=250
int2=10
let math="+"
if (typeof math ==="string"){
switch(math){
    case"+":
    console.log(int1+int2)
    break;
    case"-":
    console.log(int1-int2)
    break;
    case"*":
    console.log(int1*int2)
    break;
    default:
        console.log("Equation not included")

}
}else {
    console.log("error")
}
   
