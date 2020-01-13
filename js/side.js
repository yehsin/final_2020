$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

function sidebarResize() {
    if ($(window).width() >= 768) {
        $("#wrapper").addClass("toggled");
    } else {
        $("#wrapper").removeClass("toggled");
    }
}

$(window).resize(sidebarResize);
sidebarResize();