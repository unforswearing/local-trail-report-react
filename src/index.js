import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const site = () => {
  return (
    <div>
      <nav>
        <span>Wheaton Trail Reports</span>
        <ul>
          <li>Trails</li>
          <li>Reports</li>
          <li>About</li>
        </ul>
      </nav>
      <main>
        <div>
          <form>
            <input type="date" />Select Date
            <input type="text" />Trail Conditions
            <input type="text" />Trail Hazards
            <input type="text" />Needed Maintenance
          </form>
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(site(), document.getElementById("root"));
