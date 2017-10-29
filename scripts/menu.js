$(document).ready(function(){
    $(".select_category").on("click", function(){
        $(".menu_categories").toggle();
        $(".menu_categories_contents").toggle();
        $(".caret_category").toggle();
        $(".close_category").toggle();
        $(".nav_menu>ul").hide();
    });

    $(".nav_menu>a").on("mouseover", function(){
        $(".nav_menu ul").fadeOut(250);
        $(this).next().show();

        $(".caret_category").show();
        $(".close_category").hide();
        $(".menu_categories, .menu_categories_contents").hide();
    });

    // Cancelling
    $(window).click(function() {
        $(".nav_menu>ul, .menu_categories, .menu_categories_contents").hide();
        $(".caret_category").show();
        $(".close_category").hide();
    });
    $('.nav_menu, .avatar, .select_category').click(function(event){
        event.stopPropagation();
    });
});