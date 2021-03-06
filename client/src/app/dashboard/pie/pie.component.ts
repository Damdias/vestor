import { Component, OnInit, Input } from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "app-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"],
})
export class PieComponent implements OnInit {
  constructor() {}
  @Input() dataSource: Array<{ company: string; shares: number }> = [];
  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private svg;
  private margin = 50;
  private width = 300;
  private height = 300;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  private createSvg(): void {
    this.svg = d3
      .select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }
  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(this.dataSource.map((d) => d.shares.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }
  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.shares));

    // Build the pie chart
    this.svg
      .selectAll("pieces")
      .data(pie(this.dataSource))
      .enter()
      .append("path")
      .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr("fill", (d, i) => this.colors(i))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg
      .selectAll("pieces")
      .data(pie(this.dataSource))
      .enter()
      .append("text")
      .text((d) => d.data.company)
      .attr("transform", (d) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }
}
