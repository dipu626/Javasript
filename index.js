// Changing CSS style dynamically

function addStyle() {
    var pTag = document.querySelector("p");
    console.log('add style');
/*     pTag.style.color = "red";
    pTag.style.fontSize = "50px";
    pTag.style.fontWeight = "bold";
    pTag.style.fontStyle = "italic"; */
    pTag.classList.add("para-style");
}

function removeStyle() {
    var pTag = document.querySelector("p");
    pTag.classList.remove("para-style");
}