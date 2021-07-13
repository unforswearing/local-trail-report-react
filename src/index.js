import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
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

function TrailSelector() {
  const trail_names = Object.keys(trails_list["wheaton regional"].trails);
  return (
    <div>
      <label for="trails">Select a Trail</label><br/>
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

class HeaderNav extends Component {
  render() {
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
            <TrailSelector />
            <form>
              Select Date
              <input type="datetime-local" />
              <br />
              Trail Conditions
              <input type="text" />
              <br />
              Trail Hazards
              <input type="text" />
              <br />
              Needed Maintenance
              <input type="text" />
              <br />
              Rate Trail
              <TrailRating />
              <br />
            </form>
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<HeaderNav />, document.getElementById("root"));
