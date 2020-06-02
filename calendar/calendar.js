$(document).ready(function() {
  var days = {
    "monday" : "",
    "tuesday" : "",
    "wednesday" : "",
    "thursday" : "",
    "friday" : "",
    "saturday" : "",
    "sunday" : "",
    "funday" : "",
    "dumbday" : ""
  }
	calendar.init(days);
  calendar.add(["08:00", "12:00"], "wednesday");
  calendar.add(["11:30", "14:45"], "wednesday");
  calendar.add(["13:00", "17:00"], "wednesday");
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
  
  var addInterval = function(interval, day) {
    //grid-row: 1;  margin-top: 1320px; height: 30px;
    var from = timeToInt(interval[0]);
    var to = timeToInt(interval[1]);
    var intervalID = "interval_" + from + "_" + to;
    var intervalText = interval[0] + " - " + interval[1]
    var intervalElement = "<div id='" + intervalText +"' title='" + intervalText + "' class='openingHours' style='grid-row: 1; margin-top: " + from + "px; height: " + (to - from) + "px; grid-column: " + day + ";'>";
    intervalElement += "<div class='openingHoursText'>" + intervalText + "</div>";
    intervalElement += "</div>";
    console.log(intervalElement);
    $("#schedule").append(intervalElement);
  }
  
  function timeToInt(time) {
    var hoursAndMinutes = time.split(":");
    return parseInt(hoursAndMinutes[0]) * 60 + parseInt(hoursAndMinutes[1]);
  }

	var initialize = function (days) {
    $("#schedule").empty();
    $("#scheduleHeader").empty();
    var gridTemplateColumns = "";
    for(day in days) {
      gridTemplateColumns += "[" + day + "] 150px\n ";
    }
    console.log("gridTemplateColumns : " + gridTemplateColumns);
    $("#schedule").css("grid-template-columns", gridTemplateColumns);
    $("#scheduleHeader").css("grid-template-columns", gridTemplateColumns);
    var d = 6;
  	for(day in days) {
      var col = intToColor(d--);
      $("#scheduleHeader").append("<div class='day' style='background-color: " + col + ";'><div class='dayText'>" + day.charAt(0).toUpperCase() + day.slice(1) + "</div></div>");
      var dayAppend = "<div class='" + day +"'" 
      dayAppend += " style='grid-column: " + day + "; grid-row: 1/span24; background-color: " + col + "; '"
      dayAppend += "></div>";
      $("#schedule").append(dayAppend);
    	for(var h = 0; h < 24; h++) {
      	var bgcolor = h % 2 == 1 ? "rgba(0, 0, 0, 0.05)" : "transparent"
      	var append = "<div class='hour' style='grid-row: " + h + "; grid-column: " + day + "; background-color: " + bgcolor + ";'><div class='hourText'>" + intToHour(h) + "</div></div>";
        $("." + day).append(append);
      }
    }
	}

	return {
  	init : initialize,
    add : addInterval
  }
}());