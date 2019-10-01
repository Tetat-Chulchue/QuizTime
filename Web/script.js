window.onload = () => {
    page()
}

function page() {
    let y = document.body.scrollTop;
    let b = document.body.scrollHeight - document.body.clientHeight;
    pageable( y/3*2 , "page-box-1");
    pageable( y/3*2-(b/3) , "page-box-2");
    pageable( y/3*2-(b/3*2) , "page-box-3");

    background( y/3*2, "background1", "rgb(140, 140, 235)");
    background( y/3*2-(b/3), "background2", "rgb(165, 42, 42)");
    background( y/3*2-(b/3*2), "background3", "rgb(95, 158, 160)");
}
function mouse(e) {
    let mouseX = e.clientX-(window.innerWidth/2);
    let mouseY = e.clientY-(window.innerHeight/2);
    let movement_translate = 80;
    let movement_rotateY = 1500;

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box4");
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box5");
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box6");

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box7");
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box8");
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box9");

    boxMove(-80+(mouseX/movement_translate), -80+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box10");
    boxMove(-160+(mouseX/movement_translate), 140+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box11");
    boxMove(240+(mouseX/movement_translate), 180+(mouseY/movement_translate), (mouseX/movement_rotateY), -(mouseY/movement_rotateY), "box12");
}

function pageable(value, boxId) {
    if (value > -500 && value < 79) {
        document.getElementById(boxId).style.opacity = (value+500)/100;
    } else if (value > 20) {
        document.getElementById(boxId).style.opacity = (100-(value))/100;
    } else {
        document.getElementById(boxId).style.opacity = 0;
    }
    document.getElementById(boxId).style.transform = "translateX(-50%) translateY(-50%) translateZ("+value+"px)";
}

function boxMove(leftX, topY, retateX, retateY, boxName) {
    document.getElementById(boxName).style.left = leftX+"%";
    document.getElementById(boxName).style.top = topY+"%";
    document.getElementById(boxName).style.transform = "translateX(-50%) translateY(-50%) rotateY("+retateX+"deg) rotateX("+retateY+"deg)";
}

function background(value, backName, color) {
     if (value > -100 || value < 100) {
        document.getElementById(backName).style.backgroundColor = color;
        document.getElementById(backName).style.opacity = (value+100)/100;
    }
}