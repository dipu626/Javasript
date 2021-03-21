var photos = ["assets/photo-1.jpg", "assets/photo-2.jpg", "assets/photo-3.jpg", "assets/photo-4.jpg", "assets/photo-5.jpg"];
var imgTag = document.querySelector("img");

var index = 0;
function prev() {
    index--;
    if (index == -1) {
        index = 4;
    }
    imgTag.src = photos[index];
}

function next() {
    index++;
    if (index == photos.length) {
        index = 0;
    }
    imgTag.src = photos[index];
}