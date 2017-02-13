console.log("yay");
var place = 300;

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
      }
      if(currentRoom=="hospital"){
        AddRoom("bedroom");
      }
      place += 30;
      if(currentRoom=="classroom"){
        place -= 1;
      }
      placePlayer(place);
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
      }
      if(currentRoom=="bedroom"){
        AddRoom("hospital");
      }
      place -= 30;
      placePlayer(place);
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
      }
      if(currentRoom=="hospital"){
        AddRoom("office");
      }
      place += 928;
      placePlayer(place);
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
      }
      if(currentRoom=="classroom"){
        AddRoom("bedroom");
      }
      place -= 928;
      placePlayer(place);
    }
  }
}

function placePlayer(newplace) {
  $("div#"+place).attr("class","floor");
  $("div#"+newplace).attr("class","player");
  place = newplace;
}

AddRoom("hospital");
$("div#"+place).attr("class","player");
