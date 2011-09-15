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
    .zoomRange([4, 10])
    .zoom(5)
    .add(po.interact());

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/40af92d97d9948579897d77848fee3ac" // http://cloudmade.com/register
    + "/20760/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

var centroids = {}
var original_zoom;
d3.json("/nz_regions.json", function(json) {
  var path = d3.geo.path();
  for (var i = 0; i < json.features.length; i++) {
    var feature = json.features[i];
    var centroid = path.centroid(feature);
    centroids[feature.id] = centroid;
    if(tonnes[feature.id]) {
      original_zoom = feature.properties.zoom;
      map.center({lat:feature.geometry.coordinates[0][0][1], lon:feature.geometry.coordinates[0][0][0]})
        .zoom(feature.properties.zoom)
    }
  }
  map.add(po.geoJson()
      .features(json.features)
      .on("load", load))
})


map.add(po.compass()
    .pan("none"));

map.container().setAttribute("class", "Reds");

var active_centroid;
function load(e) {
  for (var i = 0; i < e.features.length; i++) {
    var feature = e.features[i], d = tonnes[feature.data.id];
    if (d == undefined) {
      feature.element.setAttribute("class", "inactive");
    } else {
      feature.element.setAttribute("class", "active feature q" + quantile(d) + "-" + 9);
      feature.element.appendChild(po.svg("title").appendChild(
          document.createTextNode(feature.data.properties.name + ": " + d + " tonnes"))
          .parentNode);
      active_centroid = centroids["" + feature.data.id + ""];
    }
  }
}


function getPathArea( segList ) 
{				
  var area = 0;
  var seg1, seg2;						// represents a path command
  var nPts = segList.numberOfItems;
  
  // let's see if the last item is a 'Z' (it should be)
  if ( segList.getItem( nPts - 1 ).pathSegTypeAsLetter.toLowerCase() == 'z' ) nPts --;
  var j = nPts - 1;
  segItem_list:
  for ( var i = 0; i < nPts; j=i++ )
  {
    seg1 = segList.getItem( i );
    seg2 = segList.getItem( j );
    area += seg1.x * seg2.y;
      area -= seg1.y * seg2.x;
  }
  area /= 2;
  return Math.abs( area );
}

// All hail Zachary Forest Johnson of indiemaps.com http://indiemaps.com/blog/2011/02/noncontiguous-cartograms-in-openlayers-and-polymaps/
function scale(ratio) {
  if (ratio < 0.05) {
    map.zoom(original_zoom + 1);
  } else {
    map.zoom(original_zoom);
  }
  var ee = d3.select('.active')

  // now let's loop through again and scale em!
  for (var i = 0; i < ee.length; i++) {
    var element = ee[i][0];
    var featureArea = 0;
    
    // f.element is either gonna be a SVGPathElement or a SVGGElement						
    if ( element.pathSegList ) { // SVGPathElement
      featureArea = getPathArea( element.pathSegList );
    } else { // SVGGElement
      for ( var ii = 0; ii < element.childNodes.length; ii++ ) 
        featureArea += getPathArea( element.childNodes[ ii ].pathSegList );
    }
    
    // var desiredArea = ( f.data.properties[ attributeName ] / maxValue ) * maxArea;
    var scale = ratio;
    var bbox = element.getBBox();		
    var centerX = bbox.x + .5 * bbox.width, centerY = bbox.y + .5 * bbox.height;			
    element.setAttribute(
      "transform", 
      "scale(" + scale + " " + scale +")"		
      + " " + 				
      "translate(" + -( ( centerX * scale - centerX ) / scale ) + " " + -( ( centerY * scale - centerY ) / scale ) + ")"
    );						
  }
}




