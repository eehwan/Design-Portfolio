window.addEventListener('DOMContentLoaded', () => {
    $("#section03 .main_container").slick({
       dots: false, //navigation
       arrows: true, //arrow
       prevArrow: $('#sc3_prev'), //prev
       nextArrow: $('#sc3_next'), //next
       autoplay: false, // autoplay mode
       autoplaySpeed: 3000, // auto speed
       pauseOnHover: false, // pause on mouse hover
       fade: true, //fade mode only one slider
       speed: 900, // speed
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
   }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.tab_ui').removeClass('on');
        const $current = $('#section03 .current');
        const $progress = $('#section03 .progress');
        $progress.removeClass('on');

        if (nextSlide === 0) {
            $('.tab_ui:nth-child(1)').addClass('on');
            $current.html("1");
        } else if (nextSlide === 1) {
            $('.tab_ui:nth-child(2)').addClass('on');
            $current.html("2");
        } else if (nextSlide === 2) {
            $('.tab_ui:nth-child(3)').addClass('on');
            $current.html("3");
        }
        setTimeout(() => $progress.addClass('on'), 10);
    });

    document.querySelector("#section03 .tab .tab_ui:nth-child(1)").addEventListener('click', () => {
        $("#section03 .main_container").slick('goTo', 0);
    });
    document.querySelector("#section03 .tab .tab_ui:nth-child(2)").addEventListener('click', () => {
        $("#section03 .main_container").slick('goTo', 1);
    });
    document.querySelector("#section03 .tab .tab_ui:nth-child(3)").addEventListener('click', () => {
        $("#section03 .main_container").slick('goTo', 2);
    });
});