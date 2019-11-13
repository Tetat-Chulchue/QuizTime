let pageOn = 0;

window.addEventListener("load", () => {
    setTimeout(()=>{
        page()
    }, 2000);
});

function page() {
    let y = document.body.scrollTop;
    let b = document.body.scrollHeight - document.body.clientHeight;
    let j = document.body.clientHeight;
    let position = -50;
    let space = 125;

    box( y-(space*0)+position-40 , "page-1");
    box( y-(space)+position , "page-1-1");
    box( y-(space)+position-200 , "page-1-2");
    box( y-(space)+position+30 , "page-1-3");
    box( y-(space)+position+20 , "page-1-4");

    box( y-(space*5)+position+15 , "page-2");
    box( y-(space*6)+position-30 , "page-2-1");
    box( y-(space*7)+position-15 , "page-2-2");
    box( y-(space*8)+position-10 , "page-2-3");
    box( y-(space*9)+position-10 , "page-2-4");

    box( y-(space*10)+position+10 , "page-3");
    box( y-(space*11)+position-30 , "page-3-1");
    box( y-(space*12)+position-15 , "page-3-2");
    box( y-(space*13)+position-10 , "page-3-3");
    box( y-(space*14)+position-10 , "page-3-4");

    box( y-(space*15)+position+10 , "page-4");
    box( y-(space*16)+position-30 , "page-4-1");
    box( y-(space*17)+position-15 , "page-4-2");
    box( y-(space*18)+position-10 , "page-4-3");
    box( y-(space*19)+position-10 , "page-4-4");
    
    box( y-(space*20)+position-50 , "page-5");
    box( y-(space*22)+position-10 , "page-5-1");
    box( y-(space*22)+position-10 , "page-5-2");
    box( y-(space*22)+position-10 , "page-5-3");
    box( y-(space*22)+position-10 , "page-5-4");
    box( y-(space*23)+position , "page-6-1");

    background( y-(space*3)+position, "background1", "rgb(140, 140, 235)");
    background( y-(space*8)+position, "background2", "rgb(165, 42, 42)");
    background( y-(space*13)+position, "background3", "rgb(95, 158, 160)");
    background( y-(space*18)+position, "background4", "rgb(95, 50, 160)");
}

function box(value, pageId) {
    if (pageOn == 1) {
        return
    }
    document.getElementById(pageId).style.transform = "translateX(-50%) translateY(-50%) translateZ("+(value)+"px)";
    opacity(pageId);
}

function opacity(pageId) {
    let value = document.getElementById(pageId).style.transform.slice(45).replace("px)", "");
    if (value > -400 && value < 90) {
        document.getElementById(pageId).style.opacity = ((Number(value)+400))/100;
        document.getElementById(pageId).style.display = "initial";
    } else if (value < -400) {
        document.getElementById(pageId).style.display = "none";
    } else if (value > 90 ) {
        // document.getElementById(pageId).style.opacity = (100-(Number(value)-50))/100;
        document.getElementById(pageId).style.display = "none";
    }
}

function mouse(e) {
    let mouseX = -(e.clientX-(window.innerWidth/2));
    let mouseY = -(e.clientY-(window.innerHeight/2));
    let movement_translate = -300;
    let movement_translate_X = mouseX/movement_translate;
    let movement_translate_Y = mouseY/movement_translate;

    boxMove( movement_translate_X, movement_translate_Y, "page-1", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-1-1", 25, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-1-2", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-1-3", 75, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-1-4", 50, 50);

    boxMove( movement_translate_X, movement_translate_Y, "page-2", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-2-1", 25, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-2-2", 25, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-2-3", 75, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-2-4", 75, 25);

    boxMove( movement_translate_X, movement_translate_Y, "page-3", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-3-1", 25, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-3-2", 25, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-3-3", 75, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-3-4", 75, 25);


    boxMove( movement_translate_X, movement_translate_Y, "page-4", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-4-1", 25, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-4-2", 25, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-4-3", 75, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-4-4", 75, 25);

    boxMove( movement_translate_X, movement_translate_Y, "page-5", 50, 50);
    boxMove( movement_translate_X, movement_translate_Y, "page-5-1", 25, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-5-2", 25, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-5-3", 75, 75);
    boxMove( movement_translate_X, movement_translate_Y, "page-5-4", 75, 25);
    boxMove( movement_translate_X, movement_translate_Y, "page-6-1", 50, 50);


}
function boxMove(leftX, topY, boxId, de_X, de_Y) {
    if (pageOn == 1) {
        // document.getElementById(boxId).style.left = (50+leftX)+"%";
        // document.getElementById(boxId).style.top = (50+topY)+"%";
    } else {
        document.getElementById(boxId).style.left = de_X+leftX+"%";
        document.getElementById(boxId).style.top = de_Y+topY+"%";
    }
}

function background(value, backName, color) {
    if (value > -100 || value < 100) {
        document.getElementById(backName).style.backgroundColor = color;
        document.getElementById(backName).style.opacity = (value+100)/100;
    }
}

let scrollZ, top_popUp, left_popUp, positionZ, Obj_opacity;
function popUp(id) {
    if (pageOn == 1) {
        pageOn = 0;
        document.body.scrollTop = scrollZ;
        document.getElementById(id).style.top = top_popUp;
        document.getElementById(id).style.left = left_popUp;
        document.getElementById(id).style.opacity = Obj_opacity;
        document.getElementById(id).style.transform = "translateX(-50%) translateY(-50%) translateZ("+positionZ+"px)";
        document.body.style.overflow = "initial";
        setTimeout(()=>{document.getElementById(id).style.transition = "transform 0s";},1000);
        for (let i = 1; i <= 12; i++) {document.getElementById("link-page-"+i).style.display = "none";}
    } else if (pageOn == 0) {
        pageOn = 1;
        scrollZ = document.body.scrollTop;
        Obj_opacity = document.getElementById(id).style.opacity;
        document.getElementById(id).style.opacity = "1";
        top_popUp = document.getElementById(id).style.top;
        left_popUp = document.getElementById(id).style.left;
        positionZ = document.getElementById(id).style.transform.slice(45).replace("px)", "");
        document.getElementById(id).style.transition = "transform 1s";
        document.getElementById(id).style.left = "50%";
        document.getElementById(id).style.top = "50%";
        document.getElementById(id).style.transform = "translateZ(0px) translateX(-50%) translateY(-50%)";
        document.body.style.overflow = "hidden";
        for (let i = 1; i <= 12; i++) {document.getElementById("link-page-"+i).style.display = "initial";}
    }
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 5; j++) {
            if ("page-"+i+"-"+j != id) {
                if (pageOn == 1) {
                    document.getElementById("page-"+i+"-"+j).style.display = "none";
                    document.getElementById("page-"+i).style.display = "none";
                } else if (pageOn == 0) {
                    opacity("page-"+i+"-"+j);
                    opacity("page-"+i);
                }
            }
        }
    }
}