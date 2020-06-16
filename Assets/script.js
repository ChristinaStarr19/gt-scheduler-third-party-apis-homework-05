//Pseudo-Code
//Test script in index to see if it works
//generate 1 row with 3 columns in it.
//add types to the columns:

$(document).ready(function () {

  hoursObject = [
    { twelveHour: "9 AM", twentyFourHour: "9" },
    { twelveHour: "10 AM", twentyFourHour: "10" },
    { twelveHour: "11 AM", twentyFourHour: "11" },
    { twelveHour: "12 PM", twentyFourHour: "12" },
    { twelveHour: "1 PM", twentyFourHour: "13" },
    { twelveHour: "2 PM", twentyFourHour: "14" },
    { twelveHour: "3 PM", twentyFourHour: "15" },
    { twelveHour: "4 PM", twentyFourHour: "16" },
    { twelveHour: "5 PM", twentyFourHour: "17" },
  ];

  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  for (var i = 0; i < 9; i++) {
    createTimeBlocks(i);
  }

  function createTimeBlocks(index) {
    var newRow = $("<div>").addClass("row");
    var column1 = $("<div>")
      .addClass("col-sm-1 hour")
      .text(hoursObject[index].twelveHour);
    console.log("This is the first column.");
    var column2 = $("<textarea>").addClass("col-sm-10 input").val(localStorage.getItem(hoursObject[index].twelveHour));
    var column3 = $("<button>")
      .addClass("col-sm-1 saveBtn")
      .html("<i class='fas fa-save'></i>");
    //Append to existing element
    newRow.append(column1).append(column2).append(column3);
    $(".container").append(newRow);
    if (parseInt(hoursObject[index].twentyFourHour) === parseInt(moment().format("H"))) {
      column2.addClass("present");
    } else if (parseInt(hoursObject[index].twentyFourHour) > parseInt(moment().format("H"))) {
      column2.addClass("future");
    } else {
      column2.addClass("past");
    }
    //hoursIndex++;
  }

  

  

  $(".container").on("click", ".saveBtn", function (event) {
    var input = $(this).siblings(".input").val();
    var time = $(this).siblings(".hour").text();
    console.log(time);
    //save todo and time in local storage
    localStorage.setItem(time, input);
    // localStorage.setItem("myList", JSON.stringify({toDo: input, time: time}));
    console.log();
     
    
    

    //   }
  });
});
