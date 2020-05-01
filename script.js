//clock to display current day
//functionality to change the color of each block according to the time of day
    //change css through js for each hourly interval

//Gets current day on page load and appends to to the currentDay p
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
