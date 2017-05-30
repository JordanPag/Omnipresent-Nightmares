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

function move() {
  if(yDist>=xDist){
    console.log("up/down");
  }
}

window.onload = function(){
  var x = 1;
  while(x=x){
    move();
    sleep(250);
  }
}

