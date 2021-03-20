// Create Eliment

var createEliment = document.createElement("h3");
var newText = document.createTextNode("This is H3 heading");
createEliment.appendChild(newText);

var myDiv = document.getElementById("container");
myDiv.appendChild(createEliment);

var heading2 = document.getElementsByTagName("h2")[0];
myDiv.removeChild(heading2);

var createEliment2 = document.createElement("p");
var text = document.createTextNode("This is paragraph");
createEliment2.appendChild(text);

// Insert in a particular index
var heading3 = document.getElementsByTagName("h3")[0];
myDiv.insertBefore(createEliment2, heading3);