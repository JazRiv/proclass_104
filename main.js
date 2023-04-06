var recon = ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/6nK555Qtf/model.json", listo);

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camara")

function take(){
    Webcam.snap(function (data_uri){
        document.getElementById("resultado").innerHTML = "<img id='foto' src='" + data_uri + "'>"
    })
}

function listo(){
    console.log("Ya estoy listo")
}
