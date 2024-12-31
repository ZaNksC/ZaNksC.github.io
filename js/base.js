// 折叠
let details = document.getElementsByClassName('details')
details = details || [];
for (let i = 0; i < details.length; i++) {
    let element = details[i]
    const summary = element.getElementsByClassName('details-summary')[0];
    if (summary) {
        summary.addEventListener('click', () => {
            element.classList.toggle('open');
        }, false);
    }
}


// 链接跳转
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href").substr(1);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                behavior: "smooth"
            });
        } else {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
        }
        if (id === "top") {
            history.replaceState(null, null, " ");
        } else {
            history.pushState(null, null, `#${id}`);
        }
    });
});