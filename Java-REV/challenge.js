var name="Omar"
var dob="2000"
console.log("My name is "+ name + " and i was born in the " + dob +"'s")

var string="testing "
var number=24
console.log(string + number)
 
var name ="Mohamed"
console.log(name)
console.log(typeof name)
console.log(typeof number)

var superhero="Spiderman".toLocaleLowerCase()
if (superhero==="spiderman"|| superhero==="batman"|| superhero==="antman"){
    console.log("DC character")
}else if (superhero==="spiderman"|| superhero==="hulk"|| superhero==="captin america"){
    console.log("Marvel character")
}else{
    console.log("hero may not exist or wasn't accounted for")
}

/*1. **Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
this will be entire up to you as to what the conditional statement is on.**/

var tester="Working".toLocaleLowerCase()

if (tester==="working"){
    console.log("No universal credit")
}else if (tester==="not working"){
    console.log("Can get universal credit")
}else {
    console.log("can be negotiated")
}
//Write a conditional statement that prints whether the phone being used is an Iphone or an android

var device="sent from Iphone"

if(device === "sent from Iphone"){
    console.log("You are using an Iphone")
}else {
    console.log("you either using andriod or an unkown device")
}

/*Write a switch case that checks if the operation is a math operation (+,-,*,/) 
if the options is any of the options given it should give me the result of 2 
variables created above the switch case. For example. math operation is *
 and the variables are 250 & 10 then the answer should log 2500*/

 var num1=5
 var num2=10
 var operation="-"
 
 switch(operation){
    case "+":
    console.log(num1+num2)
    break;
    case "-":
        console.log(num1-num2)
        break;
    case "%":
    console.log(num1%num2)
    break;
    default:
        console.log("no more equation")
 }

 let score=90

 switch(true){
    case (score>=90 && score<=100):
        console.log("A*")
        break;
    case (score>=80 && score <90):
        console.log("A")
        break;
    case (score>=70&& score<80):
        console.log("B")
        break;
    case (score>=60 && score< 70):
        console.log("C")
        break;
        case(score<60):
        console.log("Failed")
        break;
    default:
        console.log("not possible")

 }