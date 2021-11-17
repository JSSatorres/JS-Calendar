function getFuture(){
    //return localStorage.future!="undefined" ? JSON.parse(localStorage.future) : [];
    return JSON.parse(localStorage.getItem("future")) || [ ];
}



function getPast(){
    return JSON.parse(localStorage.getItem("past")) || [ ];
}



function setFuture(){

}

function setPast(){

}

export{getFuture, getPast, setFuture, setPast};