// A script for swapping the stylesheet of the site

/** Check if stylesheet cookie exists, apply appropriate stylesheet and make #swapper2 button appear, otherwise let default stylesheet take over and make #swapper1 button appear */ 

if($.cookie("stylesheet") === "on") {
  //Cookie is on, set stylesheet to cyber style
  //$("#csslink").attr("href", $.cookie("stylesheet"));
  $("#csslink").attr("href", '/stylesheets/application2.css');
  $("#swapper2").css("display", "block");
  //alert("Cookie is on");
} else {
  //Cookie is off, stylesheet is default in HTML
  $("#swapper1").css("display", "block");
  //alert("Cookie is off");
}

// click events
$(document).ready(function() {
  $("#swapper1").click(function() {
    $("#csslink").attr("href", $("#swapper1").attr('rel'));
    // set stylesheet cookie value to on, expires in 30 days
    //$.cookie("stylesheet", $(this).attr('rel'), {expires: 30, path: '/'});
    $.cookie("stylesheet", "on", {expires: 30, path: '/'});
    // Make appropriate stylesheet button link appear and other disappear
    $("#swapper1").css("display", "none");
    $("#swapper2").css("display", "block");
    return false;
  });
  $("#swapper2").click(function() {
    $("#csslink").attr("href", $("#swapper2").attr('rel'));
    // set stylesheet cookie value to off
    $.cookie("stylesheet", "off", {expires: 30, path: '/'});
    // Make appropriate stylesheet button link appear and other disappear
    $("#swapper1").css("display", "block");
    $("#swapper2").css("display", "none");
    return false;
  });
});
