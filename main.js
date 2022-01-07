prediction_1="";


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera)

function take_snapshot(){
  Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri +"'>";
  });
  
}

console.log("ml5 version is ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tVLswE2WL/model.json",model_loaded);

function model_loaded(){
    console.log("model loaded sucessfully")
}

function check(){
  img=document.getElementById('captured_img');
 classifier.classify(img,gotResult);
}

function speak(){
  synth=window.speechSynthesis
  speak_data_1="The first prediction is"+prediction_1;
  utter_this=new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(utter_this)
}


function gotResult(error,results){
if(error){
  console.log(error);
}
else{
  console.log(results);
  document.getElementById("result_emotion_name").innerHTML=results[0].label;
  prediction_1=results[0].label;
  speak();
  

  
  if(results[0].label=="thumbs up"){
   document.getElementById("result_emoji1").innerHTML="&#128077;";
  }
  if(results[0].label=="victory"){
    document.getElementById("result_emoji1").innerHTML="&#9996;";
   }
   if(results[0].label=="amazing "){
    document.getElementById("result_emoji1").innerHTML="&#128076";
   }
   if(results[0].label=="horns"){
    document.getElementById("result_emoji1").innerHTML="&#129304;";
   }
   if(results[0].label=="hands with fingers")
   {
    document.getElementById("result_emoji1").innerHTML="&#128400;";
   }
  }
}

