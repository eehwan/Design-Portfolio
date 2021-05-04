window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();


    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });


    /* 스 크 롤 이 벤 트 영 역*/
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);

        if(scrollTop >= 750){
            $('#section02').addClass('on');
        }
        if(scrollTop >= 1520){
            $('#section03').addClass('on');
        }

        if(scrollTop >= 2500){
            $('#section04').addClass('on');
        }

        if(scrollTop >= 4000){
            $('#section06').addClass('on');
        }

        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

    });



    $('.topbutton').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


    (function () {



        var $mouseX = 0,
            $mouseY = 0,
            $xp = 0,
            $yp = 0,
            $flag =  $("#flag");



        $(document).mousemove(function (e) {
            $mouseX = e.pageX;
            $mouseY = e.pageY;
        });

        var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
            $xp += (($mouseX - $xp) / 32);
            $yp += (($mouseY - $yp) / 32);
            $flag.css({left: ($xp-$flag.width()*0.5) + 'px', top: ($yp -$flag.height()*0.5) + 'px'});
        }, 1);





        $('.play_hover').mouseenter(function () {

            $('#flag').addClass('on');
        }).mouseleave(function () {
            $('#flag').removeClass('on');

        })


        $('.menu').click(function () {
            $('#mega').addClass('on');
            // $('#mega').removeClass('');
        })

        $('.x_button').click(function () {
            $('#mega').removeClass('on');
        })


        $('.search_area').click(function () {
            $('.serach_area_click').addClass('on');
        })

        $('.img_slider').click(function () {
            $('.flag').addClass('on');
        })


        // �ϴ� ���� �����̵�
        $(".img_slider").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('#section01 .preview_hover'), //prev
            nextArrow: $('#section01 .next_hover'), //next
            autoplay: true, // autoplay mode
            autoplaySpeed: 5000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
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

        // $("#flag").slick({
        //     dots: false, //navigation
        //     arrows: true, //arrow
        //     prevArrow: $('#section01 .preview_hover'), //prev
        //     nextArrow: $('#section01 .next_hover'), //next
        //     autoplay: true, // autoplay mode
        //     autoplaySpeed: 5000, // auto speed
        //     pauseOnHover: false, // pause on mouse hover
        //     fade: true, //fade mode only one slider
        //     speed: 900, // speed
        //     infinite: true, // infinite mode
        //     asNavFor: '#right_slider', // another slider
        //     centerMode: false, // center move
        //     centerPadding: '0%', // center move padding
        //     slidesToShow: 1, // show slider number
        //     slidesToScroll: 1, // next slider number
        //     swipe: true, // swiper
        //     focusOnSelect: true, // click to slider
        //     draggable: true,
        //     vertical: false, // vertical slider
        //     verticalSwiping: false, // vertical swiper
        //     initialSlide: 0,// slider number
        //     cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        //     variableWidth: false,
        //
        //
        // });


        /*������ ū�����̵� */

        // noinspection LossyEncoding
        $("#right_slider").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('.prev'), //prev
            nextArrow: $('.next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 5000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
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

            if(nextSlide === 0){

                console.log('너는');
                $('.new_high_jewerly_txt').css('color', `#af7945`);
                $('.preview-next_slider').css('background', `#af7945`);
                $('#section01 .button_slider').css('border', `1px solid #af7945`);

            //    1
            }else if(nextSlide === 1){
                console.log('몇번');
                $('.new_high_jewerly_txt').css('color', `#175d4d`);
                $('.preview-next_slider').css('background', `#175d4d`);
                $('#section01 .button_slider').css('border', `1px solid #175d4d`);
            //    2
            }else if(nextSlide === 2){
                console.log('째니');
                $('.new_high_jewerly_txt').css('color', `#b0136c`);
                $('.preview-next_slider').css('background', `#b0136c`);
                $('#section01 .button_slider').css('border', `1px solid #175d4d`);
            //    3
            }

        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.svg-clip').removeClass('on');
            if (currentSlide === 0) {


                $('.svg-clip:nth-child(1)').addClass('on');

            } else if (currentSlide === 1) {

                $('.svg-clip:nth-child(2)').addClass('on');

            } else if (currentSlide === 2) {

                $('.svg-clip:nth-child(3)').addClass('on');

            }


        });


        $(" .left_txt_slider").slick({
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


        $(" .center_img_slider").slick({
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


        /*

                gsap.to(".box2", {
                    x: 400,
                    scrollTrigger: {
                        trigger: ".box2",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: false,
                        id: "scrub"
                    }
                });

                gsap.to(".box3", {
                    x: 400,
                    rotation: 360,
                    scrollTrigger: {
                        trigger: ".box3",
                        start: "top center",
                        end: "top 100px",
                        scrub: 1,
                        markers: true,
                        id: "scrub"
                    }
                });*/

    })();


})


