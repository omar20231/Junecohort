//crate a loop checks if number are odd or even (stating point 0 to 100)
/*for (let i=0; i<100; i++2){
    if (i0){
        console.log("Even")
    }else {
        console.log("odd")
    }

}*/
for  (let i=0;i <=10; i++) {
    if(i %2==0){
        console.log("We good")
    } else {
        console.log("Unordinary")
    }
}
 

//looping through array
var array=["milk","oranges","apples","bread","butter","chesse"]
/* to print out individually you do 
console.log(0)
console.log(1) and so on, but if you have a huge list this would take long,
you can use loop to do this*/
for (let i=0; i<array.length;i++){
    if(array[i]==="butter"){
        console.log("foundddd")
    }else {
        console.log("Not there")
    }
}