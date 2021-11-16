
var divEvent = document.getElementById("event");
var addTask = document.getElementById("addTask");
addTask.addEventListener("click", newTask);


function newTask() {
    divEvent.classList.toggle("hidden");
    createForm();
}

// Crear la pantalla modal de newTask
function createForm() {
    divEvent.innerHTML =
        '<form id="event-content" name="event-content">' +
        '<label>' + 'Name of Event' +
        '<input type="text" id="nameEvent">' + '</label>' +
        '<label>' + 'Date of Start' +
        '<input type="datetime" id="dateStart">' + '</label>' +
        '<label>' +
        '<input id="checkDate" type="checkbox" onclick="showFin()">' + 'Choose date finish' + '</label>' +
        '<input type="text" id="dateFinal" class="hidden">' +
        '<label>' +
        '<input id="checkNot" type="checkbox" onclick="showNotification()">' + 'Receive Notification' + '</label>' +
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
        '<button class="col-left">' + 'X' + '</button>' +
        '<input type="button" onclick="aceptTask()" value="Add">' +
        '</form>';
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

//recibe todas las variables y las guarda en un objeto
function aceptTask() {
    var title = document.getElementById("nameEvent").value;
    var dateInitial = document.getElementById("dateStart").value;
    var dateFin = document.getElementById("dateFinal").value;
    var timing = document.getElementById("time");
    var notification= timing.options[timing.selectedIndex].text;
    var typeE = document.getElementById("typeEvent"); //buscar ponerlo fuera
    var typeEvent= typeE.options[typeE.selectedIndex].text;
    console.log(createObj(title, dateInitial, dateFin, notification, typeEvent));
}

// Crear un objeto
function createObj(title, dateInitial, dateFin, notification, typeEvent) {
    return Event = {
        title: title,
        dateInitial: dateInitial,
        dateFin: dateFin,
        notification: notification,
        typeEvent: typeEvent,
    };
}