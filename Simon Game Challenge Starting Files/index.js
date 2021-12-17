var colorpos=["green","red","yellow","blue"];

var aawaz=["sounds/green.mp3","sounds/red.mp3","sounds/yellow.mp3","sounds/blue.mp3","sounds/wrong.mp3"]

var sequence=[];

var gameover=true;

var level=1;

var pos=0;

$(document).keypress(function(){
  if(gameover==true){
    sequence=[];
    $("h1").text("Level : 1");
    level=1;
    alert("start");
    setTimeout(nextSequence(),1000);
    gameover=false;
  }
  else{

  }
});

function randomnumber(){
  return Math.floor(Math.random()*4);
}

function playsound(random){
  var audio=new Audio(aawaz[random]);
  audio.play();
}
function nextSequence(){
  var random= randomnumber();
  sequence.push(colorpos[random]);
  playsound(random);
  $("h1").text("Level : "+sequence.length);
  $("#"+colorpos[random]).addClass("pressed");
  setTimeout(function(){$("#"+colorpos[random]).removeClass("pressed");}, 100);
}

$(".btn").on("click",function(event){
  var string=this.id;
  var random=0;
  for(var i=0;i<4;i++){
    if(string==colorpos[i]){
      random=i;
      var audio=new Audio(aawaz[i]);
      audio.play();
     break;
    }
  }

  $("#"+colorpos[random]).addClass("pressed");
  setTimeout(function(){$("#"+colorpos[random]).removeClass("pressed");}, 100);

  if(gameover==true){
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 100);
    var audio2=new Audio(aawaz[4]);
    audio2.play();
    sequence=[];
    $("h1").text("Press A Key to Start");
  }
  else{

    var size=sequence.length;
    console.log(pos+" "+size);
    if(pos>=size || sequence[pos]!=string){
      console.log(sequence[pos]+" "+string);
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over");}, 100);
      var audio2=new Audio(aawaz[4]);
      audio2.play();
      sequence=[];
      level=1;
      pos=0;
      gameover=true;
      $("h1").text("Press A Key to Start");
      console.log("ok");
    }
    else{
      console.log(pos);
      pos++;
      console.log(pos);
      if(level==pos){
        setTimeout(nextSequence,500);
        setTimeout(function(){level++;},500);
        setTimeout(function(){pos=0;},500);
        setTimeout(function(){if(gameover==true)$("h1").text("Press A Key to Start");},500)
      }
    }
  }

});
