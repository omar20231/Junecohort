//create a function that converts fahrenheit to kelvin
//equation (ooF -32)*5/9+273.15
function fahrenheit(num){
    return num
}
function fahrenheitToKelvin() {
 var converter=fahrenheit(40)
var Kelvin=(converter -32) *5/9 + 273.15
console.log(Kelvin + " K")
}

fahrenheitToKelvin()

const cell=075622
console.log(cell)

//challenge
let statement="I`ve got the capabilities, we also need the vowels"
var result=""
for (let i=0;i<statement.length;i++){
    if (statement[i].toLocaleLowerCase()==="a"||statement[i].toLocaleLowerCase()==="e"||statement[i].toLocaleLowerCase()==="i"||
        statement[i].toLocaleLowerCase()==="o"||statement[i].toLocaleLowerCase()==="u"){
            result=result.concat(statement[i])
        } 
        if (statement[i].toLocaleLowerCase()==="a"|| statement[i].toLocaleLowerCase()==="u"){
            result=result.concat(statement[i])
        }
}
console.log(result.toUpperCase())
console.log(`Phrase is equal to ${statement}`)
console.log(`The result we looking for is ${result}`.toUpperCase())