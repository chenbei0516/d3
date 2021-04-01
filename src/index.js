import "./styles.css";
import * as d3 from "d3";

const matrix = [
  [11975, 5871, 8916, 2868],
  [1951, 10048, 2060, 6171],
  [8010, 16145, 8090, 8045],
  [1013, 990, 940, 6907]
];

d3.select("body")
  .append("table")
  .selectAll("tr")
  .data(matrix)
  .join("tr")
  .selectAll("td")
  .data((d) => d)
  .join("td")
  .text((d) => d);

const data = [
  { name: "Locke", number: 4 },
  { name: "Reyes", number: 8 },
  { name: "Ford", number: 15 },
  { name: "Jarrah", number: 16 },
  { name: "Shephard", number: 23 },
  { name: "Kwon", number: 42 }
];

d3.selectAll("#demo div")
  .data(data, function (d) {
    console.log(d, this);
    return d ? d.name : this.id;
  })
  .text((d) => d.name);

const svg = d3.select("svg");
svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 25);

svg
  .selectAll("circle")
  .data([{}, { x: 150, y: 100 }, { x: 200, y: 100 }])
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("r", 25);
