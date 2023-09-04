//find the largest number  in this list [1,2,3,45,90,125,2001,1001]

/*var array=[1,2,3,45,90,125,2001,1001,30000]

function findLargestValue(array){
    var list=[0]
    for (let i=0;i<array.length;i++){
        if (list[0]<array[i]){
            console.log(list)
            console.log(list[0]>array[i])
            list.shift()
            list.push(array[i])
    
        }
    }
    console.log(list)
}
 findLargestValue(array)
*/

 //this challenge consist of a long word and you should take off repeated words

 var word1="thequickbrownfoxjumsoverthelazydog"
 var word2=[]

 function repeatedCharacters(word){
    word=word1.split(``)
    for (let i=0; i<word.length;i++){
        if (!word2.includes(word[i])){
            word2.push(word[i])
        }
        }
        
        console.log(word2.join(``))
 }

 
 repeatedCharacters(word1)

 var word3="thisissomethingcontainsnothing"
 var word4=[]

 function characterSquared(word){
    word=word3.split(``)
    for (let i=0;i<word.length;i++){
        if (word4.includes(word[i])){
            console.log("nothing")
        }else {
            word4.push(word[i])
        }
    }
    console.log(word4.join(``))
 }
 characterSquared(word4)