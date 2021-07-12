import StormDB, { localFileEngine } from "stormdb";

const getTrailsDB = () => {
  const trailsEngine = new localFileEngine("./db/trails.stormdb");
  const tdatabase = new StormDB(trailsEngine);
  const wheaton_regional = tdatabase.get("wheaton regional");
  const trails = wheaton_regional.get("trails").value();
  return trails;
};

const trails = getTrailsDB();
trails.names = Object.keys(trails);

class TrailListing extends Component {
  constructor() {
    let tmpwebsite =
      "https://www.montgomeryparks.org/parks-and-trails/wheaton-regional-park/";

    const t = trails.names;
    const list = [];

    list.push("<ul>")

    t.forEach((item) => {
      list.push(
        <li>
          <a href={tmpwebsite}>{item}</a>
        </li>
      );
    });

    list.push("</ul>")
  }
  
  render() { return list.join('') }
}
