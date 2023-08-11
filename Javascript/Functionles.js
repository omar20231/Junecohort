//Function is a statement that holds other statements 
function printAge(){
    const age=36
    console.log(age)
}
printAge()
const age=35
console.log(age)
/*^^the variables are the same, this is not an issue due to the code inside function is private 
and the code outside is global */
//Arguments (arguments are inside the bracket)
function myAge(age){
    console.log(age)
}
myAge(25) //this is where u set the age when using arguments

//set 2 arguments
function identity(name,age){
    console.log(name)
    console.log(age)
}
identity("Ahmed",29)

//Functions can hold (strings,loops,objects,array and so on)
function examGrade(score){
    if (typeof score ==="number"){
    switch(true){
        case (score>90 && score<100):
            console.log("A*")
            break;
        case 80:
            console.log ("A")
            break;
        default:
    }

    }else {
        errorMessage()
    }
   

 }
examGrade(96)

//This is called function manuplation, It can be set anywhere and can be called upon anytime.
function errorMessage(){
    console.log("This is an error from fuctions")
}

//Return statement
/*var answer= multiply(2,2)
function multiply(num1,num2){
    return num1 * num2
}
console.log(answer)*/


//diffent execution //this is called return manuplation-making two function collab with one another

function multiply1(num1,num2){
    ans=num1 * num2
return ans
}
function addition(num){
    var answer=multiply1(5,10)
    console.log(answer + num)
}
addition(50)

/*create 2 functions celsius function that output temp in c (celcius) and a conver funvtion that
changes c int farenheit
Equation is (o * 9/5) + 32*/
function celcius(num){
    return num 
}
//console.log(celcius(35))
function celciusToFarinheight(){
    var converter=celcius(35)
    var farinheight=(converter * 3/5) + 32
    console.log(farinheight + " F")
}
celciusToFarinheight()
