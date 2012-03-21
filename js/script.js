$(document).ready(function(){

var map = new L.Map('map');

var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/d4334cd6077140e3b92ccfae2b363070/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});

var sanAntonio = new L.LatLng(29.4238889, -98.4933333); // geographical point (longitude and latitude)
map.setView(sanAntonio, 12).addLayer(cloudmade);




polygonPoints = [];


var polygon = new L.Polygon(polygonPoints);
map.addLayer(polygon);


map.on('click', function(e) {  
    
    polygonPoints.push(e.latlng);
    polygon.setLatLngs(polygonPoints);
      
});




 

    
    
 
});
