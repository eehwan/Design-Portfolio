const container = document.querySelector("#container");
let containerHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// topbutton
const topbutton = document.querySelector(".topbutton");

// section 감지
const sections = document.getElementsByTagName("section"),
sectionsArray = Array.from(sections);

const detectSection = (destination) => {
    // destination번째 항목에 classList.add('on')
    for (let n = 0; n < sectionsArray.length; n++){
        if (n == destination){
            setTimeout(()=> sectionsArray[n].classList.add("on"), 300);
        }
        else if (destination >= 0 && destination < sectionsArray.length){
            setTimeout(()=> sectionsArray[n].classList.remove("on"), 300);
        }
    }
}

// scroll control
const controlScroll = (e, targetElement, targetHeight) => {
    const destination = (Math.ceil(targetElement.scrollTop/targetHeight)+Math.sign(e.deltaY))
    targetElement.scrollTo({ top: destination*targetHeight, behavior: "smooth", });
    detectSection(destination);
};


const init = () => {
    window.addEventListener('resize', (e) => {
        containerHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    })    
    // 맨위로
    topbutton.addEventListener('click', () => {
        container.scrollTo({ top: 0, behavior: "smooth", });
        detectSection(0);
    });
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
    const sc1Btn = document.querySelector("#section01 .button");

    // scrolling
    let wheeling = undefined;
    const controlWheel = (e) => {
        e.preventDefault();
        // scroll start시 실행
        if(!wheeling){
            // console.log("start wheeling !");
            controlScroll(e, container, containerHeight);
        }
        clearTimeout(wheeling);
    
        // scroll stop시 실행
        wheeling = setTimeout(() => {
            // console.log("stop wheeling !");
            wheeling = undefined;
        }, 350);
    }
    container.addEventListener('wheel', controlWheel);

    detectSection(0);
}

window.addEventListener('load', () => init());