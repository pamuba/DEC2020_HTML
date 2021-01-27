// Width and height
var chart_width     =   800;
var chart_height    =   600;

var color = d3.scaleQuantize().range(
    ['rgb(255,245,240)','rgb(254,224,210)','rgb(252,187,161)',
    'rgb(252,146,114)','rgb(251,106,74)','rgb(239,59,44)',
    'rgb(203,24,29)','rgb(165,15,21)','rgb(103,0,13)']
);

//Projection function
var projection = d3.geoAlbersUsa()
                    .scale([chart_width])
                    .translate([chart_width/2,chart_height/2]);
var path = d3.geoPath(projection);
            

// Create SVG
var svg             =   d3.select("#chart")
    .append("svg")
    .attr("width", chart_width)
    .attr("height", chart_height);


//Load the data
d3.json('zombie-attacks.json').then(function(zombie_data){
    color.domain([
        d3.min(zombie_data, function(d){
            return d.num;
        }),
        d3.max(zombie_data, function(d){
            return d.num;
        })
    ])

d3.json('us.json').then(function(us_data){
    us_data.features.forEach(function(us_e, us_i){
        zombie_data.forEach(function(z_e,z_i){
            if(us_e.properties.name !== z_e.state){
                return null;
            }
            us_data.features[us_i].properties.num = parseFloat(z_e.num);
        });
    });
    // console.log(us_data);
    svg.selectAll('path')
        .data(us_data.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', function(d){
            var num = d.properties.num;
            console.log(color(num));
            return num ? color(num) : '#ddd';
        })
        .attr('stroke',  '#fff')
        .attr('stroke-width', 1);
 });
});