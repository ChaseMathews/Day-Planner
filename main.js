const date1 = moment().format('LLLL');
const dateHeader = $("<hd1>");
dateHeader.attr("date-data", date1);
dateHeader.text(date1);
$("#currentDay").append(date1);


$(".saveBtn").click(function () {
    //$("#saved-note").append("<button></button>");
    var value = $(this).siblings(".description").val();
    console.log("value: " + value);
    var time = $(this).parent().attr("id");
    console.log("time: " + time)
    localStorage.setItem(time, value)
});
function hourlyUpdate() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
        console.log("Block Hour : " + hourBlock)
        if (hourBlock < currentHour) {
            $(this).addClass("past")
        }
        else if (hourBlock == currentHour) {
            console.log("present")
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })
}
hourlyUpdate();
var interval = setInterval(hourlyUpdate, 15000);
$("#hour-9 .description").val(localStorage.get("hour-9"))
$("#hour-10 .description").val(localStorage.get("hour-10"))
$("#hour-11 .description").val(localStorage.get("hour-11"))
$("#hour-12 .description").val(localStorage.get("hour-12"))
$("#hour-13 .description").val(localStorage.get("hour-13"))
$("#hour-14 .description").val(localStorage.get("hour-14"))
$("#hour-15 .description").val(localStorage.get("hour-15"))
$("#hour-16 .description").val(localStorage.get("hour-16"))
$("#hour-17 .description").val(localStorage.get("hour-17"))



