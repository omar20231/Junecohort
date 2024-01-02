//functions
//1. write a function that console logs “hello world
function greetings(){
    console.log("Hello world")
}
greetings()
/*write a function that combines multiple arrays together as 1 big array
 (you can use the .concat method for this )*/
 function combines(){
    var array1=[1,2,3,4,5]
    var array2=[6,7,8,9,10]
    array1=array1.concat(array2)
    console.log(array1)
 }
 combines()

 function work (array3,array4){
    array3=array3.concat(array4)
    console.log(array3)
 }
 work([1,2,3,4,5] , [6,7,8,9,10])
 //write a function that check if the number is an odd or even number
 function check(num){
    if (num%2===0){
        console.log("Even number")
    }else{
        console.log("Odd number")

 }
}
 check(5.666)

//write a function that checks for a string and a function that checks for a number
function wordOrNumber(word){
    if(typeof word ==="string"){
        console.log("string ")
    }else if (typeof word==="number"){
        console.log("Number")
    }else {
        console.log("Inconclusive")
    }

}
wordOrNumber("Gang")
//write a function that reverses the order of an array e.g 54326 = 62345
var phrase="78938"
function back(){
var start=phrase.split("")
var reverse=start.reverse()
var join=reverse.join(``)
console.log(join)

}
back()
/*2. write a function to check if a string is a palindrome.
 (palindrome is if the word spells the same opposite, e.g madam is true as its madam backwards,
 sight is false because it is this backwards.*/
 function pain(char){
    var check=char.split("").reverse().join(``)
    if (check===char){
        console.log("Word is palindrome")
    }else if (check !=char){
        console.log("Word is not palindrome")
    }else{
        console.log("Don't know how you got here")
    }

 }
 pain("bye")