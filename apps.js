$(document).ready(function () {

    // Get current month, date and day and set the date format
    const currentMonth = (dayjs().format("MMMM"));
    const dayOfWeek = (dayjs().format("dddd"));
    const dayOfMonth = (dayjs().format("D"));
    const hourOfDay = parseInt((dayjs().format("H")));

    // Return the current day, month and day
    $("#currentDay").text(`${dayOfWeek}, ${currentMonth} ${dayOfMonth}`);

    // var changeStatus = document.querySelectorAll("#changeStatus");
    var container = document.querySelector(".container");

    changeStatus.addEventListener("click", () => {
        container.setAttribute("class", "filled");
    });

    function setMeeting() {
        let meetingCopy = localStorage.getItem("meetingCopy");
        setMeeting();
    }

    let meeting = document.querySelector("meetingCopy").nodeValue;
    localStorage.setItem("meetingCopy", meeting);





    // const militaryTime = [8, 9, 10, 11, 12, 13, 14, 15, 16];

    // $("#mil8").attr("data-hour", militaryTime[0]);
    // $("#mil9").attr("data-hour", militaryTime[1]);
    // $("#mil10").attr("data-hour", militaryTime[2]);
    // $("#mil11").attr("data-hour", militaryTime[3]);
    // $("#mil12").attr("data-hour", militaryTime[4]);
    // $("#mil13").attr("data-hour", militaryTime[5]);
    // $("#mil14").attr("data-hour", militaryTime[6]);
    // $("#mil15").attr("data-hour", militaryTime[7]);
    // $("#mil16").attr("data-hour", militaryTime[8]);
   


});

