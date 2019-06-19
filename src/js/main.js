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
    //下から表示させる要素を指定
    var $footer = $('#js-scrollFt')
    var $header = $('#js-scrollHdr')
    //一定量スクロールするまで非表示
    $footer.hide();
    $(window).on( 'scroll', function () {
      //スクロール位置を取得
      if ( scrolledTop <= $(this).scrollTop() ) {
        //要素をスライド非表示
        $footer.slideDown('slow');
      } else {
        //要素をスライド表示
        $footer.slideUp('slow');
      }

      scrolledTop = $(this).scrollTop()
    });
  });