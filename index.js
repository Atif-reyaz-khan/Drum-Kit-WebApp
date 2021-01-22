var a=document.querySelectorAll(".drum").length;

for(var i=0;i<a;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
var k=this.innerHTML;
  snow(k);
  buttonanimation(k);
  });
}
for(var i=0;i<a;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event){

  snow(event.key);
  buttonanimation(event.key);
  });
}


function snow(key){
  switch (key) {
    case "w":
    var a=new Audio("sounds/crash.mp3");
    a.play();

      break;
    case "a":

      var au=new Audio("sounds/kick-bass.mp3");
      au.play();

        break;
        case "s":
        var aud=new Audio("sounds/snare.mp3");
        aud.play();

          break;
          case "d":
          var audi=new Audio("sounds/tom-1.mp3");
          audi.play();

            break;
            case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();

              break;
              case "k":
              var audio1=new Audio("sounds/tom-3.mp3");
              audio1.play();

                break;
                case "l":
                var audio2=new Audio("sounds/tom-4.mp3");
                audio2.play();

                  break;
    default:
    alert("wrong choice:")
    break;

  }

}
function buttonanimation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  },1.00);

}
