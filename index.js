import * as storage from "./storage.js";

var arrayFuture = storage.getFuture();
var arrayPast = storage.getPast();

const mainContainer = document.getElementById("containerDays")
const mainContainerFragment = document.createDocumentFragment()
const previousButton = document.getElementById("previousButton")
const nextButton = document.getElementById("nextButton")
var actDate = new Date
var actualMonth = document.getElementById("actualMonth")
var actualYear = document.getElementById("actualYear")
previousButton.addEventListener("click",previousMonth)
nextButton.addEventListener("click",nextMonth)
var dayDiv;

// Cambia texto header mes+año
function updateMonth(){
    actualMonth.innerHTML = actDate.toLocaleString('en-us', { month: 'long'})
    actualYear.innerHTML = actDate.toLocaleString('en-us', { year: 'numeric' })
}

//funciones para botones anterior y siguiente mes
function previousMonth(){
    actDate.setMonth(actDate.getMonth()-1)
    changeMonth(actDate)
}

function nextMonth(){
    actDate.setMonth(actDate.getMonth()+1)
    changeMonth(actDate)
}


// Pinta el mes en los divs
function changeMonth(dia){
    removeDaysDiv()
    updateMonth()
    var startDay = dia.getDay()
    var actMonth = dia.getMonth()
    var actYear = dia.getFullYear()
    var fecha2 = new Date (actYear,actMonth+1,0).getDate();
    var startDay = new Date (actYear,actMonth,1).getDay()
    if (startDay === 0){startDay =7}
    console.log(startDay)
    for(let i=(-startDay+2); i<=fecha2; i++){
        dayDiv = document.createElement("div")
        dayDiv.classList= "days";
        dayDiv.textContent = new Date (actYear,actMonth,i).getDate();
        if(i<=0){dayDiv.style.color="beige";}
        if(i==actDate.getDate() && actDate.getMonth()== new Date().getMonth() && actDate.getFullYear()== new Date().getFullYear() ){
            dayDiv.style.backgroundColor="#f5a840ff";
            dayDiv.classList.add("Today");
        }
        printEvent(new Date (actYear,actMonth,i));
        mainContainerFragment.appendChild(dayDiv);
    }
    mainContainer.appendChild(mainContainerFragment);
}

// Elimina los daton anteriores de los divs
function removeDaysDiv(){
    while (mainContainer.children.length>7){
        mainContainer.removeChild(mainContainer.lastChild);
    }
}

changeMonth(actDate);

// imprimir evento en calendario
//tener en cuenta la array futuro, eventos de un día
function printEvent(fecha){
    //if fecha calendario= fecha evento=> print
    arrayFuture.forEach(element => {
        var fechaEvento= new Date(element.dateInitial);
        fechaEvento.setHours(0,0,0,0); //pone la hora a 0
        if(fechaEvento.getTime() === fecha.getTime()){
            console.log("entraaaa");
            var taskInCalendar= document.createElement("p");
            taskInCalendar.innerHTML=element.title;
            dayDiv.appendChild(taskInCalendar);
        }

    });
}