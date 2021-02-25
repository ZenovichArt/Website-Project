console.log("Hello, js is connected");

document.addEventListener('DOMContentLoaded', function() {

    window.onscroll = function () {
        headerFunction()
    };

    var header = document.getElementById("StickyHeaderFlex");

    var sticky = header.offsetTop;

    function headerFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
})