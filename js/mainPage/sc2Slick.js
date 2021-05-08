window.addEventListener('DOMContentLoaded', () => {
    // console.log("done!");
     // section2
     $("#section02 .left_txt_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#sc2_prev'), //prev
        nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '#section02 .center_img_slider',// another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: false, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
    });
    $("#section02 .center_img_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#sc2_prev'), //prev
        nextArrow: $('#sc2_next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '#section02 .left_txt_slider, #sc02_slider_small, #section02 .right_txt_slider', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
    });
    $("#sc02_slider_small").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#sc2_prev'), //prev
        nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '#section02 .center_img_slider', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
    });
    $("#section02 .right_txt_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#sc2_prev'), //prev
        nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '#section02 .center_img_slider', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
    });
});