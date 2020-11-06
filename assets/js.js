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

    // var saveBtn = $(".saveBtn");
    // saveBtn.on("click", function() {
    //   console.log("I am here");
    // });

    // var timeSlot = ["", "", "", "", "", "", "", "", ""];

    function saveData(event) {
        event.preventDefault();
    //     // console.log("I have been clicked!");
    //     // console.log("timeSlot: " , timeSlot);
        var value = $(this).prev().val();
    //     // var input = $(".timeblock").val().trim();
        var time = $(this).parent().attr("id");
    //     // timeSlot.push(input);
    //     // var key = "test"
    //     // localStorage.setItem(key, timeSlot);
        localStorage.setItem(time, value);
        // location.reload();
    //     // console.log(localStorage.getItem("TEST"));
    };

    $('.saveBtn').click(saveData);

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log(value);
        var lsOutput = $(".timeblock");

        lsOutput.text(value);
    };

    // var value = $(this).prev().val();
    // function getSavedValue() {
    //     if (localStorage.getItem(value)) {
    //         return value;
    //     };
    // };

    // getSavedValue();

    // $('.saveBtn').click(function (event) {
    //     event.preventDefault();
    //     var time = $(this).parent().attr("id");
    //     var value = $(this).prev().val();
    //     console.log(time);
    //     console.log(value);
    //     localStorage.setItem(time, value);
    // });


    // function loadData() {
    //   //grab timeslot data from local storage ‘get item’
    //   localStorage.getItem(timeSlot);
    //   //loop thru timeSlot on screen
    //   for (var i = 0; i < timeSlot.length; i++) {
    //     console.log(timeSlot[i]);
    //     //for each row on the screen check timeslot array for non empty string

    //     //set up eventTime, get the match < 9 ‘+=12’
    //     var eventTime = $(".timeblock");
    //     eventTime.each(function () {
    //       var match = parseInt($(this).attr("id"));
    //       if (match < 9) {
    //         match += 12;
    //       }
    //       let time = $(this)[0];
    //     });
    //     //calculate timeSlot index = to match - 9
    //     timeSlot[i] = match - 9;
    //     //if non empty string set textarea for row to string in the arrow pointed by index
    //     if (timeSlot[i] !== string.Empty) {
    //       console.log(timeSlot[i]);
    //     }
    //   }
    //   //
    // }

    // loadData();

    // function saveData(event) {
    //event handled when you click save button
    // event.preventDefault();
    // console.log("I have been clicked!");
    // var saveBtn = $(".saveBtn");
    // saveBtn.on("click", function (event) {
    //   //event time
    //   var eventTime = $(".timeblock");
    //   //convert to military time ‘+12’
    //   eventTime.each(function () {
    //     var match = parseInt($(this).attr("id"));
    //     if (match < 9) {
    //       match += 12;
    //     }
    //     let time = $(this)[0];
    //   });
    //   //set index = military time - 9
    //   timeSlot[i] = match - 9;
    //   //save incoming text in array
    //   var input = $(".timeblock").val().trim();
    //   timeSlot.push(input);
    //   //save array in local storage
    //   localStorage.setItem(timeSlot);
    // });
    // }

    // saveData();
    // $('.saveBtn').click(saveData);

    // this function didnt work at all
    // function saveToLocal() {
    //   var textAreaInput = $("textarea").val;
    //   // console.log(textAreaInput);
    //   var saveBtn = $("#save");
    //   saveBtn.on("click", function () {
    //     localStorage.getItem($(this).textAreaInput);
    //     console.log(text);
    //   });
    // };

    // saveToLocal();

    //this function didnt show anything in console.log
    // function saveText() {
    //   var saveBtn = $("#save");
    //   saveBtn.on("click", function() {
    //     var text = $(".timeblock").val();
    //     console.log(text);
    // });
    // }

    //this function saved undefined to local
    // var saveBtn = $("#save");
    // for (var i = 1; i < 10; i++) {
    //   $("#" + i + ("am" || "pm")).val(localStorage.getItem("" + i));
    // }

    // function saveToLocal() {
    //   for (var i = 0; i < 10; i ++) {
    //     localStorage.setItem("" + i, $("" + i + ("am" || "pm")).val());
    //   }
    // };
    // saveBtn.on("click", saveToLocal());

    //grab the time and save that as the key in local storage
    //grab the value of the textarea that corresponds to the time abd save that as the value in local storage
    //you want this to happen when the save button is clicked
    //save buttons have a class and using the key word this you reference the time and the value of the text area that corresponds
    //make sure the save buttons have the sam class similar to how it works to find the past present future coloring
    //   // var saveBtn = $("#save"); works just like the one below
    //   // var saveBtn = $(".saveBtn");
    //   var saveBtn = $("this").attr("saveBtn");
    //   // var saveBtn = $(this).saveBtn; // doesnt work
    //   saveBtn.on("click", function(){
    //     var key = parseInt($(this).attr('id'))
    //     var value = $(".timeblock").val()
    //     localStorage.setItem("key", "value");
    //   });
    // });
});