import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import trails_list from "./trails_list"
import "./index.css";

const trails_list = {
  "wheaton regional": {
    address: "2000 Shorefield Road, Wheaton, Maryland 20902",
    phone: "3014952595",
    website:
      "https://www.montgomeryparks.org/parks-and-trails/wheaton-regional-park/",
    trails: {
      "acorn woods": {
        id: 1,
        plus_code_trailhead: "3X5C+9G",
        trail_length: 0.8,
        difficulty: "easy",
      },
      arcola: {
        id: 2,
        plus_code_trailhead: "3X59+M2",
        distance: 0.7,
        difficulty: "easy",
      },
      "deer hollow": {
        id: 3,
        plus_code_trailhead: "3X47+8C",
        trail_length: 1.6,
        difficulty: "easy",
      },
      "oak ridge": {
        id: 4,
        plus_code_trailhead: "3X47+8C",
        trail_length: 0.1,
        difficulty: "easy",
      },
      "pine lake": {
        id: 5,
        plus_code_trailhead: "3X58+79",
        trail_length: 0.3,
        difficulty: "easy",
      },
      "tom's trail": {
        id: 6,
        plus_code_trailhead: "3X58+79",
        trail_length: 0.3,
        difficulty: "intermediate",
      },
      "wheaton loop": {
        id: 7,
        plus_code_trailhead: "3X59+VQ",
        trail_length: 1.6,
        difficulty: "intermediate",
      },
    },
  },
};

/*
        {trail_names.forEach((trail) => (
          <option value={trail}>{trail}</option>
        ))}
        */

function Navigation() {
  return (
    <Router>
      <div>
        <nav style={{ height: "10vh" }}>
          <div>
            <Link to="/trails">
              <button style={{ float: "left" }}>Trails</button>
            </Link>
            <Link to="/reports">
              <button style={{ float: "left" }}>Reports</button>
            </Link>
            <Link to="/about">
              <button style={{ float: "left" }}>About</button>
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/trails">
            <TrailsIndex />
          </Route>
          <Route path="/reports">
            <ReportsIndex />
          </Route>
          <Route path="/about">
            <AboutIndex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function formattedTrailsList() {

}

function TrailSelector() {
  const trail_names = Object.keys(trails_list["wheaton regional"].trails);
  return (
    <div>
      <label for="trails">Select a Trail</label>
      <br />
      <select name="trails" className="trails">
        <option value="acorn woods">acorn woods</option>
        <option value="arcola">arcola</option>
        <option value="deer hollow">deer hollow</option>
        <option value="oak ridge">oak ridge</option>
        <option value="pine lake">pine lake</option>
        <option value="tom's trail">tom's trail</option>
        <option value="wheaton loop">tom's trail</option>
      </select>
    </div>
  );
}

function TrailRating() {
  return (
    <div>
      <input type="radio" name="rating" value="0"></input>
      <label for="0">0</label>
      <input type="radio" name="rating" value="1"></input>
      <label for="1">1</label>
      <input type="radio" name="rating" value="2"></input>
      <label for="2">2</label>
      <input type="radio" name="rating" value="3"></input>
      <label for="3">3</label>
      <input type="radio" name="rating" value="4"></input>
      <label for="4">4</label>
    </div>
  );
}

function ReportsIndex() {
  return (
    <div style={{ width: "75%", paddingTop: "10px" }}>
      <h1 style={{ float: "left", top: "30px" }}>Wheaton Trail Reports</h1>
      <br />
      <br />
      <br />
      <br />
      <Navigation />
      <main>
        <div>
          <details>
            <summary>Submit a report</summary>
            <p></p>
            <TrailSelector />
            <p></p>
            <p></p>
            <form>
              Select Date
              <input type="datetime-local" />
              <p></p>
              Trail Conditions
              <textArea />
              <p></p>
              Trail Hazards
              <textArea />
              <p></p>
              Needed Maintenance
              <textArea />
              <p></p>
              Overall Trail Quality
              <TrailRating />
              <p></p>
            </form>
          </details>
        </div>
      </main>
    </div>
  );
}

function TrailsIndex() {
  // <formattedTrailsList>
  return <h1>Trails</h1>;
}

function AboutIndex() {
  return <h1>About</h1>;
}

ReactDOM.render(<ReportsIndex />, document.getElementById("root"));
