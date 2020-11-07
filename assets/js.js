$(document).ready(function () {

    //creating the function of the colors of textareas changing current time//
    var currentDay = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(currentDay);

    function timeBlocks() {
        var currentHour = moment().hour();
        var currentTime = $(".time-block");

        currentTime.each(function () {
            var match = parseInt($(this).attr("id"));
            if (match < 9) {
                match += 12;
            }
            console.log(currentHour, match);
            let time = $(this)[0];
            if (currentHour === match) {
                $(time).addClass("present");
            } else if (currentHour > match) {
                $(time).addClass("past");
            } else if (currentHour < match) {
                $(time).addClass("future");
            }
        });
    }

    //calling function
    timeBlocks();

    // this function saves the data to the local storage
    function saveData(event) {
        event.preventDefault();

        var value = $(this).prev().val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);

    };

    //calling function on click
    $('.saveBtn').click(saveData);

    //this loop uses the keys & values in local storage to display the user input in the text are even after the user refreshes the page
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        $(".time-block").each(function () {
            if ($(this).attr("id") == key) {
                $(this).text(value);
            }
        });

    };

});