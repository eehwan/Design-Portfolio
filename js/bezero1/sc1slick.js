window.addEventListener('DOMContentLoaded', () => {
     $("#section01 .title_box_slider").slick({
        dots: false, //navigation
        arrows: false, //arrow
        // prevArrow: $('#sc2_prev'), //prev
        // nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '#section02 .center_img_slider',// another slider
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
    $("#section01 .img_box1_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section01 .prevBtn'), //prev
        nextArrow: $('#section01 .nextBtn'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        asNavFor: '#section01 .title_box_slider, #section01 .img_box2_slider, #flag1', // another slider
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
    $("#section01 .img_box2_slider").slick({
        dots: false, //navigation
        arrows: false, //arrow
        // prevArrow: $('#sc2_prev'), //prev
        // nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '#section02 .center_img_slider', // another slider
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
    $("#flag1").slick({
        dots: false, //navigation
        arrows: false, //arrow
        // prevArrow: $('#sc2_prev'), //prev
        // nextArrow: $('#sc2_next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '#section02 .center_img_slider', // another slider
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