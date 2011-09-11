// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function(){
  $('#council_selector').change(function() {
    if($(this).val() != ''){
      goToCouncilPage($(this).val());
    }
  });
});




function goToCouncilPage(id) {
  window.location = '/councils/' + id;
}


function drawSparkLine(id, data) {
  // https://gist.github.com/1133472
  // create an SVG element inside the #graph div that fills 100% of the div
  var graph = d3.select("#" + id).append("svg:svg").attr("width", "100%").attr("height", "100%");

  // X scale will fit values to match pixels (we assume 200x30 graph)
  var x = d3.scale.linear().domain([0, data.length-1]).range([0, 50]);
  // Y scale will fit values to match pixels (we assume 200x30 graph)
  var y = d3.scale.linear().domain([0, d3.max(data)]).range([20, 0]);

  // create a line object that represents the SVN line we're creating
  var line = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d,i) { 
      // console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
      // return the X coordinate where we want to plot this datapoint
      return x(i); 
    })
    .y(function(d) { 
      // console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
      // return the Y coordinate where we want to plot this datapoint
      return y(d); 
    })

  // display the line by appending an svg:path element with the data line we created above
  graph.append("svg:path").attr("d", line(data));
}
