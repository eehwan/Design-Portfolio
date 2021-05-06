window.addEventListener('DOMContentLoaded', () => {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: false,
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
        
        // section2
        if(scrollTop >= 750 && scrollTop <=1520){
            $('#section02').addClass('on');
        }else{
            $('#section02').removeClass('on');
        }
        // section3
        if(scrollTop >= 1520 && scrollTop <= 2500){
            $('#section03').addClass('on');
        }else{
            $('#section03').removeClass('on');
        }
        // section4
        if(scrollTop >= 2500 && scrollTop <= 3200){
            $('#section04').addClass('on');
        }else{
            $('#section04').removeClass('on');
        }
        // section6
        if(scrollTop >= 4000){
            $('#section06').addClass('on');
        }
        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)
    });


    // 맨 위로
    $('.topbutton').click(function () {
        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });
    });

    // Section1 flag
    const $flag =  $("#flag"),
        flag =  document.querySelector("#flag"),
        play_hover = document.querySelector(".play_hover");
    const flagWidth = 77,
        flagHeight = 77;
    let $mouseX = 0,
        $mouseY = 0,
        dx = 0,
        dy = 0;
    const handleFlag = () => {
        // console.log("iters");

        dx += (($mouseX - dx) / 12);
        dy += (($mouseY - dy) / 12);
        
        flag.style.left = `${dx-flagWidth}px`;
        flag.style.top = `${dy -flagHeight}px`;
    }
    play_hover.addEventListener('mouseenter', (e) => {
        flag.style.display = "block";
        flag.style.left = `${e.pageX-flagWidth}px`;
        flag.style.top = `${e.pageY -flagHeight}px`;
    });
    play_hover.addEventListener('mousemove', (e) => {
        $mouseX = e.pageX;
        $mouseY = e.pageY;

        for (let i=0; i <30; i++) {
            setTimeout(handleFlag, 1);
        }
    });
    play_hover.addEventListener('mouseleave', (e) => {
        flag.style.display = "none";
    });
        

    // 메뉴창
    $('.menu').click(function () {
        $('#mega').addClass('on');
    })
    $('.x_button').click(function () {
        $('#mega').removeClass('on');
    })
    // 검색창
    $('.search_area').click(function () {
        $('.serach_area_click').toggleClass('on');
    })
   
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
});


