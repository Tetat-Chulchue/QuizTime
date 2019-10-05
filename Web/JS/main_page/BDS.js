window.onload = () => {
    if (navigator.userAgent.indexOf("Chrome") == -1) {
        document.body.style.display = "none";
        window.location.href = 'BDS.html';
    }
}