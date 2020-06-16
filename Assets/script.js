//Always start script with document.ready when using jQuery
$(document).ready(function () {
  //VARIABLE DEFINITIONS

  //Create an array of objects so that I can display
  // twelveHour in column1 and then use the value of twentyFourHour
  //in comparison to moment's time.
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
  
  //FUNCTION DEFINITIONS

  //This function allows me to create 3 columns within a row and
  //append that row to the div with class container. Each column is
  //technically a different structure: column 1 = div, column 2 = textarea
  //column 3 = button. They each have their own class.
  function createTimeBlocks(index) {
    var newRow = $("<div>").addClass("row");
    var column1 = $("<div>")
      .addClass("col-sm-1 hour")
      .text(hoursObject[index].twelveHour);
    //console.log("This is the first column.");
    //Because my information is in hoursObject and its' associated with the key.
    //I can essentially reference the key, which is the same as the first key in
    //my object and ask for the value of it from local storage.
    var column2 = $("<textarea>")
      .addClass("col-sm-10 input")
      .val(localStorage.getItem(hoursObject[index].twelveHour));
    var column3 = $("<button>")
      .addClass("col-sm-1 saveBtn")
      .html("<i class='fas fa-save'></i>");
    //Append all columns to the newRow existing element.
    newRow.append(column1).append(column2).append(column3);
    //Append newRow to the div with class container.
    $(".container").append(newRow);
    //These conditionals control the colors of each textarea.
    //In order to use these comparisons we must change the strings
    //into numbers. parseInt is used to accomplish that task.
    if (
      parseInt(hoursObject[index].twentyFourHour) ===
      parseInt(moment().format("H"))
    ) {
      column2.addClass("present");
    } else if (
      parseInt(hoursObject[index].twentyFourHour) >
      parseInt(moment().format("H"))
    ) {
      column2.addClass("future");
    } else {
      column2.addClass("past");
    }
  }

  //FUNCTION CALLS

  //Updated the element assocociated with the ID currentDay by
  //adding text from moment's API to show today's date.
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  // This for loop allows me to call the function createTimeBlocks
  // which dynamically generates time blocks in the browser.
  for (var i = 0; i < 9; i++) {
    createTimeBlocks(i);
  }

  //EVENT LISTENERS
  $(".container").on("click", ".saveBtn", function (event) {
    var input = $(this).siblings(".input").val();
    var time = $(this).siblings(".hour").text();
    console.log(time);
    //save todo and time in local storage
    localStorage.setItem(time, input);
    // localStorage.setItem("myList", JSON.stringify({toDo: input, time: time}));
    console.log();
  });
});
