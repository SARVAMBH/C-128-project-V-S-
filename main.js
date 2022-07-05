song1 = "";
song2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.position(600,250)
    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(video , modelLoaded);
    PoseNet.on('pose' , gotPoses);
}

function draw() {
    image(video,0,0,600,500);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + LeftWristX + "LeftWristY = " + LeftWristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    }
}