/*Write a conditional statement to state if hero is a dc character or marvel character.
 (i.e superman would be dc, spiderman would be marvel).*/
 let marvel="Superman"
 if (marvel==="Superman"){
    console.log("Superman is a marvel character")
 }else if (marvel==="Spiderman"){
    console.log("Spiderman is a dc character")
 } else {
    console.log("Error")
 }

 /*write a conditional statement taking age as variable and what year group they will be in a school 
 (i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education).*/
 let age=20
 if (age===11 || age===12 || age===13 || age===14 || age===15 ){
    console.log("You are welcome in our secondary school")
 }else if (age===16 || age===17 || age===18){
    console.log("You are welcome in our college")
 }else {
    console.log("Go to uni or get a JOB")
 }
 /*Create a shopping list of 5 items. 
 Now make a conditional statement that checks if the list contains 5 items only. 
 if above 5 print out error and if less than 5 print out error.
  ( would suggest searching greater than and less than operators)*/
  let array=["apple","orange","grapes","milk"]
  if (array.length==5){
    console.log("You have checked out")
    
  }else{
    console.log("error")
  }
    
  