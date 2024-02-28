const body=document.body
let btn=document.querySelector(`#new-quote`)
let quote=document.querySelector(`.quote`)
let person=document.querySelector(`.person`)

const quotes=[{
    quote:`"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. 
    And the world will live as one."`,
   person:"John Lennon"
},{
    quote:`"The best way to find yourself is to lose yourself
    in the service of others."`,
    person:"Albert Einstein"

},{
    quote:`"The greatest glory in living lies not
     in never falling, but in rising every time we fall."`,
     person:"Nelson Mandela"
},{
    quote:`"The way to get started is 
    to quit talking and begin doing."`,
    person:"Walt Disney"
},{
    quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma &ndash; which is living with 
    the results of other people's thinking."`,
    person:"Steve Jobs"
},{
    quote:`"The future belongs to those who believe in the beauty of 
    their dreams."`,
    person:"Eleanor Roosevelt"
},{
    quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone 
    else's success." `,
    person:"James Cameron"
},
];


btn.addEventListener(`click`, function(){

    let random= Math.floor(Math.random() * quotes.length)

    quote.innterText=quotes[random].quote;
    person.innterText=quotes[random].person;
})
