// A script for swapping the stylesheet of the site

/** Check if stylesheet cookie exists, apply appropriate stylesheet and make #swapper2 button appear, otherwise let default stylesheet take over and make #swapper1 button appear */ 
if($.cookie("stylesheet")) {
  $("#csslink").attr("href", $.cookie("stylesheet"));
  $("#swapper2").css("display", "block");
} else {
  $("#swapper1").css("display", "block");
}

// click events
$(document).ready(function() {
  $("#swapper1").click(function() {
    $("#csslink").attr("href", $("#swapper1").attr('rel'));
    // set stylesheet cookie, expires in 30 days
    $.cookie("stylesheet", $(this).attr('rel'), {expires: 30, path: '/'});
    // Make appropriate stylesheet button link appear and other disappear
    $("#swapper1").css("display", "none");
    $("#swapper2").css("display", "block");
    return false;
  });
  $("#swapper2").click(function() {
    $("#csslink").attr("href", $("#swapper2").attr('rel'));
    // remove stylesheet cookie
    $.cookie("stylesheet", null);
    // Make appropriate stylesheet button link appear and other disappear
    $("#swapper1").css("display", "block");
    $("#swapper2").css("display", "none");
    return false;
  });
});
