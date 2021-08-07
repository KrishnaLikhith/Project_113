function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}
function draw() {
    image(video, 0, 0, 300, 300);
    fill(0, 255, 251);
    stroke(255, 251, 3);
    circle(20, 20, 25);
    fill(255, 0, 0);
    stroke(0,255,0);
    ellipse(20, 50, 35, 30);
    fill(255, 149, 0);
    stroke(17, 255, 0);
    rect(10 , 70, 20,150);
    fill(0, 255, 251);
    stroke(255, 251, 3);
    circle(20, 240, 25);
    fill(255, 0, 0);
    stroke(0,255,0);
    ellipse(20, 275, 35, 30);
    fill(255, 149, 0);
    stroke(17, 255, 0);
    rect(40 , 265, 220,20);
    fill(0, 255, 251);
    stroke(255, 251, 3);
    circle(280, 240, 25);
    fill(255, 0, 0);
    stroke(0,255,0);
    ellipse(280, 275, 35, 30);
    fill(255, 149, 0);
    stroke(17, 255, 0);
    rect(270 , 70, 20,150);
    fill(0, 255, 251);
    stroke(255, 251, 3);
    circle(280, 20, 25);
    fill(255, 0, 0);
    stroke(0,255,0);
    ellipse(280, 50, 35, 30);
    fill(255, 149, 0);
    stroke(17, 255, 0);
    rect(40 , 10, 220,20);
}
function take_snapshot(){
    save("Picture.png");
}