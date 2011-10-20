var po = org.polymaps;

// Compute noniles.
var quantile = pv.Scale.quantile()
    .quantiles(9)
    .domain(pv.values(tonnes))
    .range(0, 8);

// Date format.
var format = pv.Format.date("%B %e, %Y");

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .center({lat: -41, lon: 173})
    .zoom(5)
    .zoomRange([5, 5])
    // .add(po.interact());

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/40af92d97d9948579897d77848fee3ac" // http://cloudmade.com/register
    + "/20760/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

d3.json("/nz_regions.json", function(json) {
  map.add(po.geoJson()
      .features(json.features)
      .on("load", load))
})


// map.add(po.compass()
    // .pan("none"));

if (typeof preferredColor == 'undefined') {
  var color = "Reds";
} else {
  var color = preferredColor;
}
map.container().setAttribute("class", color);

function load(e) {
  for (var i = 0; i < e.features.length; i++) {
    var feature = e.features[i], d = tonnes[feature.data.id];
    if (d == undefined) {
      feature.element.setAttribute("display", "none");
    } else {
      feature.element.setAttribute("class", "feature q" + quantile(d) + "-" + 9);
      feature.element.appendChild(po.svg("title").appendChild(
          document.createTextNode(feature.data.properties.name + ": " + d))
          .parentNode);
      feature.element.addEventListener("click", function(me){
        d3.selectAll('.feature').classed('active', false);
        d3.select(me.target).classed("active", true);
      }, true);
    }
  }
}
