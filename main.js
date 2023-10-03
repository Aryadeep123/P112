function preload() {

}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color =" ";
}

function draw() {
    image(video,0,0,640,480);
    circle(20, 20, 50);
    circle(620, 460, 50);

}

function take_snapshot() {
    save("student_name.png");
}
