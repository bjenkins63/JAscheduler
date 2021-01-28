$(document).ready(function () {

    // Get current month, date and day and set the date format
    const currentMonth = (dayjs().format("MMMM"));
    const dayOfWeek = (dayjs().format("dddd"));
    const dayOfMonth = (dayjs().format("D"));
    const hourOfDay = parseInt((dayjs().format("H")));
    const minuteOfDay = parseInt((dayjs().format("mm")));

    // Return the current day, month and day
    $("#currentDay").text(`${dayOfWeek}, ${currentMonth} ${dayOfMonth}, ${hourOfDay}:${minuteOfDay}`);


    if (hourOfDay > 10) {
        $("#mil9").addClass("past");
      };



    //   var mil9 = 9;
      


    //   const militaryTime = [ 9, 10, 11, 12, 13, 14, 15, 16];

    //   $("#mil9").attr("data-hour", militaryTime[0]);
    //   $("#mil10").attr("data-hour", militaryTime[1]);
    //   $("#mil11").attr("data-hour", militaryTime[2]);
    //   $("#mil12").attr("data-hour", militaryTime[3]);
    //   $("#mil13").attr("data-hour", militaryTime[4]);
    //   $("#mil14").attr("data-hour", militaryTime[5]);
    //   $("#mil15").attr("data-hour", militaryTime[6]);
    //   $("#mil16").attr("data-hour", militaryTime[7]);

    //   document.getElementById("mil9").innerHTML = "Good day!";


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




//     function setMeeting() {
//         let meetingCopy = localStorage.getItem("meetingCopy");
//         setMeeting();
//     }

//     let meeting = document.querySelector("meetingCopy").nodeValue;
//     localStorage.setItem("meetingCopy", meeting);







   


});

