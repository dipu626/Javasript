var letters = 0;
var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(event) {
    const key = event.key;
    console.log(key);
    if (key === "Backspace") {
        letters = Math.max(0, --letters);
    }
    else {
        ++letters;
    }
    var ptag = document.querySelector("p");
    ptag.innerHTML = "Total letters = " + letters;
});