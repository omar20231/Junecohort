const car= {
    name:"Bmw",
    colour:"Black",
    make:2015,
    type:["1 series","m sport"]

}
console.log(car)
car.owner="Join"
console.log(car)
car.colour="Silver"
console.log(car)
delete car.type[0]
console.log(car)

const person={
    firstName:"John",
    lastName:"Smith",
    age:25,
    fullName:function(){
        return person.firstName+" "+ person.lastName +" "+ person.age
    }
}
console.log(person.fullName())

//creating a constructor

function Person (name,lastName,age,gender){
this.fistName=name
this.lastName=lastName
this.age=age
this.fullName=function(){
    return this.fistName+" "+this.lastName+" "+this.age+" "+this.gender
}
if (gender){
    this.gender =gender
}else {
    this.gender ="Male"
}
}

const John=new Person("John","Smith",45,);
const Bailey=new Person("Bailey","Dave",25);
const Jane=new Person("Jane","Dave",30,"female")
console.log(John.fullName())
console.log(Jane.fullName())


const book={
    Author:"Jane",
    Title: "My little pony",
    read:function(){
        return "The author name is " +this.Author+ " " +"the title is "+this.Title
        
    }
    
 }
console.log(book.read())
