img ="";
function preload(){
    img = loadImage('desk-table-drawer-furniture-steel-office-desk-a9ccc1a8a3cd5d7cd5508258f6e09a6c.png');
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