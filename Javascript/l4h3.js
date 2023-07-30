//this is called L4H3 because is Lesson 4 with a redo of h3 #
/*write a conditional statement taking age as variable and what year group they will be in a school 
(i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). 
(if this does not make sense please watch the summary video or the youtube video pasted above)*/
let age=2
if (typeof age != "number"){
    console.log("error")
}else if (age>=3 && age<11 ){
    console.log("Primary")
}else if (age>=11 && age<16){
    console.log("Secondary")
}else if (age >=16 && age <18){
    console.log("College")
}else if (age>=18 && age <90){
    console.log("Optional school")
}else {
    console.log("error2")
}
/*Create a shopping list of 5 items. Now make a conditional statement that checks 
if the list contains 5 items only. if above 5 print out error and if less than 5 print out error.
 ( would suggest searching greater than and less than operators)*/
 let array=["Apple","Chocolate","Vimto","Burger","Milkshake"]
 if (array.length===5){
    console.log("You may checkout")
 }else {
    console.log("Error")
 }
 //challenge

 let day="TUESDAY".toLowerCase()
 if (day==="monday" || day==="tuesday" || day==="wednesday" || day==="thursday" || day==="friday"){
    console.log(`${day} is a weekday`)
 }else if (day==="saturday" || day==="sunday"){
    console.log(`${day} is a weekend`)

 }else{
    console.log("You don't exist")
 }