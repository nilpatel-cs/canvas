const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

context.fillStyle = "hotpink";
context.fillRect(0,0,innerWidth,innerHeight);
