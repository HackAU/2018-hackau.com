$(document).ready(function () {
    if ($(window).width() < 768) {
        $("#menu").click(function () {
            if ($('#menu-list').css('display') == 'none') {
                $("#menu").parent().css('border-bottom', "0.5px solid white");
                $("#menu-list").css('border-bottom', "0.5px solid white");
                $("#menu-list").slideDown("fast");
            }
            else {
                $("#menu-list").slideUp("fast", function () {
                    $("#menu").parent().css('border-bottom', "0");
                    $("#menu-list").css('border-bottom', "0");
                });

            }
        });
        $("#menu-list").find("li").find("div").find("a").click(function () {
            $("#menu-list").slideUp("fast", function () {
                $("#menu").parent().css('border-bottom', "0");
                $("#menu-list").css('border-bottom', "0");
            });
        });

    } else {
        var HEIGHT_BLOCK = 10;
        var schedule_section = $("#schedule").offset().top - HEIGHT_BLOCK;
        var faq_section = $("#faq").offset().top - HEIGHT_BLOCK;
        var video_section = $("#video").offset().top - HEIGHT_BLOCK;
        var sponsors_section = $("#sponsors").offset().top - HEIGHT_BLOCK;
        var team_section = $("#team").offset().top - HEIGHT_BLOCK;

        $(window).scroll(function () {
            $(window).on("scroll", function () {
                var position = $(window).scrollTop();
                if (position < schedule_section) {
                    $("#menu-register").css("color", "#FF0042");
                    $("#menu-schedule").css("color", "white");
                    $("#menu-faq").css("color", "white");
                    $("#menu-video").css("color", "white");
                    $("#menu-sponsors").css("color", "white");
                    $("#menu-team").css("color", "white");
                } else if (position < faq_section) {
                    $("#menu-register").css("color", "white");
                    $("#menu-schedule").css("color", "#FF0042");
                    $("#menu-faq").css("color", "white");
                    $("#menu-video").css("color", "white");
                    $("#menu-sponsors").css("color", "white");
                    $("#menu-team").css("color", "white");
                } else if (position < video_section) {
                    $("#menu-register").css("color", "white");
                    $("#menu-schedule").css("color", "white");
                    $("#menu-faq").css("color", "#FF0042");
                    $("#menu-video").css("color", "white");
                    $("#menu-sponsors").css("color", "white");
                    $("#menu-team").css("color", "white");
                } else if (position < sponsors_section) {
                    $("#menu-register").css("color", "white");
                    $("#menu-schedule").css("color", "white");
                    $("#menu-faq").css("color", "white");
                    $("#menu-video").css("color", "#FF0042");
                    $("#menu-sponsors").css("color", "white");
                    $("#menu-team").css("color", "white");
                } else if (position < team_section) {
                    $("#menu-register").css("color", "white");
                    $("#menu-schedule").css("color", "white");
                    $("#menu-faq").css("color", "white");
                    $("#menu-video").css("color", "white");
                    $("#menu-sponsors").css("color", "#FF0042");
                    $("#menu-team").css("color", "white");
                } else {
                    $("#menu-register").css("color", "white");
                    $("#menu-schedule").css("color", "white");
                    $("#menu-faq").css("color", "white");
                    $("#menu-video").css("color", "white");
                    $("#menu-sponsors").css("color", "white");
                    $("#menu-team").css("color", "#FF0042");
                }
            });
        });
    }
});