var ham = document.getElementById("ham");
var toggleNav = function () {
    var hiddenNav = document.getElementById("hiddenNav");
    hiddenNav === null || hiddenNav === void 0 ? void 0 : hiddenNav.classList.toggle("active");
};
ham === null || ham === void 0 ? void 0 : ham.addEventListener("click", function () {
    toggleNav();
});
