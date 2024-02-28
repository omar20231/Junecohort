const body=document.body
const ul= document.querySelector(`ul`)
const li =document.createElement(`li`)
li.innerText=`Pencil`
ul.append(li)


li.setAttribute(`id`,`write`)
console.log(li.getAttribute(`id`))

const html=document.html
console.log(html)

//parent node 
//console.log(l.parentNode)
//console.log(li.parentElement)

//child node
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)
ul.childNodes[1].innerText=`Cup`

//console.log(ul.children)
//console.log(ul.firstElementChild)
//console.log(ul.lastElementChild)
