var noseX = 0;
var noseY = 0;
function preload(){
    clounNose=loadImage('https://i.postimg.cc/HWyD2FH2/Clown-nose-large.png')
}
function setup(){
    canvas=createCanvas(300,225)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function takeSnapshot(){
    save('myFilterImage.png')
}
function draw(){
    image(video,0,0,300,300);

    image(clounNose,noseX,noseY,50,50)
}
function modelLoaded(){
    console.log("model is loaded,poseNet is initailaized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y-25;
    }
}