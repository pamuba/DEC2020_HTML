// Width and height
var chart_width     =   800;
var chart_height    =   600;

// Create SVG
var svg             =   d3.select("#chart")
    .append("svg")
    .attr("width", chart_width)
    .attr("height", chart_height);