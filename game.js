console.log("yay");
var place = 300;
var mPlace = 725;

function advance(){
  console.log("advance");
  $("div.door").attr("class","door-o");
}

function displayunicode(y) {
  var unicode = y.keyCode;
  if (unicode == 37) {
    //left arrow
    var placenew = $("div#"+(place-1)).attr("class");
    if(placenew=="floor"){
      placePlayer(place-1);
    }
    else if(placenew=="obj"){
      placePlayer(place-1);
      points += 1;
      $("span#points").html(points);
      console.log(points);
      if(points==5){
        advance();
      }
    }
    else if(placenew=="door-o"){
      if(currentRoom=="office"){
        AddRoom("classroom");
        mPlace = 972;
      }
      if(currentRoom=="hospital"){
        AddRoom("bedroom");
        mPlace = 36;
      }
      place += 30;
      if(currentRoom=="classroom"){
        place -= 1;
      }
      placePlayer(place);
      placeMonster(mPlace);
    }
  }
  if (unicode == 39) {
    //right arrow
    var placenew = $("div#"+(place+1)).attr("class");
    if(placenew=="floor"){
      placePlayer(place+1);
    }
    else if(placenew=="obj"){
      placePlayer(place+1);
      points += 1;
      $("span#points").html(points);
      console.log(points);
      if(points==5){
        advance();
      }
    }
    else if(placenew=="door-o"){
      if(currentRoom=="classroom"){
        AddRoom("office");
        mPlace = 972;
      }
      if(currentRoom=="bedroom"){
        AddRoom("hospital");
        mPlace = 34;
      }
      place -= 30;
      if(currentRoom=="office"){
        place += 1;
      }
      placePlayer(place);
      placeMonster(mPlace);
    }
  }
  if (unicode == 38) {
    //up arrow
    var placenew = $("div#"+(place-32)).attr("class");
    if(placenew=="floor"){
      placePlayer(place-32);
    }
    else if(placenew=="obj"){
      placePlayer(place-32);
      points += 1;
      $("span#points").html(points);
      console.log(points);
      if(points==5){
        advance();
      }
    }
    else if(placenew=="door-o"){
      if(currentRoom=="bedroom"){
        AddRoom("classroom");
        mPlace = 543;
      }
      if(currentRoom=="hospital"){
        AddRoom("office");
        mPlace = 514;
      }
      place += 928;
      placePlayer(place);
      placePlayer(mPlace);
    }
  }
  if (unicode == 40) {
    //down arrow
    var placenew = $("div#"+(place+32)).attr("class");
    if(placenew=="floor"){
      placePlayer(place+32);
    }
    else if(placenew=="obj"){
      placePlayer(place+32);
      points += 1;
      $("span#points").html(points);
      console.log(points);
      if(points==5){
        advance();
      }
    }
    else if(placenew=="door-o"){
      if(currentRoom=="office"){
        AddRoom("hospital");
        mPlace = 543;
      }
      if(currentRoom=="classroom"){
        AddRoom("bedroom");
        mPlace = 514;
      }
      place -= 928;
      placePlayer(place);
      placePlayer(mPlace);
    }
  }
}

function placePlayer(newplace) {
  $("div#"+place).attr("class","floor");
  $("div#"+newplace).attr("class","player");
  place = newplace;
}

function placeMonster(newplace) {
  $("div#"+mPlace).attr("class","floor");
  $("div#"+newplace).attr("class","monster");
  mPlace = newplace;
}

AddRoom("hospital");
$("div#"+place).attr("class","player");
$("div#"+mPlace).attr("class","monster");
