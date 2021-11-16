const mainContainer = document.getElementById("containerDays")
const mainContainerFragment = document.createDocumentFragment()
const previousButton = document.getElementById("previousButton")
const nextButton = document.getElementById("nextButton")
var actDate = new Date
var actualMonth = document.getElementById("actualMonth")
var actualYear = document.getElementById("actualYear")
previousButton.addEventListener("click",previousMonth)
nextButton.addEventListener("click",nextMonth)

function updateMonth(){
    actualMonth.innerHTML = actDate.toLocaleString('en-us', { month: 'long'})
    actualYear.innerHTML = actDate.toLocaleString('en-us', { year: 'numeric' })
}
function previousMonth(){
    actDate.setMonth(actDate.getMonth()-1)
    changeMonth(actDate)
}
function nextMonth(){
    actDate.setMonth(actDate.getMonth()+1)
    changeMonth(actDate)
}

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
    for(i=(-startDay+2); i<=fecha2; i++){
        var dayDiv = document.createElement("div")
        dayDiv.classList= "days";
        dayDiv.textContent = new Date (actYear,actMonth,i).getDate();
        if(i<=0){dayDiv.style.color="white";}
        mainContainerFragment.appendChild(dayDiv)
    }
    mainContainer.appendChild(mainContainerFragment)
}



function removeDaysDiv(){
    while (mainContainer.children.length>7){
        mainContainer.removeChild(mainContainer.lastChild)
    }
}

changeMonth(actDate)