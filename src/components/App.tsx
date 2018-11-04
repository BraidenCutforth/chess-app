import * as React from "react";
import "../css/App.css";
import GameView from "./GameView";

// const logo = require('../img/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GameView />
      </div>
    );
  }
}

export default App;
