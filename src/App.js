import logo from "./logo.svg";
import { React, Component } from "react";
import "./App.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <span>Wheaton Trail Reports</span>
        <ul>
          <li>Trails</li>
          <li>Reports</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
}

class TrailSelector extends Component {
  constructor() {
    super();
    let collector = [
      `<label for="trails">Select a Trail</label>`,
      `<select name="trails" id="trails">`,
    ];
    trails.names.forEach((item) => {
      collector.push(<select value={item}>{item}</select>);
    });
    collector.push("</select>");
    return collector.join("<br>");
  }
}

class SubmitReport extends Component {
  render() {
    return (
      <main>
        <div>
          <form>
            <input type="date">Select Date</input>
            <input type="text">Trail Conditions</input>
            <input type="text">Trail Hazards</input>
            <input type="text">Needed Maintenance</input>
          </form>
        </div>
      </main>
    );
  }
}

class ReportViewer extends Component {}

class App extends Component {
  
}

export default App;
