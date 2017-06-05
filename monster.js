function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
var xDistRaw = place%32 - mPlace%32;
var yDist = Math.abs(yDistRaw);
var xDist = Math.abs(xDistRaw);
var touching = false;

function move() {
  if(yDist>=xDist){
    console.log("up/down");
  }
  
  if(mPlace == place){
    touching = true
  }
}

window.onload = function(){
  for(var i=0; i<960; i++){
    var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
    var xDistRaw = place%32 - mPlace%32;
    var yDist = Math.abs(yDistRaw);
    var xDist = Math.abs(xDistRaw);
    move();
    sleep(250);
    if(touching == true){
      AddRoom("lose");
      break;
    }
  }
}

