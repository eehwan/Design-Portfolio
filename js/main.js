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
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
        logo = document.querySelector(".logo"),
        topmenu = document.querySelector(".topmenu"),
        menu = document.querySelector(".menu"),
        lng  = document.querySelector(".lng");

    container.addListener((e) => {
        let scrollTop = container.scrollTop;
        // section1
        if(scrollTop < vh-0.2*vh){
            $('#section01').addClass('on');
            topmenu.style.filter = "invert(0)";
        }else{
            $('#section01').removeClass('on');
        }
        // section2
        if(scrollTop >= vh-0.2*vh && scrollTop < (vh*2)-0.2*vh) {
            $('#section02').addClass('on');
            topmenu.style.filter = "invert(100%)";
        }else{
            $('#section02').removeClass('on');
        }
        // section3
        if(scrollTop >= (vh*2)-0.2*vh && scrollTop < (vh*3)-0.2*vh){
            $('#section03').addClass('on');
            topmenu.style.filter = "invert(100%)";
        }else{
            $('#section03').removeClass('on');
        }
        // section4
        if(scrollTop >= (vh*3)-0.2*vh && scrollTop < (vh*4)-0.2*vh){
            $('#section04').addClass('on');
            logo.style.filter = "invert(100%)";
            menu.style.filter = "invert(100%)";
            topmenu.style.filter = "invert(0)";
        }else{
            $('#section04').removeClass('on');
            logo.style.filter = "invert(0)";
            menu.style.filter = "invert(0)";
        }
        // section5
        if(scrollTop >= (vh*4)-0.2*vh && scrollTop < (vh*5)-0.2*vh){
            $('#section05').addClass('on');
            topmenu.style.filter = "invert(100%)";
            lng.style.filter = "invert(100%)";
        }else{
            $('#section05').removeClass('on');
            lng.style.filter = "invert(0)";
        }
        // section6
        if(scrollTop >= (vh*5)-0.2*vh){
            $('#section06').addClass('on');
            topmenu.style.filter = "invert(100%)";
        }else{
            $('#section06').removeClass('on');
        }
        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)
    });

    // 맨 위로 버튼
    $('.topbutton').click(function () {
        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });
    });

    // Section1 flag
    const flag =  document.querySelector("#flag"),
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
        flag.style.opacity = "1";
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
        flag.style.opacity = "0";
    });
        

    // 메뉴창
    const mega = document.querySelector("#mega");
    $('.menu').click(function () {
        mega.classList.add('on');
    })
    $('.x_button').click(function () {
        mega.classList.remove('on');
    })
    // 검색창
    $('.search_area_click').click(function () {
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


