difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload()
{
    
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}

function draw()
{
    background('#03c03c');
    document.getElementById("font_size").innerHTML = "Font Size of text is = " + difference + "px";
    textSize(difference);
    fill('#000080');
    text('Atharv', 50, 300);
}