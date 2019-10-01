window.onload = () => {
    page()
}

function page() {
    let y = document.body.scrollTop;
    let b = document.body.scrollHeight - document.body.clientHeight;
    let totlePage = 3;

    pageable( y/totlePage*2-(b/totlePage*0) , "page-box-1");
    pageable( y/totlePage*2-(b/totlePage*1) , "page-box-2");
    pageable( y/totlePage*2-(b/totlePage*2) , "page-box-3");

    pageable( y/totlePage*2-(b/totlePage*0), "mainBox");

    background( y/totlePage*2-(b/totlePage*0), "background1", "rgb(140, 140, 235)");
    background( y/totlePage*2-(b/totlePage*1), "background2", "rgb(165, 42, 42)");
    background( y/totlePage*2-(b/totlePage*2), "background3", "rgb(95, 158, 160)");
}
function mouse(e) {
    let mouseX = e.clientX-(window.innerWidth/2);
    let mouseY = e.clientY-(window.innerHeight/2);
    let movement_translate = -100;
    let movement_rotate = 1200;

    boxMove(50+(mouseX/movement_translate), 50+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "mainBox", 40);

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box4", 50);
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box5", -70);
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box6", 20);

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box7", 50);
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box8", -70);
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box9", 20);

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box10", -250);
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box11", -270);
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotate), -(mouseY/movement_rotate), "box12", -120);

}

function pageable(value, boxId) {
    // if (value > -500 && value < 79) {
    //     document.getElementById(boxId).style.opacity = (value+500)/100;
    // } else if (value > 20) {
    //     document.getElementById(boxId).style.opacity = (100-(value))/100;
    // } else {
    //     document.getElementById(boxId).style.opacity = 0;
    // }
    document.getElementById(boxId).style.transform = "translateX(-50%) translateY(-50%) translateZ("+value+"px)";
}

function boxMove(leftX, topY, retateX, retateY, boxId, Z) {
    document.getElementById(boxId).style.left = leftX+"%";
    document.getElementById(boxId).style.top = topY+"%";
    document.getElementById(boxId).style.transform = "translateX(-50%) translateY(-50%) translateZ("+Z+"px) rotateY("+retateX+"deg) rotateX("+retateY+"deg)";
}

function background(value, backName, color) {
     if (value > -100 || value < 100) {
        document.getElementById(backName).style.backgroundColor = color;
        document.getElementById(backName).style.opacity = (value+100)/100;
    }
}