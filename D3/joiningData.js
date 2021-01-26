
// const data = [
//     {width: 200, height: 100, fill: 'purple'}
//   ];
  
//   // select the svg container first
//   const svg = d3.select('svg');
  

  // const rect = svg.select('rect')
  //   .data(data)
  //   .attr('width', function(d,i,n){ console.log(i,n); return d.width })
  //   .attr('height', function(d){ return d.height })
  //   .attr('fill', function(d){ return d.fill });
  

    // console.log(rect)

  // svg.select('rect')
  // .data(data)
  // .attr('width', (d,i,n) => {console.log(n[i]); return d.width})
  // .attr('height',function(d){ console.log(this); return d.height })
  // .attr('fill', d => d.fill);




const data = [
    {width: 200, height: 100, fill: 'purple'},
    {width: 100, height: 60, fill: 'pink'},
    {width: 50, height: 30, fill: 'red'}
  ];
  
  // select the svg container first
  const svg = d3.select('svg');
  
  // console.log(d3.selectAll('rect').data(data))
  svg.selectAll('rect') 
    .data(data)
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);
  