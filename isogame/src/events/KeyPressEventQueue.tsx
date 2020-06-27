import ArrowKeyPress from '../interfaces/ArrowKeyPress';

export default class KeyPressEventQueue {
  
  static handle: KeyPressEventQueue = new KeyPressEventQueue();
  
  private keyPressEvents: ArrowKeyPress[];
  
  private constructor() {
    this.keyPressEvents = [];
  }
  
  static getInstance() {
    if(KeyPressEventQueue.handle === null) {
      KeyPressEventQueue.handle = new KeyPressEventQueue();
    }
    return KeyPressEventQueue.handle;
  }
  
  public pushKeyPressEvent(kp: ArrowKeyPress) {
    console.log("Pushing key press event");
    console.log(kp);
    this.keyPressEvents.push(kp);
  }
  
}