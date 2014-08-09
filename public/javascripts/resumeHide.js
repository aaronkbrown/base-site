
// A script for click events toggling classes of associated elements

$('#profileContent').hide(0, function(){
  $(this).removeClass('resumeToggled');
});

$('#objectiveContent').hide(0, function(){
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

// Click on a header to toggle class
$('#profileHeader').click(function(){
  //$('#profileContent').toggleClass('resumeToggled');
  $('#profileContent').slideToggle("medium");
});
$('#objectiveHeader').click(function(){
  //$('#objectiveContent').toggleClass('resumeToggled');
  $('#objectiveContent').slideToggle("medium");
});
$('#skillsHeader').click(function(){
  //$('#skillsContent').toggleClass('resumeToggled');
  $('#skillsContent').slideToggle("medium");
});
$('#educationHeader').click(function(){
  //$('#educationContent').toggleClass('resumeToggled');
  $('#educationContent').slideToggle("medium");
});
$('#historyHeader').click(function(){
  //$('#historyContent').toggleClass('resumeToggled');
  $('#historyContent').slideToggle("medium");
});
