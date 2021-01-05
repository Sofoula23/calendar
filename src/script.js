//Moment.js
var currentDate = moment().format("dddd")
+ "" + moment().format("Do MMM YYYY")
var currentHour = moment().format("h:mm:ss a");

//Save the input information in the local storage
$(document).ready(function(){
    
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".event-text").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    
    })
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
     //Place the current date 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //get saved items by user from Local Storage
    $("#time-9 .event-text").val(localStorage.getItem("time-9"))
    $("#time-10 .event-text").val(localStorage.getItem("time-10"))
    $("#time-11 .event-text").val(localStorage.getItem("time-11"))
    $("#time-12 .event-text").val(localStorage.getItem("time-12"))
    $("#time-13 .event-text").val(localStorage.getItem("time-13"))
    $("#time-14 .event-text").val(localStorage.getItem("time-14"))
    $("#time-15 .event-text").val(localStorage.getItem("time-15"))
    $("#time-16 .event-text").val(localStorage.getItem("time-16"))
    $("#time-17 .event-text").val(localStorage.getItem("time-17"))
})