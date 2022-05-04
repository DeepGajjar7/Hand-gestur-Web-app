var prediction1="";

console.log("ml5 version="+ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q7ZyfiPDb/model.json',model_loaded);
function model_loaded(){
    console.log("model is loaded");
}

Webcam.set({
    width:350,
    heigth:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'">';
        }
    );
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first preidition is "+prediction1;
    var utterThis=new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterThis)
}

function check(){
    img=document.getElementById("captureimage");
    classifier.classify(img,gotresults)
}

function gotresults(results){
        console.log(results);
        prediction1=results[0].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        speak();
        if (prediction1=="Like"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if (prediction1=="Nice"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if (prediction1=="Swag"){
            document.getElementById("update_emoji").innerHTML="&#129304;";
        }
        
}