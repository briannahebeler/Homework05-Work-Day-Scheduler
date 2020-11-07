$(document).ready(function () {

    //lines 4 to 27 create the functionality of the colors of the time blocks//
    var currentDay = moment().format("dddd MMMM Do YYYY");
    $("#currentDay").text(currentDay);

    function timeBlocks() {
        var currentHour = moment().hour();
        var currentTime = $(".timeblock");

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
    timeBlocks();

    // this function saves the data to the local storage
    function saveData(event) {
        event.preventDefault();

        var value = $(this).prev().val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
        // console.log(time, value);
        // console.log(localStorage);

    };

    $('.saveBtn').click(saveData);

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i); // text
        // console.log(key); // time
        var value = localStorage.getItem(key); // text input
        // console.log(value); // text input

        // var lsOutput = $(".timeblock"); same as textarea
        var lsOutput = $("textarea");
        // var lsOutput = $(this).prev().html(value); // does nothing
        // var lsOutput = $(this).prev().val(); // undefined
        // var lsOutput = $(this).parent().attr("id"); //undefined
        // console.log(lsOutput[i].defaultValue); // trying to get text input to display

        lsOutput.text(value);

    };

});