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
      bgcolor : "rgba(64, 128, 255, " + transp + ")"
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

  function renderHours(dayId) {
    var hoursList = "";
    for(var i = 0; i < 24; i++) {
        hoursList += "<div class='calendarHour'>" + i + "</div>\n";
    }
    return {
      hours : hoursList,
    }
  }

  function renderCalendar() {
    var templateColumns = "";
    for(var i = 0; i < Object.keys(days).length; i++) {
      templateColumns += "auto ";
    }
    $("#calendarWrapper").html("");
    $("#calendarWrapper").css("grid-template-columns", templateColumns);
    for(var day in days) {
      var color = days[day].bgcolor;
      var border = day != "Sunday" ? "3px solid #FFF" : "none";
      var style = "text-align: center; background-color: " + color + "; border-right: " + border + ";";
      $("#calendarWrapper").append("<div id='calendar" + day + "' style='" + style + "'></div>");
      $("#calendar" + day).append("<div id='calendar" + day + "Hours' class='calendarDayHours'></div>");
      hoursData = renderHours("calendar" + day);
      $("#calendar" + day + "Hours").css("display", "grid");
      $("#calendar" + day + "Hours").css("height", "100%");
      $("#calendar" + day + "Hours").append(hoursData.hours);
      renderSchedule();
    }
  }

  function renderSchedule() {
    for(var day in days) {
      var top = document.getElementById("calendar" + day + "Hours").offsetHeight * -1;
      var left = document.getElementById("calendar" + day + "Hours").offsetWidth * -1;
      console.log("top : " + top + " left : " + left);
      $("#calendar" + day).append("<span style='position: relative; top: " + top + "; left: " + left + "; background-color: rgba(0,0,0,0.3); height: 80%; width: 30%'></span>")
    }
  }

  return {
    render : renderCalendar
  }
}());
