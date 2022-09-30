import React, { Component } from "react";
import Table from "./Table"
import Info from './Info'
import Form from './Form'

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Pokemon Weather Monitor</h1>
          <Form />
          <Info />
        </div>
      )
    }
  }


export default App