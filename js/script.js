// 滾動進度條
window.addEventListener("scroll", function () {
    let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";

    // Navbar 變化
    let navbar = document.querySelector(".navbar");
    if (scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
