/*Write a conditional statement to state if hero is a dc character or marvel character. 
(i.e superman would be dc, spiderman would be marvel).*/
 let hero="omars"

 if (hero==="spiderman"||hero==="batman"||hero==="hulk"){
    console.log("You are a dc character")
 }else if (hero==="catlady"||hero==="spiderwomen"|| hero==="thor"){
    console.log("You are a marvel character")
 }else {
    console.log("VILAN ALERT")
 }
 /*write a conditional statement taking age as variable and what year group they will be in a school 
 (i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). 
 (if this does not make sense please watch the summary video or the youtube video pasted above)*/
 let age =4
 if (typeof age==="string"){
    console.log("error")
 }else if (age>=11 && age<16){
    console.log("Secondary school")
 }else if (age>=16 && age<=18){
    console.log("College")
 }else if (age<11 && age>3){
    console.log("Primary")
 }else if (age>18 && age<50){
    console.log("Optional education")
 }else {
    console.log("error 2 ")
 }
 

 /*Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error. 
 ( would suggest searching greater than and less than operators)*/
 var array=["Soap","Bread","Milk","Coffee","Crips"]

 if (array.length===5){
    console.log("conditions have been met")
 }else {
    console.log("error")
 }
 let day="MONDAY".toLowerCase()

 if (day === "monday"||day === "tuesday"||day === "wednesday"||day === "thursday"||day === "friday"){
    console.log(`${day} is a weekday`)
 }else if (day==="saturday"||day==="sunday"){
    console.log(`${day} is a weekend`)
 }else {
    console.log("not possible")
 }

 /* create a condition state ment for grading paper score 90 and above A*
 score above 80 is A 
 score above 70 is B 
 score above 60 is C 
 and anything below is a fail*/
 var score =55

 if (typeof score!="number"){
   console.log("no good")
 }else if (score>=90 &&  score<=100){
   console.log("You have A*")
 }else if (score>=80 && score <90){
   console.log("You have an A")
 }else if (score>=70 && score <80){
   console.log("Yo have a B")
 }else if (score>=60 && score<70){
   console.log("You have a C")
 }else {
   console.log ("You have failed unfortunalty")
 }
 