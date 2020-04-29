# Major Task 1 - Build the HTML for the workday scheduler
​
* Create HTML structure
​
* Create css styles to format HTML to look like an hourly task schedule
​
# Major Task 2 - Print the current date to the top of the page
​
* Get the current time and format it. (Use moment.js - https://momentjs.com/ - Look at the .format() function)
​
# Major Task 3 - We need a way to save our tasks for each hour
​
* Add a click event to save buttons to capture the action
​
* Save the task content into local storage
​
* When the page loads, load saved tasks from localStorage and assign the values into the correct hourly task inputs
​
# Major Task 4 - Get the current hour of the day and compare with the hour blocks on the page
​
* Getting the current hour ( Use moment.js - https://momentjs.com/ )
​
* Determine if each hour block is past, preset or future
​
```
// Select all the elements with the "hour-block" class and loop over each one using the .each( callback ) jQuery method
$('.hour-block').each(function() {
​
    /**
     * The "this" key word here refers to the "plain javascript object" referencing the current .hour-block element.
     * We pass it back into jQuery here by doing $(this) so can use jQuery methods to interact with the element.
     * Example: hourBlock.addClass('present');
     */
    var hourBlock = $(this);
​
    // Read an attribute from the element to determine the hour it's supposed to represent
​
    // Compare the block's hour to the current hour to determine whether it should be styled as a "past", "present" or "future" hour block
​
});
```