window.addEventListener('DOMContentLoaded', () => {
    // console.log("done!");
    
    // section1 하단 이미지
    $(".img_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section01 .preview_hover'), //prev
        nextArrow: $('#section01 .next_hover'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 5000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        asNavFor: '#right_slider', // another slider
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
    $("#flag").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section01 .preview_hover'), //prev
        nextArrow: $('#section01 .next_hover'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 5000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        asNavFor: '#right_slider', // another slider
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
    $("#right_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 5000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        asNavFor: '.img_slider', // another slider
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
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.svg-clip').removeClass('on');
        // console.log(event,"/n", slick,"/n", currentSlide,"/n", nextSlide);
        if (currentSlide === 2) {
            $('.new_high_jewerly_txt').css('color', `#af7945`);
            $('.preview-next_slider').css('background', `#af7945`);
            $('#section01 .button_slider').css('border', `1px solid #af7945`);

            $('.svg-clip:nth-child(1)').addClass('on');
        } else if (currentSlide === 0) {
            $('.new_high_jewerly_txt').css('color', `#175d4d`);
            $('.preview-next_slider').css('background', `#175d4d`);
            $('#section01 .button_slider').css('border', `1px solid #175d4d`);
            
            $('.svg-clip:nth-child(2)').addClass('on');
        } else if (currentSlide === 1) {
            $('.new_high_jewerly_txt').css('color', `#b0136c`);
            $('.preview-next_slider').css('background', `#b0136c`);
            $('#section01 .button_slider').css('border', `1px solid #b0136c`);

            $('.svg-clip:nth-child(3)').addClass('on');
        }
    });
});