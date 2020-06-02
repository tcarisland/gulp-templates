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
  	init : initialize
  }
}());