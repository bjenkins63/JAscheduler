$(document).ready(function () {

    // Get current month, date and day and set the date format
    const currentMonth = (dayjs().format("MMMM"));
    const dayOfWeek = (dayjs().format("dddd"));
    const dayOfMonth = (dayjs().format("D"));
    const hourOfDay = parseInt((dayjs().format("H")));
    let indexCounter = 0;

    //console.log(typeof hourOfDay);

   const militaryTime = [8, 9, 10, 11, 12, 13, 14, 15, 16];

    // Return the current day, month and day
    $("#currentDay").text(dayOfWeek + ", " + currentMonth + " " + dayOfMonth);
    //$("#currentDay").css("color", "red");

    $(".meetingSave").on("click", function () {
        //	const paragraph = document.querySelector("MeetingSave");
        //	paragraph.textContent = "innerText"

        //console.log ("click me");

    });

    $("#mil8").attr("data-hour", militaryTime[0]);
    $("#mil9").attr("data-hour", militaryTime[1]);
    $("#mil10").attr("data-hour", militaryTime[2]);
    $("#mil11").attr("data-hour", militaryTime[3]);
    $("#mil12").attr("data-hour", militaryTime[4]);
    $("#mil13").attr("data-hour", militaryTime[5]);
    $("#mil14").attr("data-hour", militaryTime[6]);
    $("#mil15").attr("data-hour", militaryTime[7]);
    $("#mil16").attr("data-hour", militaryTime[8]);



    //add data attribute to label
    // Array of hours in day 9-17
    // Looping through the array of movies
    //for (var i = 0; i < militaryTime.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)


     //  var a = $(".labelTimeDay").attr("data-hour", militaryTime[indexCounter]);

      // indexCounter++;
    
        //// Adding a class of movie-btn to our button        // Adding a data-attribute
        //a.attr("data-hour", militaryTime[i]);


        //console.log(militaryTime[i]);

        // Providing the initial button text
       // a.text(movies[i]);
        // Adding the button to the buttons-view div
       // $("#buttons-view").append(a);
     // }
    



    // MeetingSaveButton.addEventListener("click", function(event){
    //     event.preventDefault();
    // })

    // var meeting = {
    //     meetingSave: MeetingSave.input()
    // }

    // function addClass() { 
    //     var v = document.getElementById("e"); 
    //     v.className += "filled"; 
    // } 

    // var mtg = document.getElementById("meetingSave").value;
    //     localStorage.setItem("meeting", mtg);

    // var setMeeting = localStorage.getItem("MeetingSave");
    //append div add text to time block


});

