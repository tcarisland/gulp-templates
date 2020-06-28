import React from 'react';
import ArrowKeyButton from './ArrowKeyButton';
import ArrowKeyPress from '../interfaces/ArrowKeyPress';
import ArrowKeyProps from '../interfaces/ArrowKeyProps';
import KeyPressEventQueue from '../events/KeyPressEventQueue';
import ArrowKeyButtons from '../resources/ArrowKeyButtons.json';

interface ArrowsPreviewProps {
  side: number;
}

let UP: ArrowKeyPress = { code: 38, dir: 0b1000, active: false, id: "upArrowKey" };
let DOWN: ArrowKeyPress = { code: 40, dir: 0b0100, active: false, id: "downArrowKey" };
let LEFT: ArrowKeyPress = { code: 37, dir: 0b0010, active: false, id: "leftArrowKey" };
let RIGHT: ArrowKeyPress = { code: 39, dir: 0b0001, active: false, id: "rightArrowKey" };
let NW: ArrowKeyPress = { dir: 0b1010, active: false, id: "nwArrowKey" };
let NE: ArrowKeyPress = { dir: 0b1001, active: false, id: "neArrowKey" };
let SW: ArrowKeyPress = { dir: 0b0110, active: false, id: "swArrowKey" };
let SE: ArrowKeyPress = { dir: 0b0101, active: false, id: "seArrowKey" };
let SPACE: ArrowKeyPress = { code: 32, dir: 0, active: false, id: "spaceKey" };

const directions = [UP, LEFT, DOWN, RIGHT];
const allDirections = [UP, LEFT, DOWN, RIGHT, NW, NE, SW, SE];

function handleKeyboardEvent(keyPress: ArrowKeyPress, keyDown: boolean) {
  let keyButton = document.getElementById(keyPress.id);
  let color = keyDown ? "red" : "black";
  if (keyButton != null) {
    keyButton.style.color = color;
  }
  if (keyDown) {
    KeyPressEventQueue.getInstance().pushKeyPressEvent(keyPress);
  }
}

class ArrowsPreview extends React.Component<ArrowsPreviewProps> {
  componentDidMount() {
    const keyListener = function(e: KeyboardEvent) {
      if (SPACE.code === e.keyCode) {
        handleKeyboardEvent(SPACE, (e.type === "keydown"));
      } else {
        let direction = 0b0000;
        directions.forEach(keyPress => {
          if (keyPress.code === e.keyCode) {
            keyPress.active = (e.type === "keydown");
          }
          if (keyPress.active) {
            direction |= keyPress.dir;
          }
        });
        allDirections.forEach(element => {
          handleKeyboardEvent(element, element.dir === direction);
        });
      }
    };
    document.addEventListener("keydown", keyListener, false);
    document.addEventListener("keyup", keyListener, false);
  }
  render() {
    const arrowsPreviewStyle = Object.assign({ width: this.props.side + "px" }, { height: this.props.side + "px" });
    return (<div className="arrowsPreview" style={arrowsPreviewStyle}>
      {
        ArrowKeyButtons.map((element) => React.createElement(ArrowKeyButton, element as ArrowKeyProps, null))
      }
    </div>);
  }
}

export default ArrowsPreview;