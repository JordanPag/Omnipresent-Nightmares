var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
var xDistRaw = place%32 - mPlace%32;
var yDist = Math.abs(yDistRaw);
var xDist = Math.abs(xDistRaw);
var touching = false;

function check() {
  var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
  var xDistRaw = place%32 - mPlace%32;
  var yDist = Math.abs(yDistRaw);
  var xDist = Math.abs(xDistRaw);
  console.log(yDist);
  console.log(xDist);
  if(yDist>=xDist){
    console.log("up/down");
  }
  else {
    console.log("left/right");
  }
  
  if(mPlace == place){
    touching = true
  }
}


function move() {
  check();
  if(touching == true){
    AddRoom("lose");
    return;
  }
  setTimeout(function(){
    move();
  }, 250);
}

move();
