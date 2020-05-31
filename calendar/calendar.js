$(document).ready(function() {  
    calendar.render();
});

$(window).resize(function() {
  calendar.render();
});

var calendar = (function () {
  var iter = 0;
  var transp = 0.2;
  var days = {
    "Monday" : {
      bgcolor : "rgba(0, 0, 0, " + transp + ")"
    },
    "Tuesday" : {
      bgcolor : "rgba(255, 0, 0, " + transp + ")"
    },
    "Wednesday" : {
      bgcolor : "rgba(0, 255, 0, " + transp + ")"
    },
    "Thursday" : {
      bgcolor : "rgba(0, 0, 255, " + transp + ")"
    },
    "Friday" : {
      bgcolor : "rgba(255, 255, 0, " + transp + ")"
    },
    "Saturday" : {
      bgcolor : "rgba(0, 255, 255, " + transp + ")"
    },
    "Sunday" : {
      bgcolor : "rgba(255, 0, 255, " + transp + ")"
    }
  };
  
  function renderCalendar() {
    var templateColumns = "";
    for(var i = 0; i < Object.keys(days).length; i++) {
      templateColumns += "" + ($("#calendarWrapper").width() / Object.keys(days).length) + "px ";
    }
    $("#calendarWrapper").html("");
    $("#calendarWrapper").css("grid-template-columns", templateColumns);
    for(var day in days) {
      var color = days[day].bgcolor;
      var border = day != "Sunday" ? "3px solid #FFF" : "none";
      var style = "text-align: center; background-color: " + color + "; border-right: " + border + ";";
      $("#calendarWrapper").append("<div id='calendar" + day + "' style='" + style + "'></div>");
      $("#calendar" + day).append("<div class='calendarDayHeader'>" + day + "</div>");
    }
  }
  
  return {
    render : renderCalendar
  }
}());