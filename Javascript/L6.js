//crate a loop checks if number are odd or even (stating point 0 to 100)

for  (let i=0;i <=10; i++) {
    if(i %2==0){
        console.log("Even")
    } else {
        console.log("Odd")
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
/*Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters.
 If it is not a vowel it is not stored in the word equivalent.*/
 var word="turpentine and turtules"
 var list=[]
 
 for (let i=0;i<word.length;i++){
    if (word[i]===u || word[i]===e){
        array.push(word[i])
        array.push(word[i])
    }else if (word[i]===a || word[i]===i){
        array.push(word[i])
    }
    

    
 }