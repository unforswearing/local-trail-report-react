import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import trails_list from "./trails_list"
import "./index.css";

const trails_list = {
  "wheaton regional": {
    address: "2000 Shorefield Road, Wheaton, Maryland 20902",
    phone: "(301) 495-2595",
    website:
      "https://www.montgomeryparks.org/parks-and-trails/wheaton-regional-park/",
    trails: {
      "Acorn Woods": {
        id: 1,
        plus_code_trailhead: "3X5C+9G",
        trail_length: 0.8,
        difficulty: "easy",
      },
      Arcola: {
        id: 2,
        plus_code_trailhead: "3X59+M2",
        distance: 0.7,
        difficulty: "easy",
      },
      "Deer Hollow": {
        id: 3,
        plus_code_trailhead: "3X47+8C",
        trail_length: 1.6,
        difficulty: "easy",
      },
      "Oak Ridge": {
        id: 4,
        plus_code_trailhead: "3X47+8C",
        trail_length: 0.1,
        difficulty: "easy",
      },
      "Pine Lake": {
        id: 5,
        plus_code_trailhead: "3X58+79",
        trail_length: 0.3,
        difficulty: "easy",
      },
      "Tom's Trail": {
        id: 6,
        plus_code_trailhead: "3X58+79",
        trail_length: 0.3,
        difficulty: "intermediate",
      },
      "Wheaton Loop": {
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
    <div>
      <HashRouter>
        <div>
          <nav style={{ height: "10vh" }}>
            <Link exact="" to="/">
              <button style={{ float: "left" }}>Home</button>
            </Link>
            <Link to="/submit">
              <button style={{ float: "left" }}>Submit</button>
            </Link>
            <Link to="/view">
              <button style={{ float: "left" }}>View</button>
            </Link>
          </nav>
          <Switch>
            <Route exact="" path="/">
              <Index />
            </Route>
            <Route path="/submit">
              <SubmitIndex />
            </Route>
            <Route path="/view">
              <ViewIndex />
            </Route>
            <Route path="/process">
              <ProcessIndex />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

function ViewIndex() {
  return (
    <div>
      <h1>Wheaton Trail Reports</h1>
      <h2>View Reports</h2>
    </div>
  );
}

function SubmitIndex() {
  function TrailSelector() {
    return (
      <div>
        <label for="trails">Select a Trail</label>
        <br />
        <select name="trails" className="trails">
          <option value="acorn woods">Acorn Woods</option>
          <option value="arcola">Arcola</option>
          <option value="deer hollow">Deer Hollow</option>
          <option value="oak ridge">Oak Ridge</option>
          <option value="pine lake">Pine Lake</option>
          <option value="tom's trail">Tom's Trail</option>
          <option value="wheaton loop">Wheaton Loop</option>
        </select>
      </div>
    );
  }

  function TrailRating() {
    return (
      <div>
        <input type="radio" name="overall" value="0"></input>
        <label for="0">0 - Bad Condition / Inaccessible</label>
        <br />
        <input type="radio" name="overall" value="1"></input>
        <label for="1">1 - Poor Condition / Dangerous</label>
        <br />
        <input type="radio" name="overall" value="2"></input>
        <label for="2">2 - Good Condition</label>
        <br />
        <input type="radio" name="overall" value="3"></input>
        <label for="3">3 - Great Condition</label>
        <br />
        <input type="radio" name="overall" value="4"></input>
        <label for="4">4 - Excellent Condition</label>
        <br />
      </div>
    );
  }

  return (
    <div>
      <h1>Wheaton Trail Reports</h1>
      <h2>Submit a Trail Report</h2>
      You are welcome to submit a trail report for others to view. Click "Submit
      a report" below to begin your report.
      <br />
      <br />
      <TrailSelector />
      <p></p>
      <p></p>
      <form action="/process">
        Select Date
        <input name="date" type="datetime-local" />
        <p></p>
        Trail Conditions
        <textArea name="conditions" />
        <p></p>
        Trail Hazards
        <textArea name="hazards" />
        <p></p>
        Needed Maintenance
        <textArea name="maintenance" />
        <p></p>
        Overall Trail Quality
        <TrailRating />
        <p></p>
        <p></p>
        <input type="submit"></input>
      </form>
      <br />
      <br />
    </div>
  );
}

function ProcessIndex() {
  function reportObject(props) {
    // https://stackoverflow.com/a/901144/3148350
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    // this.submission = params;
    return params;
  }
  const r = reportObject();
  let res
  if (r.date) {
    res = <div>{r}</div>;
  } else {
    res = <pre>404</pre>
  }
  return res
}

function Index() {
  return (
    <div>
      <h1>Wheaton Trail Reports</h1>
      <div>
        <h2>About</h2>
        Wheaton Regional Park is located in Wheaton, Maryland. The park spans
        almost 540 acres and is home to botanical gardens, a nature center, and
        several hiking trails that feature various plant species native to the
        area. Open sunrise to sunset.
        <br />
        <br />
        This site allows you to submit a general trail report by answering a few
        basic questions. Please see the "Reports" section of this site for more
        details.
        <br />
        <br />
        Wheaton Regional park contains the following trails:
        <br />
        <br />
        {Object.keys(trails_list["wheaton regional"].trails).map((name) => (
          <div>
            <li>
              {name} (length:{" "}
              {trails_list["wheaton regional"].trails[name].trail_length || 0}{" "}
              mi.)
            </li>
          </div>
        ))}
        <br />
        <br />
        <h2>More Information</h2>
        <strong>Address: </strong>
        {trails_list["wheaton regional"].address}
        <br />
        <strong>Phone: </strong>
        {trails_list["wheaton regional"].phone}
        <br />
        <strong>Web: </strong>
        <a href={trails_list["wheaton regional"].website}>
          {trails_list["wheaton regional"].website}
        </a>
        <br />
      </div>
    </div>
  );
}

function Site() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

ReactDOM.render(<Site />, document.getElementById("root"));
