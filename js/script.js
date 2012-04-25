$(document).ready(function(){

var map, cloudmade, sanAntonio, polygonPoints  
 
 
 map = new L.Map('map');
 cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/d4334cd6077140e3b92ccfae2b363070/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});


 sanAntonio = new L.LatLng(29.4238889, -98.4933333); // geographical point (longitude and latitude)


 map.setView(sanAntonio, 13).addLayer(cloudmade);

//everything above sets up the map



function enableClick(){
  map.on('click', function(e) {    
    var marker = new L.Marker(e.latlng, {draggable:true});
    map.addLayer(marker);
  });//closes the click function

  this.disableClick = function(){
    map.off('click');
  }

}



//when 
$('#enable_click').click(function(){
  var enable_click = new enableClick()

  $('#disable_click').click(function(){
    enable_click.disableClick;
  });

});





    
    
 
});//closes the docuent ready function
