let menu = document.getElementById('menu')
if (menu) {
    menu.scrollLeft = Number(localStorage.getItem("menu-scroll-position"));
    menu.onscroll = function () {
        localStorage.setItem("menu-scroll-position", menu.scrollLeft.toString());
    }
}

window.onscroll = function () {
    const goTopButton = document.getElementById("top-link");
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        goTopButton.style.visibility = "visible";
        goTopButton.style.opacity = "1";
    } else {
        goTopButton.style.visibility = "hidden";
        goTopButton.style.opacity = "0";
    }
};

document.addEventListener('scroll', function (e) {
    const readProgress = document.getElementById("pe-read-progress");
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    readProgress.innerText = ((scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100).toFixed(0);
})