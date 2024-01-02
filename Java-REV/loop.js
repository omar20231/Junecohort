/*Using a loop, print numbers from 1 to 100 but here’s the catch,
 multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”.
 Lastly print “FizzBuzz” for multiples of three and five.*/
 
 /*var array= ["millk","tea","coffee","sugar","bread"]

 for (let i=0;i<array.length; i++){
    if (array[i]==="bread"){
        console.log("cup")
    }else {
        console.log(array[i])
    }
 }


for (let i=0; i<100; i++){
    if(i%3 ===0 && i%5===0){
        console.log("fizzbuzz")
    }else if(i%3 ===0){
        console.log("fizz")
    }else if( i%5 ===0){
        console.log("buzz")
    }else  {
        console.log(i)
    }
}*/
/*Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent. below is a screenshot of how it should look*/

var phrase="turpentine and turtles"
var word= ""

for (let i=0; i<phrase.length; i++){
    if (phrase[i].toLowerCase() ==="a"||phrase[i].toLowerCase() === "e"||phrase[i].toLowerCase() === "i"||
    phrase[i].toLowerCase() === "o"||phrase[i].toLowerCase() === "u"){
            word=word.concat(phrase[i])
        if (phrase[i].toLowerCase() === "u"||phrase[i].toLowerCase() === "e"){
            word=word.concat(phrase[i])
        }
    }
}
console.log(word.toUpperCase())

//teacher way 

let word2="turpentine and turtles"
let array=[ ]
for (let b=0; b<word2.length; b++){
    if (word2[b]==="u" || word2[b] ==="e"){
        array.push(word2[b])
        array.push(word2[b])
    }else if (word2[b]==="a"||word2[b]==="o"||word2[b]==="i"){
        array.push(word2[b])
    }
}
let word3="UUEEIEEAUUEE"
console.log (array.join('').toUpperCase()=== word3)

console.log(`the phrase is ${word2}`)
console.log(`and we truned it into ${word3}`)

