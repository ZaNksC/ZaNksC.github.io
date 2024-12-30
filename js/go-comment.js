document.addEventListener('scroll', function () {
    const comment = document.getElementById("comments-title");
    const bottomToComment = document.getElementById("comments-link")
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const offsetTop = comment.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    if (top <= viewPortHeight + 100) {
        bottomToComment.style.visibility = "hidden";
        bottomToComment.style.opacity = "0";
    } else {
        bottomToComment.style.visibility = "visible";
        bottomToComment.style.opacity = "1";
    }
})