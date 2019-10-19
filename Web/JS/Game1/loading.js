window.addEventListener("load", () => {
    setTimeout(()=>{
        let loadder = document.getElementById("loadder");
        loadder.className += " hidden"
        document.body.style.overflow = "initial";
    }, 2000);
});