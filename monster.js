var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
var xDistRaw = place%32 - mPlace%32;
var yDist = Math.abs(yDistRaw);
var xDist = Math.abs(xDistRaw);
var touching = false;

function direc() {
  var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
  var xDistRaw = place%32 - mPlace%32;
  var yDist = Math.abs(yDistRaw);
  var xDist = Math.abs(xDistRaw);
  console.log(yDist);
  console.log(xDist);
  if(mPlace == place){
    touching = true
  }
  if(yDist>=xDist){
    return("up/down");
  }
  else {
    return("left/right");
  }
}

function check(id){
  var yesorno = document.getElementById(id).className;
  if(yesorno=="floor"||yesorno=="player"){
    yesorno = true;
  } else {
    yesorno = false;
  }
}

function move() {
  var direction = direc();
  var up = check(mPlace-32);
  var down = check(mPlace+32);
  var right = check(mPlace+1);
  var left = check(mPlace-1);
  if(touching == true){
    AddRoom("lose");
    return;
  }
  if(direction=="up/down"){
    if
  }
  setTimeout(function(){
    move();
  }, 250);
}

move();
