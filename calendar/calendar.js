$(document).ready(function() {
  var days = {
    "day01_06_2020" : {"weekday" : "Monday"},
    "day02_06_2020" : {"weekday" : "Tuesday"},
    "day03_06_2020" : {"weekday" : "Wednesday"},
    "day04_06_2020" : {"weekday" : "Thursday"},
    "day05_06_2020" : {"weekday" : "Friday"},
    "day06_06_2020" : {"weekday" : "Saturday"},
    "day07_06_2020" : {"weekday" : "Sunday"},
    "day08_06_2020" : {"weekday" : "Monday"},
    "day09_06_2020" : {"weekday" : "Tuesday"},
    "day10_06_2020" : {"weekday" : "Wednesday"},
    "day11_06_2020" : {"weekday" : "Thursday"},
    "day12_06_2020" : {"weekday" : "Friday"},
    "day13_06_2020" : {"weekday" : "Saturday"},
    "day14_06_2020" : {"weekday" : "Sunday"}
  }
	calendar.init(days);
});

var calendar = ( function() {

  function intToColor(str) {
  	var binstr = "00" + (str >>> 0).toString(2);
    binstr = binstr.substr(binstr.length - 3);
  	var color = "rgba("
  	for(var i = 0; i < 3; i++) { color += binstr.charAt (i) == "1" ? "255, " : "0, "; }
    color += "0.2)"
    return color;
  }
  
  function intToHour(h) {
    return ("0" + h).substr(("0" + h).length - 2) + ":00";
  }

  var addInterval = function(interval, day, weekday) {
    var from = timeToInt(interval[0]);
    var to = timeToInt(interval[1]);
    var intervalID = "interval_" + from + "_" + to;
    var intervalText = interval[0] + " - " + interval[1]
    var intervalElement = "<div id='"; 
    intervalElement += intervalText;
    intervalElement += "' title='"; 
    intervalElement += intervalText + "\n" + weekday + "\n" + dayIdToDay(day);
    intervalElement += "' class='openingHours' style='grid-row: 1; margin-top: " + from;
    intervalElement += "px; height: " + (to - from);
    intervalElement += "px; grid-column: " + day + ";'>";
    intervalElement += "<div class='openingHoursText'>" + intervalText + "</div>";
    intervalElement += "</div>";
    $("#schedule").append(intervalElement);
  }
  
  var importSchedule = function(schedule) {
    initialize(schedule);
    for(day in schedule) {
      intervalList = schedule[day]["intervals"];  
      for(var i = 0; i < intervalList.length; i++) {
        var interval = intervalList[i];
        var from = interval["from"];
        var to = interval["to"];
        addInterval([from, to], day, schedule[day]["weekday"]);
      }
    }
  }
  
  function timeToInt(time) {
    var hoursAndMinutes = time.split(":");
    return parseInt(hoursAndMinutes[0]) * 60 + parseInt(hoursAndMinutes[1]);
  }
  
  function dayIdToDay(dayId) {
    const regex = /day(\d{2})_(\d{2})_(\d{4})/gi;
    return day.replace(regex, "$1 $2 $3");
  }
  
  function extractDayName(day, days) {
    if(days[day]["weekday"] !== undefined) {
      return days[day]["weekday"] + "<br> " + dayIdToDay(day);
    } else {
      return day.charAt(0).toUpperCase() + day.slice(1);
    }
  }

	var initialize = function (days) {
    $("#schedule").empty();
    $("#scheduleHeader").empty();
    var gridTemplateColumns = "";
    for(day in days) {
      gridTemplateColumns += "[" + day + "] 150px\n ";
    }
    $("#schedule").css("grid-template-columns", gridTemplateColumns);
    $("#scheduleHeader").css("grid-template-columns", gridTemplateColumns);
    var d = 6;
  	for(day in days) {
      var col = intToColor(d--);
      $("#scheduleHeader").append("<div class='day' style='background-color: " + col + ";'><div class='dayText'>" + extractDayName(day, days) + "</div></div>");
      var dayAppend = "<div id='" + day +"'" 
      dayAppend += " style='grid-column: " + day + "; grid-row: 1/span24; background-color: " + col + "; '"
      dayAppend += "></div>";
      $("#schedule").append(dayAppend);
    	for(var h = 0; h < 24; h++) {
      	var bgcolor = h % 2 == 1 ? "rgba(0, 0, 0, 0.05)" : "transparent"
      	var append = "<div class='hour' style='grid-row: " + h + "; grid-column: " + day + "; background-color: " + bgcolor + ";'><div class='hourText'>" + intToHour(h) + "</div></div>";
        $("#" + day).append(append);
      }
    }
	}

	return {
  	init : initialize,
    add : addInterval,
    import : importSchedule
  }
}());