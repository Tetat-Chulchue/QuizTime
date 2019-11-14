window.addEventListener("load", (test) => {
    let span_1 = document.getElementById("span_1");
    let span_2 = document.getElementById("span_2");
    let loader_img = document.getElementById("loader_img");
    span_1.style.animationName = "span_1";
    span_2.style.animationName = "span_2";
    loader_img.style.display = "none";
    setTimeout(()=>{
        let loadder = document.getElementById("loadder");
        loadder.className += " hidden"
        document.body.style.overflow = "initial";
    }, 2000);
});