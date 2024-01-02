/*Using a loop, print numbers from 1 to 100 but here’s the catch,
 multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”.
 Lastly print “FizzBuzz” for multiples of three and five.*/
 
 for(let i=0; i<=100;i++){
    if (i%3 ===0 && i%5===0){
        console.log("Fizzbuzz")
    }else if (i%3===0){
        console.log("fizz")
    }else if (i%5===0){
        console.log("Buzz")
    }else {
        console.log(i)
    }
 }
 /*Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent. 
below is a screenshot of how it should look*/
 let phrase="UUEEIEEAUUEE"
 let empty;

 for (let i=0; i<phrase.length;i++){
    if (i==="a".toLowerCase()|| i==="e".toLowerCase()||i==="i".toLowerCase()||i==="o".toLowerCase()||i==="u".toLowerCase()){
      var word= empty .concat(phrase)
      console.log(word)
      
    }else if (i==="u".toLowerCase()||i==="e".toLowerCase()){
        var word= empty .concat(phrase)
        console.log(word)
    }
 }

