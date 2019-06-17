import "../scss/main.scss";
import "slick-carousel/slick/slick.css";
// こちらはメソッド読み込みのimport
import slick from "slick-carousel";

$(".slide-container").slick({
  centerMode: true,
  arrow: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }
  ]
});
