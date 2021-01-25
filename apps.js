$(document).ready(function () {

    // Get current month, date and day and set the date format
    const currentMonth = (dayjs().format("MMMM"));
    const dayOfWeek = (dayjs().format("dddd"));
    const dayOfMonth = (dayjs().format("D"));
    const hourOfDay = parseInt((dayjs().format("H")));
    let indexCounter = 0;

   const militaryTime = [8, 9, 10, 11, 12, 13, 14, 15, 16];

   $("#mil8").attr("data-hour", militaryTime[0]);
   $("#mil9").attr("data-hour", militaryTime[1]);
   $("#mil10").attr("data-hour", militaryTime[2]);
   $("#mil11").attr("data-hour", militaryTime[3]);
   $("#mil12").attr("data-hour", militaryTime[4]);
   $("#mil13").attr("data-hour", militaryTime[5]);
   $("#mil14").attr("data-hour", militaryTime[6]);
   $("#mil15").attr("data-hour", militaryTime[7]);
   $("#mil16").attr("data-hour", militaryTime[8]);



    //have to get the hour of meeting selected and compare to the data-hour att
    //if it's past tense add attr of hourPast

    
   var MeetingName = document.querySelector("meetingCopy");
   var saveMeeting = document.querySelector("")


    // Return the current day, month and day
    $("#currentDay").text(dayOfWeek + ", " + currentMonth + " " + dayOfMonth);


    MeetingSaveButton.addEventListener("click", function(event){
        event.preventDefault();
        })

    $(".meetingSave").on("click", function () {
        localStorage.setItem("meetingCopy", "innerText")
        append innerText with meetingCopy

        appendClass(".filled");


    });


     var meeting = {
        meetingSave: MeetingSave.input()
     }

    function addClass() { 
        var v = document.getElementById("e"); 
        v.className += "filled"; 
        } 

    var mtg = document.getElementById("meetingSave").value;
        localStorage.setItem("meeting", mtg);

        var setMeeting = localStorage.getItem("MeetingSave");
        ppend div add text to time block

});

