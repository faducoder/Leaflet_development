$(document).ready(function(){

var map, cloudmade, sanAntonio, polygonPoints  
 
 
 map = new L.Map('map');
 
 cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/d4334cd6077140e3b92ccfae2b363070/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});


 sanAntonio = new L.LatLng(29.4238889, -98.4933333); // geographical point (longitude and latitude)


 map.setView(sanAntonio, 13).addLayer(cloudmade);




polygonPoints = [];

var polygon = new L.Polygon(polygonPoints);
map.addLayer(polygon);

map.on('click', function(e) {  

    
    
   //this sets up an icon to be replaced when redraw. 
   var MyIcon = L.Icon.extend({
    iconUrl: 'marker.png',
    iconSize: new L.Point(10, 16),
    shadowSize: new L.Point(10, 16),
    iconAnchor: new L.Point(10, 16)
    });

    var icon = new MyIcon(); 
    //this sets up an icon to be replaced when redraw.
    
    
    
  var marker = new L.Marker(e.latlng, {draggable:true});
  polygonPoints.push(e.latlng);
  var markerId = polygonPoints.length -1 
  map.addLayer(marker);
  polygon.setLatLngs(polygonPoints);
  
    
  
  marker.on('drag', function(){
    var locationWhileDrag = marker.getLatLng();
    $('#first_marker').val(locationWhileDrag);
    polygonPoints.splice(markerId,1,locationWhileDrag);
    polygon.setLatLngs(polygonPoints);
  });      

  
  //When view resets use the small icon if zoom level is less than 13
  map.on('viewreset', function(){
    if(map.getZoom() < 13){
  
     marker.setIcon(icon);
    }
  });

});





    
      
});





