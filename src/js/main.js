import "./slider.js";
import "../scss/main.scss";
import "./hum.js";

$(function () {
    $("#name1").on('click', function () {
        location.href = $(this).attr('data-url');
    })
})