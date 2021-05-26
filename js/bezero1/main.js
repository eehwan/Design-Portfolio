const container = document.querySelector("#container");
let containerHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// topbutton
const topbutton = document.querySelector(".topbutton");

// section 감지
const sections = document.getElementsByTagName("section"),
sectionsArray = Array.from(sections);

const detectSection = (destination) => {
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

// Section1 flag
const handleFlag = (target, movArea) => {

    const flagWidth = "77",
        flagHeight = "77";
    let $mouseX = 0,
        $mouseY = 0,
        dx = 0,
        dy = 0;
    const moveFlag = (target) => {
        // console.log("iters");
        dx += (($mouseX - dx) / 12);
        dy += (($mouseY - dy) / 12);
        
        target.style.left = `${dx-flagWidth}px`;
        target.style.top = `${dy -flagHeight}px`;
    }
    movArea.addEventListener('mouseenter', (e) => {
        target.parentNode.classList.add('on');
        target.style.left = `${e.pageX-flagWidth}px`;
        target.style.top = `${e.pageY -flagHeight}px`;
    });
    movArea.addEventListener('mousemove', (e) => {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
        for (let i=0; i <30; i++) {
            setTimeout(() => moveFlag(target), 10);
        }
    });
    movArea.addEventListener('mouseleave', (e) => {
        target.parentNode.classList.remove('on');
    });
}


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
    // 컬렉션 자세히보기
    // sc1Btn.addEventListener('click', ()=> {
    //     container.scrollTo({ top: containerHeight * 3, behavior: "smooth", });
    //     detectSection(3);
    // })
    // scrolling
    let wheeling = undefined;
    container.addEventListener('wheel', (e) => {
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
    });

    detectSection(0);
    // handleFlag(document.querySelector("#flag1"), document.querySelector(".img_box2_slider"));
}

window.addEventListener('load', () => init());