$(document).ready(function () {

    // Get current month, date and day and set the date format
    const currentMonth = (dayjs().format("MMMM"));
    const dayOfWeek = (dayjs().format("dddd"));
    const dayOfMonth = (dayjs().format("D"));
    const hourOfDay = parseInt((dayjs().format("H")));
    const minuteOfDay = parseInt((dayjs().format("mm")));

    // Return the current day, month and day
    $("#currentDay").text(`${dayOfWeek}, ${currentMonth} ${dayOfMonth}, ${hourOfDay}:${minuteOfDay}`);



    //need to give these divs a numeric value

    function adjHour() {

        $("#mil9").val(9);
        $("#mil10").val(10);
        $("#mil11").val(11);
        $("#mil12").val(12);
        $("#mil13").val(13);
        $("#mil14").val(14);
        $("#mil15").val(15);
        $("#mil16").val(16);
        return adjHour;
    }

    // GIVE DIVS THEIR CORRECT TIME VALUE ON LOAD

    //compare the div numeric value to the current time (hourOfDay)
    //if value is = do nothing; if > add .future class; if < add .past class  

    if (adjHour > hourOfDay); {
        $.addClass("past");
    };

    if (adjHour < hourOfDay); {
        $.addClass("future");
    };

    if (adjHour === hourOfDay); {
        return;
    }
}



//want the btn in the hour div to change class of div to (.reserved)when clicked, 
//and deactivate the text field and button
//Save Meeting Details (meetingCopy.put.innerText)
//Get meetingCopy from localstorage and center in the ().reserved) hour div

    $("btn").click(function () {
    $("#").addClass("reserved");
});



function setMeeting() {
    let meetingCopy = localStorage.getItem("meetingCopy");
    setMeeting();
}

let meeting = document.querySelector("meetingCopy").nodeValue;
localStorage.setItem("meetingCopy", meeting);
















    // const newLocal = newFunction();

    //var MilitaryTime = [9, 10, 11, 12, 13, 14, 15, 16];




//     $(document).ready(function() {
//         $('#st').change(function(){
//             var st = $('#st9:00').val(); // start time Format: '9:00 PM'
//             var et = $('#et10:00').val(); // end time   Format: '11:00 AM' 

//             //how do i compare time
//                 if(st > et)
//                 {
//                    alert('end time always greater then start time');
//                 }
//         });
//     });
    // var changeStatus = document.querySelectorAll("#changeStatus");
    // var container = document.querySelector("#container");

//     //start time
// var start_time = $("#start_time").val();

// //end time
// var end_time = $("#end_time").val();










   


});



