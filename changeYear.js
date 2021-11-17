// import {actualYear} from "./index.js";

// console.log(actualYear)
var actDate = new Date;
var actYear = actDate.getFullYear()
var actualYear = document.getElementById("actualYear")
var divChangeYear;
var divNewYear;
var DivChangeYearnBtnLeft;
var divNumberYear;
var DivChangeYearnBtnRight;
var lastYear;
var firstYear;
actualYear.addEventListener("click",changeYearWindow)


function changeYearWindow(){
    divChangeYear= document.createElement("div");
    divChangeYear.classList= "containerDivChangeYear";
    document.body.appendChild(divChangeYear);

    DivChangeYearnBtnLeft= document.createElement("button");
    DivChangeYearnBtnLeft.classList= "DivChangeYearnBtnLeft";
    divChangeYear.appendChild(DivChangeYearnBtnLeft);
    DivChangeYearnBtnLeft.addEventListener("click",rest9year)

    divNewYear= document.createElement("div");
    divNewYear.classList= "DivChangeYear";
    divChangeYear.appendChild(divNewYear);

    DivChangeYearnBtnRight= document.createElement("button");
    DivChangeYearnBtnRight.classList= "DivChangeYearnBtnRight";
    divChangeYear.appendChild(DivChangeYearnBtnRight);
    DivChangeYearnBtnRight.addEventListener("click",add9year)

    addYear()
}

function addYear(){
   
    for(let i=-4; i<=4; i++){
        divNumberYear= document.createElement("div")
        divNumberYear.classList= "divNumberYear";
        divNumberYear.textContent= actYear+i;
        divNewYear.appendChild(divNumberYear)
        }
        
        lastYear =  parseInt(divNumberYear.textContent);
        // lastYear = parseInt;

        console.log(lastYear)
}

function add9year(){
    var divNumberYearall = document.querySelectorAll(".divNumberYear")
    console.log(divNumberYearall)
    for( let l = 0; l<=8; l++){
        divNumberYearall[l].innerHTML =lastYear + l;
    }
    lastYear = lastYear + 9 ;
}



function rest9year(){
    var divNumberYearall = document.querySelectorAll(".divNumberYear")
    console.log(lastYear)
    console.log(divNumberYearall)
    for( let l = 8; l<=0; l--){
        console.log(divNumberYearall[l])
        divNumberYearall[l].innerHTML =lastYear - l;
        console.log(lastYear)
    }
    lastYear = lastYear - 9 ;
}

