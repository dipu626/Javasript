// addEventSelector on button

/* var myVar = document.querySelector("#button1");
myVar.addEventListener("click", addImage);

var imageDisable = true;
function addImage() {
    var imgTag = document.querySelector("img");
    if (imageDisable == true) {
        imgTag.src = "assets/sea-bird-1.jpg";
        imgTag.alt = "Sea Bird";
        myVar.innerHTML = "Hide Photo";
    }
    else {
        imgTag.src = "#";
        imgTag.alt = "";
        myVar.innerHTML = "See Photo";
    }
    console.log(imageDisable);
    imageDisable ^= 1;
} */

var imageDisable = true;
document.querySelector("#button1").addEventListener("click", function(){
    var myVar = document.querySelector("#button1");
    var imgTag = document.querySelector("img");
    if (imageDisable == true) {
        imgTag.src = "assets/sea-bird-1.jpg";
        imgTag.alt = "Sea Bird";
        myVar.innerHTML = "Hide Photo";
    }
    else {
        imgTag.src = "#";
        imgTag.alt = "";
        myVar.innerHTML = "See Photo";
    }
    console.log(imageDisable);
    imageDisable ^= 1;
});

// addEventSelector on text
/* var h1Tag = document.querySelector("h1");
var isClicked = false;
h1Tag.addEventListener("click", function() {
    if (isClicked == false) {
        h1Tag.classList.add("para-style");
    }
    else {
        h1Tag.classList.remove("para-style");
    }
    isClicked ^= true;
}); */

var h1Tag = document.querySelector("h1");

h1Tag.addEventListener("mouseover", function() {
    h1Tag.classList.add("para-style");
});

h1Tag.addEventListener("mouseout", function() {
    h1Tag.classList.remove("para-style");
})
