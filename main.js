function identify_sound() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KdiocsuXC/model.json",ModelLoaded);
}

function ModelLoaded() {
    classifier.classify(gotresults);
}

function gotresults(error,results) {
    if (error) {
        console.error ("Error");
    }
    else {
        console.log (results);
        
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Detected Voice Of - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," +random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," +random_number_b + ")";

        img1 = document.getElementById("image");

        if (results[0].label == "Barking(Dog)") {
            img1.src = "dog_gif.gif";
        }
        else if (results[0].label == "Tweeting(Bird)") {
            img1.src = "bird_gif.gif";
        }
        else if (results[0].label == "Mooing(Cow)") {
            img1.src = "cow_gif.gif";
        }
        else if (results[0].label == "Meowing(Cat)") {
            img1.src = "cat_gif.gif";
        }
        else {
            img1.src = "background_gif.gif";
        }
    }
}