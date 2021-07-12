import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <span>Wheaton Trail Report</span>
        <ul>
          <li>Reports</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
}

function App() {
  return <div className="App"></div>;
}

export default App;
