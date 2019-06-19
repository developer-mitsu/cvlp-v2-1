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
})

$(function() {
    var scrolledTop = 0
    $footer.hide();
    $(window).on( 'scroll', function () {
      if ( scrolledTop <= $(this).scrollTop() ) {
        $footer.slideDown('slow');
      } else {
        $footer.slideUp('slow');
      }

      scrolledTop = $(this).scrollTop()
    });
  });