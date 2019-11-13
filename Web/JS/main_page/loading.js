window.addEventListener("load", (test) => {
    console.log(test);
    setTimeout(()=>{
        let loadder = document.getElementById("loadder");
        loadder.className += " hidden"
        document.body.style.overflow = "initial";
    }, 1000);
});