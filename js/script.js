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


map.on('click', function(e) {  
    
  var marker = new L.Marker(e.latlng, {draggable:true});
  polygonPoints.push(e.latlng);
  var markerId = polygonPoints.length -1 
  map.addLayer(marker);
  
  
  
  
  
  //I get undefined when I click the marker here 
  marker.on('drag', function(){
    var locationWhileDrag = marker.getLatLng();
    $('#first_marker').val(locationWhileDrag);
  });      

});






//this will create a polygon based on the polygonPoints array values 
//var polygon = new L.Polygon(polygonPoints);
//map.addLayer(polygon);


//map.on('click', function(e) {  
    
//    polygonPoints.push(e.latlng);
//    polygon.setLatLngs(polygonPoints);
      
//});




 

    
    
 
});
