console.log("test.....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
// ctx.moveTo(0,200);
// ctx.lineTo(200,100);
// ctx.strokeStyle ="blue";
// ctx.lineWidth = 5;


ctx.fillStyle="navy";
ctx.fillRect(20,20,120,120);

ctx.strokeStyle = "green";
ctx.strokeRect(10,10,140,140);

ctx.clearRect(30,30,50,50);