//clock to display current day and time
//blocks for entering text
    //event listeners for clicks 
    //ability for user to enter text on-screen
    //save buttons which save the text to local storage
//functionality to change the color of each block according to the time of day
    //change css through js for each hourly interval
var currentDay = $("#currentDay");
var myTask = $(".my-task");
var date = moment().date();

var saveBtn = $(".saveBtn"),
    tasks = {};

saveBtn.on("click", function(){
    var buttonHour = $(this).data("hour");
    var taskInput = $("#task-"+buttonHour);
    var taskValue = taskInput.val();
    tasks["#task"+buttonHour] = taskValue;
    localStorage.setItem("tasks",JSON.stringify(tasks));
});

moment().format("dddd, MMMM Do YYYY");

currentDay.append(date);