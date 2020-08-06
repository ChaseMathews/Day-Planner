$(document).ready(function() {

$(".saveBtn").on("click", function() {
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");
    localStorage.setItem(time,value);
});
function update() {
    const curHour = moment().hours();
    $(".time-block").each(function() {
        const blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < curHour) {
            $(this).addClass("past");

        } else if (blockHour === curHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

update();

const interval = setInterval(update, 15000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("currentDay").text(moment().format("dddd, MMM Do"));
});
