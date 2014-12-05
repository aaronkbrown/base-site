
// A script for click events toggling classes of associated elements on resume


/** Elements in resume are loaded initially with CSS class that sets them all
invisible, following block of code hides them with jQuery and removes the
invisibility-defining class */
$('#profileContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});
$('#projectsContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});
$('#skillsContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});
$('#educationContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});
$('#historyContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});

// Click on a header to toggle the visibility of content below each header
$('#profileHeader').click(function(){
  $('#profileContent').slideToggle("medium");
});
$('#projectsHeader').click(function(){
  $('#projectsContent').slideToggle("medium");
});
$('#skillsHeader').click(function(){
  $('#skillsContent').slideToggle("medium");
});
$('#educationHeader').click(function(){
  $('#educationContent').slideToggle("medium");
});
$('#historyHeader').click(function(){
  $('#historyContent').slideToggle("medium");
});
