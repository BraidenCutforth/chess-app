import * as React from "react";
import "../css/App.css";
import ChessBoard from "./ChessBoard";

// const logo = require('../img/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChessBoard/>
      </div>
    );
  }
}

export default App;
