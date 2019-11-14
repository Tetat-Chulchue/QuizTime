window.addEventListener("load", (test) => {
    let span_1 = document.getElementById("span_1");
    let span_2 = document.getElementById("span_2");
    let loader_img = document.getElementById("loader_img");
    let pace = document.getElementById("pace_lib");
    let loadder = document.getElementById("loadder");

    span_1.style.animationName = "span_1";
    span_2.style.animationName = "span_2";
    loader_img.style.animationName = "img";
    pace.style.animationName = "pace";
    pace.style.display = "initial";
    setTimeout(()=>{
        document.body.style.overflow = "initial";
        loader_img.style.display = "none";
        pace.style.display = "none";
    }, 2000);
    setTimeout(() => {
        loadder.className += " hidden";
    }, 2000);
});