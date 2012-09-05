$(document).ready(function(){







//point in polygon algorithm
var inside = function (point, polygon) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0], yi = polygon[i][1];
        var xj = polygon[j][0], yj = polygon[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};










//declare variables
var map, cloudmade, sanAntonio, polygonPoints  
 
 //instantiate map
 map = new L.Map('map');
 
 cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/d4334cd6077140e3b92ccfae2b363070/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});

//sets map to san antonio
sanAntonio = new L.LatLng(29.4238889, -98.4933333); // geographical point (longitude and latitude)

//sets the mapview with a zoom level uses cloudmade
 map.setView(sanAntonio, 13).addLayer(cloudmade);






//array that holds polygon points
polygonPoints = [];



var polygon = new L.Polygon(polygonPoints);
map.addLayer(polygon);













//begins map click function
map.on('click', function(e) {  

    
  var marker = new L.Marker(e.latlng, {draggable: true});
  polygonPoints.push(e.latlng);
  var markerId = polygonPoints.length -1 
  map.addLayer(marker);
  polygon.setLatLngs(polygonPoints);
  
    
  


  var list_latlng   = $("#lat_lng_presenter").html();
  var template = Handlebars.compile(list_latlng);
  var data = {latitude: e.latlng.lat , longitude: e.latlng.lng}
  $('#latitude_longitude').append(template(data));

  marker.on('drag', function(){
    var locationWhileDrag = marker.getLatLng();
    $('#first_marker').val(locationWhileDrag);
    polygonPoints.splice(markerId,1,locationWhileDrag);
    polygon.setLatLngs(polygonPoints);
  });


  
});
//ends the click function





//It Works!
//this is a hardcoded polygon
//the next step is to make this dynamic so that the polygonTest variable will be an array of the ACTUAL polygon latlng that we are drawing.
// var polygonTest = [ [ 29.41358201983055, -98.47354888916016 ], [ 29.395038139528772, -98.45706939697266 ], [ 29.41507734665064, -98.43011856079102 ] ];

// console.log([
//     inside([ 29.418067934281137, -98.49260330200195 ], polygonTest),
//     inside([ 4.9, 1.2 ], polygonTest),
//     inside([ 1.8, 1.1 ], polygonTest)
// ]);



//Requirements
var polygonToArray = function(polygon){
  var latLngArray = []
  $.each(polygonPoints, function(index, value){
    var lat = value.lat;
    var lng = value.lng;

    var toArray = [lat , lng];

    latLngArray.push(toArray);  
  })
  return latLngArray
}




$('.button').click(function(){
  var theThing = new polygonToArray;
  var polygonTest = theThing;
  var lat = $('#lat').val();
  var lng = $('#lng').val();

alert(inside([ lat, lng ], polygonTest));

});



var geocoder = new google.maps.Geocoder();

$("#address").autocomplete({
      //This bit uses the geocoder to fetch address values
      source: function(request, response) {
        geocoder.geocode( {'address': request.term }, function(results, status) {
          response($.map(results, function(item) {
            return {
              label:  item.formatted_address,
              value: item.formatted_address,
              latitude: item.geometry.location.lat(),
              longitude: item.geometry.location.lng()
            }
          }));
        })
      },
      //This bit is executed upon selection of an address
      select: function(event, ui) {
        $("#lat").val(ui.item.latitude);
        $("#lng").val(ui.item.longitude);
        }


    });






});
//ends the document ready function







//some stuff that may be useful in the future 

// //When view resets use the small icon if zoom level is less than 13
//   map.on('viewreset', function(){
//   if(map.getZoom() < 13){
//       console.log(map.getZoom()) 
//     }
//   });



