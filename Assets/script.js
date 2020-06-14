//Pseudo-Code
//Test script in index to see if it works
//generate 1 row with 3 columns in it.
//add types to the columns:

$(document).ready(function () {
  hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  hoursIndex = 0;
  var currentTime = moment(moment());
  console.log(currentTime);

  
  var newRow = $("<div>").addClass("row");
  $(".container").append(newRow);

  for (var i = 0; i < 3; i++) {
    createAMTimeBlocks();
  };
  for (var i = 0; i < 6; i++){
      createPMTimeBlocks();
  }
  function createAMTimeBlocks() {
    var column1 = $("<div>")
      .addClass("col-sm-1 hour")
      .text(hours[hoursIndex] + "AM");
    console.log("This is the first column.");
    var column2 = $("<textarea>").addClass("col-sm-10  past present future");
    var column3 = $("<button>")
      .addClass("col-sm-1 saveBtn")
      .html("<i class='fas fa-save'></i>");
    //Append to existing element
    $(".row").append(column1);
    $(".row").append(column2);
    $(".row").append(column3);
    hoursIndex++
  };

  function createPMTimeBlocks() {
      
      var column1 = $("<div>")
        .addClass("col-sm-1 hour")
        .text(hours[hoursIndex] + "PM");
      console.log("This is the first column.");
      var column2 = $("<textarea>").addClass("col-sm-10 past present future description");
      var column3 = $("<button>")
        .addClass("col-sm-1 saveBtn")
        .html("<i class='fas fa-save'></i>");
      //Append to existing element
      $(".row").append(column1);
      $(".row").append(column2);
      $(".row").append(column3);
      hoursIndex++
    };
 function setColor() {
     if (hours[hoursIndex] === (moment())){
         $("textarea").addClass("past")
     } else if (hours[hoursIndex] > (moment())) {
        $("textarea").addClass("past")
     }
    }
    setColor();
    console.log("Testing")
});


//Vol's Ideas
//   var hours = [
//     "9AM",
//     "10AM",
//     "11AM",
//     "12PM",
//     "1PM",
//     "2PM",
//     "3PM",
//     "4PM",
//     "5PM",
//   ];
//   for (var i = 0; i < 9; i++) {
//     var newRow = $(
//       `<div class='row'><span class='col-sm-1 hour'></span><textarea class='col-sm-10 present past future'></textarea><div class='col-sm-1 saveBtn'><i class="far fa-save"></i></div></div>`
//     );
//     $("span").text(hours[i]);
//     $(".container").append(newRow);
//   }
