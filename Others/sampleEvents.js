// import using node: url
import { EventEmitter } from "node:events";

// initialize the custom event object
const customEvent = new EventEmitter();

// when the event is happened
customEvent.on("online", () => {
  console.log("custom event handler called");
});

// emit the event
customEvent.emit("online");
