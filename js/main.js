$(document).ready(function () {
    /* Show the submenu when the users click on the #hamburgerIcon */
    $("#hamburgerIcon").click(function () {
        $("#submenu").fadeIn(1000);
        $("#hamburgerIcon").hide();
        $("#closeHamburgerIcon").show();
        $("#navSmallScreen").toggleClass("blackBackgroundForSmallScreen");
    });

    /* Hide the submenu when the users click on the #closeHamburgerIcon */
    $("#closeHamburgerIcon").click(function () {
        $("#hamburgerIcon").show();
        $("#closeHamburgerIcon").hide();
        $("#submenu").toggle("drop");
        $("#navSmallScreen").toggleClass("blackBackgroundForSmallScreen");
    });

    /* Show Description and News paragraphs when th users scroll */
    $(window).scroll(function () {
        $(".fadeInHome").show(1500);
    });

});

