import React from 'react';

interface ArrowsPreviewProps {
  side: number;
}

interface ArrowKeyPress {
  code: number;
  active: boolean;
  gridArea: string;
  id: string;
  dir: number;
}

let UP: ArrowKeyPress = { code: 38, dir: 0b1000, active: false, gridArea: "n", id: "upArrowKey" };
let DOWN: ArrowKeyPress = { code: 40, dir: 0b0100, active: false, gridArea: "s", id: "downArrowKey" };
let LEFT: ArrowKeyPress = { code: 37, dir: 0b0010, active: false, gridArea: "w", id: "leftArrowKey" };
let RIGHT: ArrowKeyPress = { code: 39, dir: 0b0001, active: false, gridArea: "e", id: "rightArrowKey" };
let NW: ArrowKeyPress = { code: 0, dir: 0b1010, active: false, gridArea: "n", id: "nwArrowKey" };
let NE: ArrowKeyPress = { code: 0, dir: 0b1001, active: false, gridArea: "s", id: "neArrowKey" };
let SW: ArrowKeyPress = { code: 0, dir: 0b0110, active: false, gridArea: "w", id: "swArrowKey" };
let SE: ArrowKeyPress = { code: 0, dir: 0b0101, active: false, gridArea: "e", id: "seArrowKey" };
let SPACE: ArrowKeyPress = { code: 32, dir: 0, active: false, gridArea: "c", id: "spaceKey" };
const directions = [UP, LEFT, DOWN, RIGHT];
const allDirections = [UP, LEFT, DOWN, RIGHT, NW, NE, SW, SE];

function handleKeyboardEvent(keyPress: ArrowKeyPress, keyDown: boolean) {
  let keyButton = document.getElementById(keyPress.id);
  let color = keyDown ? "red" : "black";
  if(keyButton != null) {
    keyButton.style.color = color;
  }
}

function setKeyPressActive(keyPress: ArrowKeyPress, keyDown: boolean) {
  keyPress.active = keyDown;  
}

function dec2bin(dec: number){
    return (dec >>> 0).toString(2);
}

class ArrowsPreview extends React.Component<ArrowsPreviewProps> {
  componentDidMount() {
    const keyListener = function(e: KeyboardEvent) {
      if(SPACE.code === e.keyCode) {
        handleKeyboardEvent(SPACE, (e.type === "keydown"));
      } else {
        let direction = 0b0000;
        directions.forEach(keyPress => {
            if(keyPress.code === e.keyCode) {
              keyPress.active = (e.type === "keydown");
            }
            if(keyPress.active) {
              direction |= keyPress.dir;              
            }
        });
        allDirections.forEach(element => {
          handleKeyboardEvent(element, element.dir === direction)
        });
      }
    };
    document.addEventListener("keydown", keyListener, false);
    document.addEventListener("keyup", keyListener, false);
  }
  render() {
    return (<div className="arrowsPreview" style={Object.assign({ width: this.props.side + "px" }, { height: this.props.side + "px" })}>
      <div id="upArrowKey" className="arrowsKeyPreview" style={Object.assign({ gridArea: "n" })}>&#x025B2;</div>
      <div id="leftArrowKey" className="arrowsKeyPreview" style={Object.assign({ gridArea: "w" })}>&#x025C0;</div>
      <div id="rightArrowKey" className="arrowsKeyPreview" style={Object.assign({ gridArea: "e" })}>&#x025B6;</div>
      <div id="downArrowKey" className="arrowsKeyPreview" style={Object.assign({ gridArea: "s" })}>&#x025BC;</div>      
      
      <div id="spaceKey" className="arrowsKeyPreview" style={Object.assign({ gridArea: "c" })}>&#x025FC;</div>

      <div id="nwArrowKey" className="arrowsKeyPreviewLight" style={Object.assign({ gridArea: "nw" })}>&#x025E4;</div>
      <div id="neArrowKey" className="arrowsKeyPreviewLight" style={Object.assign({ gridArea: "ne" })}>&#x025E5;</div>
      <div id="swArrowKey" className="arrowsKeyPreviewLight" style={Object.assign({ gridArea: "sw" })}>&#x025E3;</div>
      <div id="seArrowKey" className="arrowsKeyPreviewLight" style={Object.assign({ gridArea: "se" })}>&#x025E2;</div>

    </div>);
  }
}

export default ArrowsPreview;