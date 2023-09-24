// hi 
var audio = new Audio("alarm.wav");
var tasklist = []; 
var currentTask = "None"
function PlayAlarm() {
    audio.play();
}

function PauseAlarm() {
    audio.pause();
}
function addItem(list, inputField) { 
  var list = document.getElementById(list);
  var listItem = document.createElement("li");
  listItem.innerText = inputField.value; // passed the field. 
  list.appendChild(listItem);
  tasklist.push(listItem.innerText);
  return false; // stop submission
}

function generateTasks(menu) {
    // 3 Choices
    var menu = document.getElementById(menu);
    menu.remove(2);
    menu.remove(1);
    menu.remove(0);
    for(var i=0; i <3; i++) {
        var idx = Math.floor(Math.random() * tasklist.length);
        var option = document.createElement('option');
        option.text = tasklist[idx];
        menu.add(option, 0);
    }
}

function startTaskAlarm(menu, list) {
    var list = document.getElementById(list);
    var menu = document.getElementById(menu);

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const idx = tasklist.indexOf(menu.live);
    tasklist.splice(idx, 1);

    for (const element of tasklist) {
        
        var listItem = document.createElement("li");
        listItem.innerText = element; // passed the field. 
        list.appendChild(listItem);
    }

    timer();

}
function timer(){
    var sec = 5;
    var timer = setInterval(function(){
        document.getElementById('TaskTimer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            PlayAlarm();
        }
    }, 1000);
}
