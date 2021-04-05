var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function run(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;

    if (content=="take my selfie"){
     console.log("Taking selfie in 5 secs");
     speak();
    }

}

function speak(){

var synth =window.speechSynthesis;
speak_data="taking your selfie in 5 seconds";
var utter_this= new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
Webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    save();
},5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpg',
    jpg_quality: 90
  });

  camera=document.getElementById("webcam");

  function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML="<img id='selfie_image' src=' "+data_uri+"'>";
    });
  }

  function save(){
      link=document.getElementById("link");
      image=document.getElementById("selfie_image").src;
      link.href=image;
      link.click();
  }