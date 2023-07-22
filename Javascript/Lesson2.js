let name ="Mohamed"
age=23 
const dob=2000
//Sting interpilation
console.log(`My name is ${name} ,I'm ${age}  years old and born in ${dob}`)

/*Array is considerd an object and is used to list things, Array is anything between [] and can carry
("",,boolen,undefines, null, objects) */

//Q1. Create an array with 15 items, inside 
let array=["bread","milk","French toast","Chocolate","Oil","Chicken","Beans","Ice cream","Eggs","Pens",
"Water","Toothpaste","Toothbrush","Juice","Gum"]
console.log(array.length)
/*From the array just created in the above question remove the last item in the array.
 You cannot alter the original array.*/

 array.pop()
 console.log(array)
//Add an item to the end of the list. Cannot alter the original array
 array.push(name)
 console.log(array)
 /*Find the position of the first item, middle item and last item 
 of the list and print them off separately.*/
 console.log(array[0], array[4],array[14])
 //Modify 3 items in the array and print them off
 array[3]="vegtables"
 array[4]="seasoning"
 array[9]="pencil"
 console.log(array)
 //Using string interpolation combine 5 different variables together
 var greetings="Hello"
 var name2="Ali"
 age2="25"
 var right=true
 const player="Ronaldo"
 console.log(`${greetings}, my name is ${name2}, and I'm ${age2} years old.What im saying right is 100% ${right}
 to my knowlege.My favorite player is ${player}.`)

 //Delete the 2 items in the array
 array.splice(0,2)
 console.log(array)
 //remove the first item from the array
 array.shift()
 console.log(array)
 //add an item to the first position of the array
 array.unshift("Table")
 console.log(array)