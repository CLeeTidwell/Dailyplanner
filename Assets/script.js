/* Display current date */
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

/* Colored timeblock with the number of hours */
function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        /* check for current, future, or past hours/times */
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

/* Save Button */
var saveBtn = $(".saveBtn");

/* Click function for save */
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var data = $(this).siblings(".data").val();
/* Save to local storage */
    localStorage.setItem(time, data);
});

/* Save to local storage on page reload */
function saveInput() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currData = localStorage.getItem(currentHour);

        if(currData !== null) {
            $(this).siblings(".data").val(currData);
        }
    });
}
/*Call to function */
timeBlock();
saveInput();