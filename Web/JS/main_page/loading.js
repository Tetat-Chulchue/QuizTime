window.addEventListener("load", (test) => {
    let loadder = document.getElementById("loadder");
    setTimeout(() => {
        loadder.className += " hidden";
        document.body.style.overflow = "initial";
    }, 2000);

    let span_1 = document.getElementById("span_1");
    let span_2 = document.getElementById("span_2");
    let loader_img = document.getElementById("loader_img");
    let pace = document.getElementById("pace_lib");

    span_1.style.animationName = "span_1";
    span_2.style.animationName = "span_2";
    loader_img.style.animationName = "img";
    pace.style.animationName = "pace";
    pace.style.display = "initial";
    setTimeout(()=>{
        loader_img.style.display = "none";
        pace.style.display = "none";
    }, 2000);
});