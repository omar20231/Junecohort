//Conditional statement
let name ="Hamza"

//Single "=" for setting variables
//Double "==" loose translation, e.g "1"==1 is accepted as long they are same value/letter
//Trible "==="Numbers has to match, strings has to much. Perfect for conditional statement
let array=["Apples","Berry","Oranges"]
if (name==="Hamza"){
    console.log("Success")
    name="Hassan"
    array[0]="Grapes"
}else {
    console.log("Failure")
}
console.log(name)
console.log(array)
//2 types of logic gate 
// And gate (&)
//OR gate (||)

//With this example, both of the condition should be met

let age=25
if (name==="Hassan"&& age===25){
    console.log("You have passed sucurity clearance")

} else {
    console.log("You have failed security clearance")
}
//With this example, only one condition should be met
if (name==="Jake"|| age===25){
    console.log("You may enter")
}else {
    console.log("Access denied")
}
let name2 =1
if (name2 && typeof name2==="number"){
    console.log("Hopefully you had a good journey")
}else {
    console.log("Disaster")
}

//Greater and less than, this goes back to your array lis
//>= greatre or equals to
//<= less than or equals to
console.log(5>3)
if (array.length>=5){
    console.log("array reaches citeria")
}else{
    console.log("Error")
}
//Days for statements 
//You guessed right, there is more than on 2 days in a week.This is where else if omes to play
let day="TUESDAY" 
day.toLocaleLowerCase
 if (day==="Monday"||day==="Tuesday"||day==="Wednesday"||day==="Thursday"||day==="Friday"){
    console.log(`${day} is Weekday`)
 }else if (day=="Saturday"||day==="Sunday"){
    console.log(`${day} is a weekend`)
 }else{
    console.log("Not possible")
 }


    

