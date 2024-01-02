//write a function that console logs “hello world”
function greetings(){
    console.log("Hello world")
}

greetings()

/*write a function that combines multiple arrays together as 1 big array 
(you can use the .concat method for this )*/
function arrays(){
    var array1=[1,2,3,4,5]
    var array2=[6,7,8,9,10]
    var array3=array1.concat(array2)
    console.log(array3)
}
arrays()

//write a function that check if the number is an odd or even number
function secure(){
    let num=9
    if (num%2===0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
secure()

//write a function that checks for a string and a function that checks for a number

function checkString(word){
    if (typeof word ==="string"){
        console.log("String")
    }else {
        console.log("Use checkNumber function")
    }
}
function checkNumber(number){
    if (typeof number ==="number"){
        console.log("number")
    }else{
        console.log("not a number , use checString function")
    }

}

checkNumber("Generade")

/*write a function that reverses the order of an array e.g 54326 = 62345
 ( this uses several different methods to obtain search them and try figure out the answer.
     First you need to use split method to make the string into an array then reverse method 
     to reverse the order of the array
 followed by join to join the array into 1 string resources found above)*/
 
 
 function reverse(){
    var number=54674
    var split=number.split(``)
    var splitreverse= split.reverse()
    var joined= splitreverse.join(``)
    console.log(joined)
 }
 reverse()