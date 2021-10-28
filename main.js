leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function getPoses(results){
    if (results.length > 0 ){
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
    }
}

function draw(){
    image(video, 0, 0, 400, 300);

    stroke("red");
    fill(255, 255, 255, 0);
    circle(leftEyeX, leftEyeY, 30);
    circle(rightEyeX, rightEyeY, 30);
}
