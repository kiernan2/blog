$(document).ready(function() {
  $("button#btnNight").click(function(){
    $("body").addClass("night")
  });
  $("button#btnDay").click(function(){
    $("body").removeClass("night")
  });
});