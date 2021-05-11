// section 감지
const sections = document.getElementsByTagName("section");
Array.from(sections).forEach(section => {
    section.addEventListener('mouseenter', e => {
        e.target.classList.add("on");
    });
    section.addEventListener('mouseleave', e => {
        e.target.classList.remove("on");
    });
});

const container = document.querySelector("#container");
// topbutton
const topbutton = document.querySelector(".topbutton");
topbutton.addEventListener('click', () => {
    container.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

// scroll control
let wheeling = undefined;
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    // scroll start시 실행
    // if(!wheeling){
    //     console.log("start wheeling !");
    // }
    clearTimeout(wheeling);
    // scroll stop시 실행
    wheeling = setTimeout(() => {
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        // console.log("stop wheeling !");
        wheeling = undefined;
    
        //scroll down
        if(e.wheelDelta < 0) {
            container.scrollTo({
                top: parseInt((container.scrollTop/vh)+1)*vh,
                behavior: "smooth",
            })
        }
        //scroll up
        else {
            container.scrollTo({
                top: parseInt((container.scrollTop-1)/vh)*vh,
                behavior: "smooth",
            });
        }
    }, 100);
});

// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
//     logo = document.querySelector(".logo"),
//     topmenu = document.querySelector(".topmenu"),
//     menu = document.querySelector(".menu"),
//     lng  = document.querySelector(".lng");

// document.addEventListener('scroll', (e) => {
//     let scrollTop = document.documentElement.scrollTop
//     console.log(scrollTop)
//     // section1
//     if(scrollTop < vh-0.2*vh){
//         $('#section01').addClass('on');
//     }else{
//         $('#section01').removeClass('on');
//     }
//     // section2
//     if(scrollTop >= vh-0.2*vh && scrollTop < (vh*2)-0.2*vh) {
//         $('#section02').addClass('on');
//     }else{
//         $('#section02').removeClass('on');
//     }
//     // section3
//     if(scrollTop >= (vh*2)-0.2*vh && scrollTop < (vh*3)-0.2*vh){
//         $('#section03').addClass('on');
//     }else{
//         $('#section03').removeClass('on');
//     }
//     // section4
//     if(scrollTop >= (vh*3)-0.2*vh && scrollTop < (vh*4)-0.2*vh){
//         $('#section04').addClass('on');
//     }else{
//         $('#section04').removeClass('on');
//     }
//     // section5
//     if(scrollTop >= (vh*4)-0.2*vh && scrollTop < (vh*5)-0.2*vh){
//         $('#section05').addClass('on');
//     }else{
//         $('#section05').removeClass('on');
//     }
// });


// 메뉴창
const menu = document.querySelector(".menu");
const mega = document.querySelector("#mega");
const x_button = document.querySelector(".x_button");
menu.addEventListener('click', () => {
    mega.classList.add('on');
});
x_button.addEventListener('click', () => {
    mega.classList.remove('on');
});