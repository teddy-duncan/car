canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="racing.jpg"
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_image="car2.png";
car2_x=10;
car2_y=50;
function add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadBackground;
    bg_imgtag.src=background_image;
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadRover1;
    car1_imgtag.src=car1_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadRover2;
    car2_imgtag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,rover_width,rover_height);
}
function uploadRover2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress == '38'){
        up();
        console.log("up");
    }
    if(keypress == '40'){
        down();
        console.log("down");
    }
    if(keypress == '37'){
        left();
        console.log("left");
    }
    if(keypress == '39'){
        right();
        console.log("right");
    }
    if(keypress == '65'){
        left1();
        console.log("left");
    }
    if(keypress == '68'){
        right1();
        console.log("right");
    }
    if(keypress == '87'){
        top1();
        console.log("top1");
    }
    if(keypress == '83'){
        down1();
        console.log("down");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when up arrow is pressed x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when up arrow is pressed x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when up arrow is pressed x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}