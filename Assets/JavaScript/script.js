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

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future         -->
function hourColorPick () {
    var timeirl = dayjs().hour();

  $('.row').each(function() {
     var thisHourID = $(this).attr('id');
     var hourScheduled = parseInt(thisHourID);

    if (hourScheduled === timeirl) {
      $(this).addClass('present');
    } else if (hourScheduled < timeirl) {
      $(this).removeClass("present");
      $(this).addClass('past');
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass('future');
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

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
$(function saveNotes() {
  $("button").on("click", function(event) {
    var btnId = $(this).parent().attr("id");
    var textValue = $(this).prev().val();
    localStorage.setItem(btnId, textValue);
  } );
});