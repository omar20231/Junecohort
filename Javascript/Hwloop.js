/*Using a loop, print numbers from 1 to 100 but here’s the catch, 
multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”. 
Lastly print “FizzBuzz” for multiples of three and five.*/

/*for (let i=0; i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }else if (i%3===0){
        console.log("Fizz")
    }else if (i%5===0){
        console.log("buzz")
    }else{
        console.log(i)
    }
}*/





for(i=0;i<=10;i++){
    if(i===7){
        console.log("Found")
    }else {
        console.log(i)
    }
}

for(i=0;i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }else if (i%3===0){
        console.log("Fizz")
    }else if (i&5===0){
        console.log("Buzz")
    }else {
        console.log(i)
    }
}
/* phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent.*/

//read question
var phrase="turpentine and turtules"
var equivalent=""
for (let i=0;i<phrase.length;i++){
    if (phrase[i].toLocaleLowerCase()==="a"||phrase[i].toLocaleLowerCase()==="e"||phrase[i].toLocaleLowerCase()==="i"||phrase[i].toLocaleLowerCase()==="o"||phrase[i].toLocaleLowerCase()==="u"){
        equivalent=equivalent.concat(phrase[i])
    }
    if (phrase[i].toLocaleLowerCase()==="u"|| phrase[i].toLocaleLowerCase()==="e"){
        equivalent=equivalent.concat(phrase[i])
    }
}
console.log(equivalent.toUpperCase())
console.log(`phrase is equal to ${phrase}`)
console.log(`word equilivant is equal to ${equivalent.toUpperCase()}`)


var list=["Milk" ,"Chocolate","Book","Pen","Bread","French toast"]

for (let i=0;i<list.length;i++){
    if (list[i]==="Milk"|| list[i]==="Chocolate"|| list[i]==="Bread"|| list[i]==="French toast"){
        console.log("Food related")
    }else if (list[i]==="Pen"|| list[i]==="Book"){
        console.log("Education")
    } else {
        errorText()
    }
}


function errorText(){
    console.log("Your Item was not added to the database")
}
