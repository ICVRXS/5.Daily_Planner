var currentTime = moment().hour();

//Gets current day on page load and appends to to <p id="currentDay>"
var currentDay = $("#currentDay");
var date = moment(new Date()).format("dddd, MMMM do, YYYY");
currentDay.append(date);

//For saving the text and rendering saved text to the page on refresh
var saveBtn = $(".saveBtn"),
    tasks = JSON.parse(localStorage.getItem("tasks")) || {};

saveBtn.each(function(){
    var buttonHour = $(this).data("hour");
    var taskInput = $("#task-"+buttonHour);
    taskInput.val(tasks["#task"+buttonHour]);
});

saveBtn.on("click", function(){
    var buttonHour = $(this).data("hour");
    var taskInput = $("#task-"+buttonHour);
    var taskValue = taskInput.val();
    tasks["#task"+buttonHour] = taskValue;
    localStorage.setItem("tasks",JSON.stringify(tasks));
});

//Changes color according to the hour 
$(".task").each(function(){
    var timeBlock = $(this).attr("name");
    if(timeBlock == currentTime){
        $(this).addClass("present");
    }else if(timeBlock <= currentTime){
        $(this).addClass("past");
    }else{
        $(this).addClass("future");
    }
});