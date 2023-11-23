//Go over Array notes in notes folder 

//Q1.From you understanding of array create an array with 15 items inside
var array=["Laptop","books","Pen","Food","Coffee","Kettle","Bed","gym","Home","Pan","dishes","Table","work",
"football","netball"]
/*Q2.From the array just created in the above question remove the last item in the array.
 You cannot alter the original array.*/
 array.pop()
 array.pop()
 //Q3.Add an item to the end of the list. Cannot alter the original array
 array.push("Tennis")
/*Q4Find the position of the first item, middle item and last item 
of the list and print them off separately.*/
console.log(array[0])
console.log(array[5])
console.log(array[13])
//Q5 Modify 3 items in the array and print them of



//Q6 Using string interpolation combine 5 different variables together
var name ="omar"
let age=23
const dob=2000
let hoobies="games"
let location="Birmingham"
console.log(`My name is${name} and I'm ${age} years old and was born in the ${dob}'s. I like to play ${hoobies} in my 
spare time and I live in ${location}`)
//Q7 remove the first item from the array
array.shift()
console.log(array)
//Q8 add an item to the first position of the array
array.unshift("Computer")
console.log(array)