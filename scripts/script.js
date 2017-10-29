/**
 * Created by admin on 7/13/17.
 */

function changePlaceholder() {
    // search bar responsive
    if( $(window).width() <= 1352){
        $('.search_bar input').attr('placeholder','Search');
    } else {
        $('.search_bar input').attr('placeholder','Search by Companies, Categories, and News');
    }
}

$(window).resize( changePlaceholder ).trigger('resize');


$(document).ready(function(){

});

var lastScrollTop = 0;
$(window).scroll(function () {
        var cur_pos = $(window).scrollTop();

        /*
        if (cur_pos > $(".sub_nav").offset().top){
            if ($('.sub_nav').css("display")=="none")
                return;
            $('#sub_nav').css("visibility", "hidden");
            if ($('.sub_nav_menu').css("visibility") == "hidden"){
                $('.sub_nav_menu').css("visibility", "visible");
                $(".sub_nav_menu").css("background", "#6170FF");

                $(".subnav_menu2").css("color", "#FFF");
            }
        }else{
            $('#sub_nav').css("visibility", "visible");
            $('.sub_nav_menu').css("visibility", "hidden");
            $(".sub_nav_menu").css("background", "#FFF");
            $(".subnav_menu2").css("color", "#414042");
        }

        if (cur_pos > lastScrollTop){
            $(".sub_nav_menu").css("top", "0px");
        }else {
            $(".sub_nav_menu").css("top", "80px");
        }
        lastScrollTop = cur_pos;*/
    }
);