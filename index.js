
var canvasTag = document.getElementById("canvas-1");
var ctx = canvasTag.getContext("2d");

ctx.lineWidth = "3";
ctx.strokeStyle = "purple";
ctx.strokeRect(10, 10, 380, 280);

ctx.fillStyle = "green";
ctx.fillRect(13, 13, 374, 274);

var centerX = canvasTag.width / 2;
var centerY = canvasTag.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.lineWidth = "1";
ctx.stroke();