// src/App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api"; // Import from api.js
import Header from './components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    connect();
    this.send = this.send.bind(this); // Binding the send method
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
