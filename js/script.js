/*global document*/
/*global window*/
/*global $*/
/*$ = jQuery*/


$(document).ready(function() {
    "use strict";

    var $menu = $('.menu');
    var $backToTop = $(".back-to-top");


    $menu.on("mouseover", function() {
        $($("nav")[0]).addClass("nav-toggle");
    });


    //navigation interaction
    $("nav").on("mouseover", function() {
        $($("nav")[0]).addClass("nav-toggle");
    });

    $(".menu").on("mouseleave", function() {
        $($("nav")[0]).removeClass("nav-toggle");
    });

    $("nav").on("mouseleave", function() {
        $($("nav")[0]).removeClass("nav-toggle");
    });


    //smooth scrolling onClick nav links
    $("nav").find("a").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        //        if (section !== "sitepages/bitlab.html") {
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 'slow');
        //        }
    });


    //scroll animation on click
    $backToTop.on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


    var string = "Working on my personal brand, stay tuned";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 80);
    })();
});