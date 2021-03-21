var totalButton = document.querySelectorAll("button").length;
let allButton = document.querySelectorAll("button");

var music = ["audio/complete.mp3", "audio/begin.mp3"];

for (var i = 0; i < totalButton; i++) {
    allButton[i].addEventListener("click", function() {
        var link = "audio/" + this.innerHTML + ".mp3";
        var audio = new Audio(link);
        audio.play();
    });
}