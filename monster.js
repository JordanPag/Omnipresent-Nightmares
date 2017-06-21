var yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
var xDistRaw = place%32 - mPlace%32;
var yDist = Math.abs(yDistRaw);
var xDist = Math.abs(xDistRaw);
var touching = false;
var lastmPlace = 725;
var counter = 0;
var timeleft = 240;

function win(){
  console.log("win");
  currentRoom = "lose";
  alert("A winner is you!");
}

function direc() {
  yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
  xDistRaw = place%32 - mPlace%32;
  yDist = Math.abs(yDistRaw);
  xDist = Math.abs(xDistRaw);
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
    if(id==lastmPlace){
      return(false);
    } else {
      return(true);
    }
  } else {
    return(false);
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
    $("font").html("<button onclick='location.reload()'>Play Again?</button>");
    return;
  }
  decide(direction,up,down,left,right);
  direction = direc();
  if(touching == true){
    AddRoom("lose");
    $("font").html("<button onclick='location.reload()'>Play Again?</button>");
    return;
  }
  setTimeout(function(){
    counter += 1;
    if(counter%4==0){
      timeleft -= 1;
      var seconds = timeleft%60;
      if(seconds<10){
        seconds = "0" + seconds;
      }
      var textline = Math.floor(timeleft/60) + ":" + seconds;
      $("span#time").html(textline);
    }
    if(timeleft==0){
      win();
      return;
    }
    move();
  }, 250);
}

function decide(direction,up,down,left,right){
  yDistRaw = Math.floor(place/32) - Math.floor(mPlace/32);
  xDistRaw = place%32 - mPlace%32;
  yDist = Math.abs(yDistRaw);
  xDist = Math.abs(xDistRaw);
  if(direction=="up/down"){
    if(yDistRaw>=0){
      //going down
      if(down==true){
        placeMonster(mPlace+32);
      } else if(xDistRaw>=0){
        //going right
        if(right==true){
          placeMonster(mPlace+1);
        } else if(left==true){
          placeMonster(mPlace-1);
        } else if(up==true){
          placeMonster(mPlace-32);
        } else {
          placeMonster(lastmPlace);
        }
      } else {
        //going left
        if(left==true){
          placeMonster(mPlace-1);
        } else if(right==true){
          placeMonster(mPlace+1);
        } else if(up==true){
          placeMonster(mPlace-32);
        } else {
          placeMonster(lastmPlace);
        }
      }
    } else {
      //going up
      if(up==true){
        //move
        placeMonster(mPlace-32);
      } else if(xDistRaw>0){
        //going right
        if(right==true){
          placeMonster(mPlace+1);
        } else if(left==true){
          placeMonster(mPlace-1);
        } else if(down==true){
          placeMonster(mPlace+32);
        } else {
          placeMonster(lastmPlace);
        }
      } else {
        //going left
        if(left==true){
          placeMonster(mPlace-1);
        } else if(right==true){
          placeMonster(mPlace+1);
        } else if(down==true){
          placeMonster(mPlace+32);
        } else {
          placeMonster(lastmPlace);
        }
      }
    }
  } else if(direction=="left/right"){
    if(xDistRaw>=0){
      //going right
      if(right==true){
        placeMonster(mPlace+1);
      } else if(yDistRaw>=0){
        //going down
        if(down==true){
          placeMonster(mPlace+32);
        } else if(up==true){
          placeMonster(mPlace-32);
        } else if(left==true){
          placeMonster(mPlace-1);
        } else {
          placeMonster(lastmPlace);
        }
      } else {
        //going up
        if(up==true){
          placeMonster(mPlace-32);
        } else if(down==true){
          placeMonster(mPlace+32);
        } else if(left==true){
          placeMonster(mPlace-1);
        } else {
          placeMonster(lastmPlace);
        }
      }
    } else {
      //going left
      if(left==true){
        //move
        placeMonster(mPlace-1);
      } else if(yDistRaw>=0){
        //going down
        if(down==true){
          placeMonster(mPlace+32);
        } else if(up==true){
          placeMonster(mPlace-32);
        } else if(right==true){
          placeMonster(mPlace+1);
        } else {
          placeMonster(lastmPlace);
        }
      } else {
        //going up
        if(up==true){
          placeMonster(mPlace-32);
        } else if(down==true){
          placeMonster(mPlace+32);
        } else if(right==true){
          placeMonster(mPlace+1);
        } else {
          placeMonster(lastmPlace);
        }
      }
    }
  }
}

move();
