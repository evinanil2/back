img ="";
function preload(){
    img = loadImage('pngimg.com - bottle_PNG2089.png');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
}
function back()
{
    window.location = "index.html";
}