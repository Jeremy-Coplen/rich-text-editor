import React, { Component } from "react"

import Quill, { QuillClass } from "./Components/Quill/Quill"
import "./App.scss"

class App extends Component {
  render() {
    return (
      <div className="app">
        <p>Quill Hook Editor</p>
        <Quill />
        <p>Quill Class Editor</p>
        <QuillClass />
      </div>
    )
  }
}

export default App