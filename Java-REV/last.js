//Write a JS code to print numbers from 1 to 10
/*for (let i=1;i<=10;i++){
    console.log(i)
}*/
//Write a JS code to print Even numbers in given array
var array=[1,2,3,4,5,6,7,8,9,10]
/*for(let i=0;i<array.length;i++){
    if (array[i]%2===0){
        console.log(array[i])
    }
}*/
 for (let i=0;i<array.length;i++){
    if (array[i]%2 !=0){
        console.log(array[i])
    }
 }
 //Write a JS code that iterates by 2 up to 100 ( i.e 0,2,4,6,8,10,12)
 for(let i=0; i<=100;i+=2){
    console.log(i)
 }
 /*Take the following phrase and translate it to a different word depending on vowels shown.
phrase “turpentine and turtles” 
word equivalent "UUEEIEEAUUEE”*/

var phrase="turpentine and turtles"
var word=""

for (let i=0; i<phrase.length;i++){
    if (phrase[i].toLowerCase()==="a"||phrase[i].toLowerCase()==="e"||phrase[i].toLowerCase()==="i"
    ||phrase[i].toLowerCase()==="o"||phrase[i].toLowerCase()==="u"){
        word=word.concat(phrase[i])
        if(phrase[i].toLowerCase()==="u"||phrase[i].toLowerCase()==="e"){
            word=word.concat(phrase[i])
        }
    }
}
console.log(word.toUpperCase())