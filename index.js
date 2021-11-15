var divEvent= document.getElementById("event");
var addTask= document.getElementById("addTask");
addTask.addEventListener("click", newTask);

function newTask (){
    divEvent.classList.toggle("hidden");
    createForm();
}

// Crear la pantalla modal de newTask
function createForm(){
    divEvent.innerHTML=
    '<form id="event-content" name="event-content">'+
    '<label>' + 'Name of Event'+
        '<input type="text" id="nameEvent" name="nameEvent">'+'</label>'+
    '<label>'+'Date of Start'+
        '<input type="datetime" id="dateStart">'+'</label>'+
    '<label>'+
        '<input type="checkbox">'+'Choose date finish'+'</label>'+
    '<input type="datetime" id="dateFinal">'+
    '<label>'+
        '<input type="checkbox">'+'Receive Notification'+'</label>'+
    '<select id="time" id="time">'+
        '<option value="5">'+'5 minutes'+'</option>'+
        '<option value="10">'+'10 minutes'+'</option>'+
        '<option value="15">'+'15 minutes'+'</option>'+
        '<option value="30">'+'30 minutes'+'</option>'+
        '<option value="1">'+'1 hour'+'</option>'+
    '</select>'+
            '<label>'+'Type of Event'+
                '<select name="event" id="typeEvent">'+
                    '<option value="work">'+'work'+'</option>'+
                    '<option value="house">'+'house'+'</option>'+
                    '<option value="family">'+'family'+'</option>'+
                    '<option value="leisure">'+'leisure'+'</option>'+
                '</select>'+'</label>'+
                '<button class="col-left">'+'X'+'</button>'+
                '<input type="button" onclick="aceptTask()" value="Add">'+
    '</form>';
}

function aceptTask(){
    console.log("holi aceptTask");
    var name=document.getElementById("nameEvent").value;
    console.log(name);
    console.log("fin task");
}