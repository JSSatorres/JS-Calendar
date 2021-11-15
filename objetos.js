
const Months= [ 
                {month:	"January",
                day:"31"},
                {month:	"February",
                day:"28"},
                {month:	"March",
                day:"31"},
                {month:	"April",
                day:"30"},
                {month:	"May",
                day:"31"},
                {month:	"June",
                day:"30"},
                {month:	"July",
                day:"31"},
                {month:	"August",
                day:"31"},
                {month:	"September",
                day:"30"},
                {month:	"October",
                day:"31"},
                {month:	"November",
                day:"30"},
                {month:	"December",
                day:"31"},
]


var actDate = new Date
var actDay = actDate.getDay()
console.log(actDay)
var actMonth = actDate.getMonth()
console.log(actMonth)
var actYear = actDate.getFullYear()
console.log(actYear)


var fecha1 = new Date (2019,2,0).getDate;
/*setday() Dice el dia de la semana*/


console.log(fecha1)