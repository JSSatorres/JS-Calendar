// import {actualYear} from "./index.js";

// console.log(actualYear)
var actDate = new Date;
var actYear = actDate.getFullYear();
var actualYear = document.getElementById("actualYear");
var divChangeYear;
var divNewYear;
var DivChangeYearnBtnLeft;
var divNumberYear;
var DivChangeYearnBtnRight;
actualYear.addEventListener("click",changeYearWindow);


function changeYearWindow(){
    divChangeYear= document.createElement("div");
    divChangeYear.classList= "containerDivChangeYear";
    document.body.appendChild(divChangeYear);

    DivChangeYearnBtnLeft= document.createElement("button");
    DivChangeYearnBtnLeft.classList= "DivChangeYearnBtnLeft";
    divChangeYear.appendChild(DivChangeYearnBtnLeft);
    DivChangeYearnBtnLeft.addEventListener("click",rest9year);

    divNewYear= document.createElement("div");
    divNewYear.classList= "DivChangeYear";
    divChangeYear.appendChild(divNewYear);

    DivChangeYearnBtnRight= document.createElement("button");
    DivChangeYearnBtnRight.classList= "DivChangeYearnBtnRight";
    divChangeYear.appendChild(DivChangeYearnBtnRight);
    DivChangeYearnBtnRight.addEventListener("click",add9year);

    addYear();
}

function addYear(){
    for(let i=-4; i<=4; i++){
        divNumberYear= document.createElement("div");
        divNumberYear.classList= "divNumberYear";
        divNumberYear.textContent= actYear+i;
        divNewYear.appendChild(divNumberYear);
        }
}
function add9year(){
    var divNumberYearall = document.querySelectorAll(".divNumberYear");
    var sum=1;
    var year=parseInt(divNumberYearall[8].innerHTML);
    for(let i=0;i<=8;i++){
        divNumberYearall[i].innerHTML =year + sum;
        sum++;
    }
}

function rest9year(){
    var divNumberYearall = document.querySelectorAll(".divNumberYear");
    var rest=1;
    var year=parseInt(divNumberYearall[0].innerHTML);
    for(let i=8;i>=0;i--){
        divNumberYearall[i].innerHTML =year - rest;
        rest++;
    }
}
