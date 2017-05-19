console.log("yay");
var place = 300;
var mPlace = 725;

function advance(){
  console.log("advance");
  $("div.door").attr("class","door-o");
}

function displayunicode(y) {
  if(currentRoom=="lose"){
  } else {
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
          mPlace = 976;
        }
        if(currentRoom=="hospital"){
          AddRoom("bedroom");
          mPlace = 48;
        }
        place += 30;
        if(currentRoom=="classroom"){
          place -= 1;
        }
        placePlayer(place);
        placeMonster(mPlace);
      }
      else if(placenew=="monster"){
        AddRoom("lose");
        $("font").html("<button onclick='location.reload()'>Play Again?</button>");
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
          mPlace = 44;
        }
        place -= 30;
        if(currentRoom=="office"){
          place += 1;
        }
        placePlayer(place);
        placeMonster(mPlace);
      }
      else if(placenew=="monster"){
        AddRoom("lose");
        $("font").html("<button onclick='location.reload()'>Play Again?</button>");
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
        placeMonster(mPlace);
      }
      else if(placenew=="monster"){
        AddRoom("lose");
        $("font").html("<button onclick='location.reload()'>Play Again?</button>");
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
          mPlace = 514;
        }
        if(currentRoom=="classroom"){
          AddRoom("bedroom");
          mPlace = 543;
        }
        place -= 928;
        placePlayer(place);
        placeMonster(mPlace);
      }
      else if(placenew=="monster"){
        AddRoom("lose");
        $("font").html("<button onclick='location.reload()'>Play Again?</button>");
      }
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
