$(document).ready(function() {  
    calendar.render();
});

$(window).resize(function() {
  calendar.render();
});

var calendar = (function () {
  var iter = 0;
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  function renderCalendar() {
    var templateColumns = "";
    for(var i = 0; i < days.length; i++) {
      templateColumns += "" + ($("#calendarWrapper").width() / days.length) + "px ";
    }
    $("#calendarWrapper").html("");
    $("#calendarWrapper").css("grid-template-columns", templateColumns);
    for(var i = 0; i < days.length; i++) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgba(" + r + ", " + g + ", " + b + ", 0.2)";
      $("#calendarWrapper").append("<div id='calendar" + days[i] + "' style='text-align: center; background-color: " + color + "'></div>");
      $("#calendar" + days[i]).append(days[i]);
      $("#calendar" + days[i]).append("<br>");
      $("#calendar" + days[i]).append("<span style='display: block; width: 100%; height: 100%; margin-top: 40px; background-color: rgba(255,255,255,0.5)'></span>");
    }
  }
  
  return {
    render : renderCalendar
  }
}());