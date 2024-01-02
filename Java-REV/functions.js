
/* when converting you put what you want to convert from in a function alone, and the one that needs equation 
in another like below*/
function farinheigt(num){
    return num
}

function farinheigtToKalvin(){
    var farinheight= farinheigt(32)
    var converter=(farinheight-32)*5/9+273.15
    console.log(converter + "K")
}

farinheigtToKalvin()
//sleep

function sleep (num){
    return num
}

function yourSleep(){
    var quiet= sleep(20)
    if (quiet>=90 && quiet <100){
        console.log("you are sleeping well")
    }else if (quiet>=60&& quiet<90){
        console.log("You are almost there")
    }else if (quiet<60){
        console.log("get more sleep")
    }
}
yourSleep()

var word="Chocolate"
function challenge(){
    var char=word.split(``)
    var reversed=char.reverse()
    var together=reversed.join(``)
    console.log(together)
}
challenge()


var  figure="27777"
function name(){
    var siuu=figure.split(``)
    var collect=siuu.reverse()
    var final=collect.join(``)
    console.log(final)
}
name()


function work(num){
    return num 

}

function convert(){
var check=work(10)
var conver=(check*9/5)+32
console.log(conver+"f")
}
convert()



 
  function challenge(){
    var array1=[1,2,3,4,5]
    var array2=[6,7,8,9,10]
    var empty=array1.concat(array2)
    console.log(empty)
}
challenge()



function check(){
    let figure=7
        if (figure/2===0){
            console.log ("even")
        }else {
            console.log("odd")
        }
    }
check()