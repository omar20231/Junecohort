function Car (name,model,type,engineSize,color,drive){
this.name=name
this.mode=model
this.type=type
this.engineSize=engineSize
this.color=color
this.drive=drive
this.sales=function(){
    return this.name  +" "+ this.model+ "  Is going for £20,000 only"
}

}

let mercedesCar= new Car("Merc","GLA","Sline",2.0,"Black","4 wheels")

let bmw= new Car("BMW","I3","whoosh",2.0,"White","3 wheels")

console.log(bmw ,bmw.sales())


let num=0
for (let num=0;num>100;i++){
        console.log (num)
        console.log(num.length)
}