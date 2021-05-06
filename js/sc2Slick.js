window.addEventListener('DOMContentLoaded', () => {
    // console.log("done!");
     // section2
     $(".left_txt_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.bezero1_pre_next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '.center_img_slider,#sc02_slider_small',// another slider
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
    $(".center_img_slider").slick({
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
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
        arrows: false, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
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
        arrows: false, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
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
    // $(".right_txt_slider").slick({
    //     dots: false, //navigation
    //     arrows: true, //arrow
    //     prevArrow: $('.prev'), //prev
    //     nextArrow: $('.next'), //next
    //     autoplay:true, // autoplay mode
    //     autoplaySpeed: 2000, // auto speed
    //     pauseOnHover:false, // pause on mouse hover
    //     fade: false, //fade mode only one slider
    //     speed: 900, // speed
    //     infinite: true, // infinite mode
    //     // asNavFor: '.slider2', // another slider
    //     centerMode: false, // center move
    //     centerPadding: '0%', // center move padding
    //     slidesToShow: 1, // show slider number
    //     slidesToScroll: 1, // next slider number
    //     swipe: true, // swiper
    //     focusOnSelect: true, // click to slider
    //     draggable:true,
    //     vertical: false, // vertical slider
    //     verticalSwiping: false, // vertical swiper
    //     initialSlide:0,// slider number
    //     cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    //     variableWidth: false,
    //
    //
    // });
});