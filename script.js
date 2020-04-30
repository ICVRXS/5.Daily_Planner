//clock to display current day and time
//blocks for entering text
    //event listeners for clicks 
    //ability for user to enter text on-screen
    //save buttons which save the text to local storage
//functionality to change the color of each block according to the time of day
    //change css through js for each hourly interval
var currentDay = $("#currentDay");
var saveBtn = $("#saveBtn");
var myTask = $("#my-task");


currentDay.append("<p>This is where the date will go</p>");

saveBtn.on("click", function testFunction(event){
    event.preventDefault();
    console.log("click");
});