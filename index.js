const mainContainer = document.getElementById("containerDays")
const mainContainerFragment = document.createDocumentFragment()
const previousButton = document.getElementById("previousButton")
const nextButton = document.getElementById("nextButton")
var actDate = new Date

previousButton.addEventListener("click",previousMonth)
nextButton.addEventListener("click",nextMonth)

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
    var actMonth = dia.getMonth()
    var actYear = dia.getFullYear()
    var fecha2 = new Date (actYear,actMonth+1,0).getDate();

    for(i=1; i<=fecha2; i++){
        var dayDiv = document.createElement("div")
        dayDiv.classList= "days";
        dayDiv.textContent = i;
        mainContainerFragment.appendChild(dayDiv)
    }
    mainContainer.appendChild(mainContainerFragment)
}

function removeDaysDiv(){
    while (mainContainer.children.length>7){
        mainContainer.removeChild(mainContainer.lastChild)
    }
    
}
