import * as storage from "./storage.js";


// función al recargar la página
window.onload=refreshApp;

var arrayFuture = storage.getFuture();
var arrayPast = storage.getPast();

function refreshApp(){
    console.log ("Welcome");
    obtenerLocalStorage();
    checkOld();
}

function checkOld(){
    //if fecha arrayFuture< fecha actual => ponla detrás
    const today= new Date ();
    for (let i = 0; i < arrayFuture.length; i++) {
        console.log(typeof(arrayFuture[i].dateInitial));
        if ( arrayFuture[i].dateInitial<today.getTime()){
            arrayPast.push(arrayFuture.splice(i,1)[0]);
        }
    }
    localStorage.future=JSON.stringify(arrayFuture);
    localStorage.past= JSON.stringify(arrayPast);
}

var divEvent = document.getElementById("event");
var openModalTask = document.getElementById("addTask");
openModalTask.addEventListener("click", openModal);

function openModal() {
    divEvent.classList.toggle("hidden");
    createForm();
}

// Crear la pantalla modal de openModal
function createForm() {
    divEvent.innerHTML =
        '<form id="event-content" name="event-content">' +
        '<label>' + 'Name of Event' +
        '<input type="text" id="nameEvent">' + '</label>' +
        '<label>' + 'Date of Start' +
        '<input type="datetime-local" id="dateStart">' + '</label>' +
        '<label>' +
        '<input id="checkDate" type="checkbox">' + 'Choose date finish' + '</label>' +
        '<input type="datetime-local" id="dateFinal" class="hidden">' +
        '<label>' +
        '<input id="checkNot" type="checkbox" >' + 'Receive Notification' + '</label>' +
        '<select id="time" class="hidden">' +
        '<option value=" ">' + ' ' + '</option>' +
        '<option value="5">' + '5 minutes' + '</option>' +
        '<option value="10">' + '10 minutes' + '</option>' +
        '<option value="15">' + '15 minutes' + '</option>' +
        '<option value="30">' + '30 minutes' + '</option>' +
        '<option value="1">' + '1 hour' + '</option>' +
        '</select>' +
        '<label>' + 'Type of Event' +
        '<select name="event" id="typeEvent">' +
        '<option value="other">' + 'other' + '</option>' +
        '<option value="work">' + 'work' + '</option>' +
        '<option value="house">' + 'house' + '</option>' +
        '<option value="family">' + 'family' + '</option>' +
        '<option value="leisure">' + 'leisure' + '</option>' +
        '</select>' + '</label>' +
        '<input id="description" type="textarea" placeholder="Description">'+
        '<input type="button" id="closeModal" value="Close">' +
        '<input type="button" id="aceptTask" value="Acept">' +
        '</form>';
    var checkDate= document.getElementById("checkDate");
    checkDate.addEventListener("click", showFin);
    var checkNot= document.getElementById("checkNot");
    checkNot.addEventListener("click", showNotification);
    var aceptTaskAdd= document.getElementById("aceptTask")
    aceptTaskAdd.addEventListener("click", aceptTask);
    var closeModalBtn= document.getElementById("closeModal");
    closeModalBtn.addEventListener("click", closeModal);
}

//muestra el input dateFinal
function showFin() {
    var checkBox = document.getElementById("checkDate");
    var dateF = document.getElementById("dateFinal");
    if (checkBox.checked == true) {
        dateF.classList.remove("hidden");
    } else {
        dateF.classList.add("hidden");
    }
}


//muestra el selector Recive Notification
function showNotification(){
    var checkBoxNot = document.getElementById("checkNot");
    var timing = document.getElementById("time");
    if (checkBoxNot.checked == true) {
        timing.classList.remove("hidden");
    } else {
        timing.classList.add("hidden");
    }
}

// cierra la ventana modal
function closeModal(){
    divEvent.innerHTML = "";
    removeEvenListenerAddTask()
}

// Crear un objeto
function createObj(title, dateInitial, dateFin, notification, typeEvent, description) {
    return {
        title: title,
        dateInitial: dateInitial,
        dateFin: dateFin,
        notification: notification,
        typeEvent: typeEvent,
        description: description,
    };
}


//recibe todas las variables y las guarda en un objeto
function aceptTask() {
    var title = document.getElementById("nameEvent").value;
    var dateInitial = document.getElementById("dateStart").value;
    console.log(dateInitial);
    dateInitial= new Date (dateInitial).getTime();
    console.log(dateInitial);
    var dateFin = document.getElementById("dateFinal").value;
    dateFin= new Date (dateFin).getTime();
    var timing = document.getElementById("time");
    var notification= timing.options[timing.selectedIndex].text;
    var typeE = document.getElementById("typeEvent");
    var typeEvent= typeE.options[typeE.selectedIndex].text;
    var description= document.getElementById("description").value;
    console.log(title, dateInitial, dateFin, notification, typeEvent, description);
    var eventTask= createObj(title, dateInitial, dateFin, notification, typeEvent, description);
    guardarLocalSotorage(eventTask);
    removeEvenListenerAddTask()
}

// Guardar los datos del objeto en localStorage
function guardarLocalSotorage(objeto){
    arrayFuture.push(objeto);
    localStorage.setItem( "future",  JSON.stringify(arrayFuture));
}

function obtenerLocalStorage(){
    if (localStorage.getItem("future")){
        var future= JSON.parse( localStorage.getItem("future")) || [];
        console.log(future);
    }else{
        console.log("No hay nuevas tareas");
    }
}


// Funcion para borrar los event listener del modal AddTask
function removeEvenListenerAddTask(){
    var checkDate= document.getElementById("checkDate");
    checkDate.removeEventListener("click", showFin);
    var checkNot= document.getElementById("checkNot");
    checkNot.removeEventListener("click", showNotification);
    var aceptTaskAdd= document.getElementById("aceptTask")
    aceptTaskAdd.removeEventListener("click", aceptTask);
}