function functions(age ){
    console.log(age)
    
}

functions(24)

function examGrade(score){
    if (typeof score==="number"){
 switch(true){
    case (score>=90 && score <=100):
        console.log("A*")
       break;
     case (score>=80 && score <90):
        console.log("A")
        break;
    case (score>=70 && score<80):
        console.log("B")
        break;
     case (score>=60 && score<70):
            console.log("C")
        break;
     case(score<60):
        console.log("You have failed")
       break; 
      default:
        console.log("Not possibe")
        break;
 }

    }else {
        errorMessage()
    }

}
function errorMessage(){
    console.log("Error")
}
examGrade(23)


function multiply(num1 ,num2){
    return num1*num2
}

function addition(num){
    var answer=multiply(5,10)
    console.log(answer+num)

}

addition(multiply(25,10))

//create 2 functions, one celcius with an otput of c and one converter that converts c into farenhieht

//equation (0c*9/5)+32=32of

/*function celcius(num){
    return num
}
function celciusToFarenheight(){
var converter=celcius(35)
var farenheight=(converter *9/5)+32
console.log(farenheight)
}
celciusToFarenheight()*/

//(32°F − 32) × 5/9 + 273.15 = 273.15K

function farenheight(num){
    return num
}

function farenheightToKalvin(){
    var converter=farenheight(32)
    var Kalvin=(converter-32)* 5/9 + 273.15
    console.log(Kalvin + " K")

}
farenheightToKalvin()