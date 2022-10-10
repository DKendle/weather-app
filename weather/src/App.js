import React, { Component } from "react";
import Table from "./Table"
import Info from './Info'

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Pokemon Weather Monitor</h1>
          <Info />
        </div>
      )
    }
  }


export default App