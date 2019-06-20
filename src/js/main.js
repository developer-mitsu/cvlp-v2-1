import "./slider.js";
import "../scss/main.scss";
import "./hum.js";

$(function () {
    let students = ["#name1", "#name2", "#name3", "#name4"];
    students.forEach(function (value) {
        $(value).on('click', function () {
            location.href = $(this).attr('data-url');
        })
    })

    $('.hdline--main-btn').on({
        'mouseenter': function () {
            $('.play-icon').addClass('hover');
        },
        'mouseleave': function () {
            $('.play-icon').removeClass('hover');
        }
    });

})