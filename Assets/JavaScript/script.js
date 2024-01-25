// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Get the hour using dayjs library and do a for .each loop like in the displaySaveNotes
//and get the value of the (this) div and do an if statement
// if the value is the same as the value of the hour from using dayjs, then apply the color to whatever it should be.
//if the value is less than the hour, then apply the color of gray
// if the value is greater than the hour, then apply the color of green
//its exactly the same as the for .each function that you used in displaySaveNotes, but instead of using local storage
//and all the other stuff inside it, replace it with the if statement. 


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
  // TODO: Add code to display the current date in the header of the page.
var now = dayjs().format("dddd, MMMM DD-YYYY");

headerDate();
hourColorPick ();
displaySavedNotes();

function headerDate () {
  $('#currentDay').text(now);
}

function hourColorPick () {
    var timeirl = dayjs().format('hh: A');
  dayjs().hour() // gets current hour
  newDate = dayjs().hour(9).hour() // returns new dayjs object
  var hourScheduled = parseInt($(this).attr("id"));
;

  $('.row').each(function() {

    if ($('.row') === timeirl) {
      this.id.addClass('present');
    } if ($('.row') < timeirl) {
      $('.row').removeClass("present");
      $('.row').addClass('past');
    } else {
      $('.row').removeClass("present");
      $('.row').removeClass("past");
      $('.row').addClass('future');
  }
  });
}


function displaySavedNotes(){
  $('.hour').each(function(){
// this keyID variable is getting the parent of this div which is the div with the ID of hour-x.
    var keyID = $(this).parent().attr("id");
// the valueID variable is getting the value from local storage using the keyID.
    var valueID = localStorage.getItem(keyID);
// this is setting the valueID to the next element from the div, which is the text area.
    $(this).next().val(valueID);
 });
}

$(function saveNotes() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


$("button").on("click", function(event) {
  var btnId = $(this).parent().attr("id");
  var textValue = $(this).prev().val();

localStorage.setItem(btnId, textValue);

} );

});

// GIVEN I am using a daily planner to create a schedule

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future         -->

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

