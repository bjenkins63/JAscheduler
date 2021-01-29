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

    function hourDivs() {
        // collect elements loop over
        let ranges = $(".hourRange")
        ranges.each(function () {
            var hourPage = $(this)
            let divStatus = hourPage.attr("data-hour")
            if (divStatus < hourOfDay) {
                hourPage.addClass("past")
            } else if (divStatus > hourOfDay) {
                hourPage.addClass("future")
            } else {

            }
        })



    }
    hourDivs();



    // GIVE DIVS THEIR CORRECT TIME VALUE ON LOAD

    //compare the div numeric value to the current time (hourOfDay)
    //if value is = do nothing; if > add .future class; if < add .past class  

    // if (adjHour > hourOfDay); {
    //     $.addClass("past");
    // };

    // if (adjHour < hourOfDay); {
    //     $.addClass("future");
    // };

    // if (adjHour === hourOfDay); {
    //     return;
    // }




    //want the btn in the hour div to change class of div to (.reserved)when clicked, 
    //and deactivate the text field and button
    //Save Meeting Details (meetingCopy.put.innerText)
    //Get meetingCopy from localstorage and center in the ().reserved) hour div


    // $.meetingCopy.setItemlocalStorage("meetingCopy")

    // $.getItemlocalStorage(meetingCopy).getInnerHTML()
    // setText meetingCopy










    $("btn").click(function () {
        $("#").addClass("reserved");
    })


});



