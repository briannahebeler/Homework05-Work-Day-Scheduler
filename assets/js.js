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

    function saveData(event) {
        event.preventDefault();
        var value = $(this).prev().val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    };

    $('.saveBtn').click(saveData);

    // for (var key in localStorage) {
    //     var output = ( key + ': ' + localStorage[key]);
    // };
    // $(this).prev().html(value);


    // for (let i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     var value = localStorage.getItem(key);
    //     // console.log(value);
    //     // var lsOutput = $(this).prev().val();
    //     $(this).prev().html(value);
    //     // lsOutput.text(value);
    // };

    // var value = $(this).prev().val();
    // function getSavedValue() {
    //     if (localStorage.getItem(value)) {
    //         return value;
    //     };
    // };

    // getSavedValue();

    // });


    
});