initGraphics(800, 600);


requestAnimationFrame(draw);
function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    





    requestAnimationFrame(draw);
};