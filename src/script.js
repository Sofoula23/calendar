//Moment.js
var currentDate = moment().format("dddd")
+ "" + moment().format("Do MMM YYYY")
var currentHour = moment().format("h:mm:ss a");

//Save the input information in the local storage
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $("textarea.event-text").val();
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)

    })
    // event listener for save buttons to add to local storage
    $(".saveBtn").on("click", function () {
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });
    //Determine color code for the past, the present and the future. 
    function determineHour(){
        var currentTime = moment().hours();
        $(".time-block").each(function(){
            var timeBlockHour = parseInt($(this).attr("id").split("-")[1])
            if (timeBlockHour < currentTime){
                $(this).addClass("past");
                
            }
            else if (timeBlockHour === currentTime){
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }
    determineHour()
})