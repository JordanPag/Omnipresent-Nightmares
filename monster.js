var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
var xDistRaw = place%32 - mPlace%32;
var yDist = Math.abs(yDistRaw);
var xDist = Math.abs(xDistRaw);
var touching = false;

function check() {
  if(yDist>=xDist){
    console.log("up/down");
  }
  
  if(mPlace == place){
    touching = true
  }
}


function move() {
  var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
  var xDistRaw = place%32 - mPlace%32;
  var yDist = Math.abs(yDistRaw);
  var xDist = Math.abs(xDistRaw);
  check();
  if(touching == true){
    AddRoom("lose");
    break;
  }
  setTimeout(function(){
    move();
  }, 250);
}

move();
