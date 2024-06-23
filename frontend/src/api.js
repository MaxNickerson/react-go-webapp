// src/api.js
var socket;

let connect = () => {
  console.log("Attempting Connection...");

  socket = new WebSocket("ws://localhost:8080/ws");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg.data);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg) => {
  console.log("sending msg: ", msg);
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(msg);
  } else {
    console.log("Socket is not open. Cannot send message.");
  }
};

export { connect, sendMsg };
