var box = (function() {
	var x, y, width, height, color, offsetX, offsetY;
  var xDiv = 2;
  var yDiv = 6;
  var id = 0;
  function isoX(xc, yc) {
  	return ((xc - yc) / xDiv) + offsetX;
  };
  function isoY(xc, yc) {
  	return ((xc + yc) / yDiv) + offsetY;
  }

  return {
  	renderBY : function(myCanvas) {
      myContext = myCanvas.getContext("2d");  
      myContext.beginPath();
      myContext.moveTo(isoX(x, y + width), isoY(x, y + width));
      myContext.lineTo(isoX(x + width, y + height), isoY(x + width, y + height));
      myContext.lineTo(isoX(x + width, y + height), isoY(x + width, y + height) + height / (yDiv / xDiv));
      myContext.lineTo(isoX(x, y + width), isoY(x, y + width) + height / (yDiv / xDiv));
      myContext.fillStyle = "#333";
      myContext.fill();
    },
    renderBX : function(myCanvas) {
      myContext = myCanvas.getContext("2d");
      myContext.beginPath();
      myContext.moveTo(isoX(x + width, y), isoY(x + width, y));
      myContext.lineTo(isoX(x + width, y + height), isoY(x + width, y + height));
      myContext.lineTo(isoX(x + width, y + height), isoY(x + width, y + height) + height / (yDiv / xDiv));
      myContext.lineTo(isoX(x + width, y), isoY(x + width, y) + height / (yDiv / xDiv));

      myContext.fillStyle = "#555555";
      myContext.fill();
    },
    render : function(myCanvas) {
      myContext = myCanvas.getContext("2d");  
      myContext.beginPath();
      myContext.moveTo(isoX(x, y), isoY(x, y));
      myContext.lineTo(isoX(x + width, y), isoY(x + width, y));
      myContext.lineTo(isoX(x + width, y + height), isoY(x + width, y + height));
      myContext.lineTo(isoX(x, y + width), isoY(x, y + width));
      myContext.fillStyle = color;
      myContext.fill();
    },
		init : function(xc, yc, w, h, c, canvasWidth, canvasHeight) {
      x = xc;
      y = yc;
      width = w;
      height = h;
      color = c;
      offsetX = canvasWidth / 2;
      offsetY = canvasHeight / 4;
      id = id + 1;
      return this;
    },
    print : function() {
      console.log("BOX " +  id + " X " + x + " Y " + y + " width " + width + " height " + height);
    }
  }
}());

window.onload = (function(){
  isoCanvas = document.getElementById("isoCanvas");
  isoContext = isoCanvas.getContext("2d");
  var canvasHeight = isoCanvas.height;
  var canvasWidth = isoCanvas.width;
  var rc = 8;
  var boxWidth = canvasHeight / rc;
  var boxHeight = canvasHeight / rc;
  var boxes = [];
  var boxColor;
  for(var x = 0; x < rc; x++) {
  	for(var y = 0; y < rc; y++) {
  		if((x % 2 === 0 && y % 2 === 0) || (x % 2 === 1 && y % 2 === 1)) {
        boxColor = "rgba(0, 0, 0, 0.3)"
      } else {
        boxColor = "rgba(0, 0, 0, 0.1)"
      }
      var xcord = x * boxWidth; 
      var ycord = y * boxHeight;
    	var b = box.init(xcord, ycord, boxWidth, boxHeight, boxColor, canvasWidth, canvasHeight);
      b.print();
      boxes.push(b);
      box.render(isoCanvas);
      if(y === (rc - 1)) {
  	    box.renderBY(isoCanvas);
      }
      if(x === (rc - 1)) {
  	    box.renderBX(isoCanvas);
      }
    }
  }
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].print();
  }
  
});

