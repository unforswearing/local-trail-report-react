import React from "react"
import trails_list from "./trails_list";
import { Component } from "react";

class TrailListing extends Component {
  constructor() {
    super();
    const trailNames = Object.keys(trails_list["wheaton regional"].trails);

    let tmpwebsite =
      "https://www.montgomeryparks.org/parks-and-trails/wheaton-regional-park/";

    const t = trailNames;
    const list = [];

    list.push("<ul>");

    t.forEach((item) => {
      list.push(
        <li>
          <a href={tmpwebsite}>{item}</a>
        </li>
      );
    });

    list.push("</ul>");
  }
}

export default TrailListing;
