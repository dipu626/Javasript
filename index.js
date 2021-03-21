
var photos = ["assets/sea-bird-1.jpg", "assets/sea-bird-2.jpg", "assets/photo-1.jpg"];
var photosName = ["sea-bird 1", "sea-bird 2", "sea -bird 3"];

var totalButton = document.querySelectorAll("button").length;


for (var i = 0; i < totalButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text;

        switch(text) {
            case "Button - 1":
                document.querySelector("img").src = photos[0];
                document.querySelector("img").alt = photosName[0];
                break;
            case "Button - 2":
                document.querySelector("img").src = photos[1];
                document.querySelector("img").alt = photosName[1];
                break;
            case "Button - 3":
                document.querySelector("img").src = photos[2];
                document.querySelector("img").alt = photosName[2];
                break;
            case "default":
                break;
        }
    });
}