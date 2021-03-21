let buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var text = this.innerHTML;
        var imgtag = document.querySelector("img");
        var link = "assets/" + text + ".jpg";
        imgtag.src = link;
        imgtag.alt = "photos";
        console.log(link);
        addAnimation(text);
    });
}

function addAnimation(text) {
    var btn = document.querySelector("." + text);
    btn.classList.add("anim");
    setTimeout(function() {
        btn.classList.remove("anim");
    }, 2000);
}