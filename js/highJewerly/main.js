const container = document.querySelector("#container");
let containerHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// topbutton
const topbutton = document.querySelector(".topbutton");

// scroll control
const controlScroll = (e, targetElement, targetHeight) => {
    targetElement.scrollTo({
        top: (Math.ceil(targetElement.scrollTop/targetHeight)+Math.sign(e.deltaY))*targetHeight,
        behavior: "smooth",
    });
};

// slider
const makeSlider = (targetTag, nextBtnTag, previousBtnTag, delay=3000) => {
    const target = document.querySelector(targetTag);
    target.innerHTML = target.innerHTML.replace(/(\n((\t| ){0,})){1,}/g, '');
    const childNodes = Array.from(target.childNodes)
    
    let i = 0
    childNodes[i].classList.add("on");
    const changSlide = () => {
        if (i >= childNodes.length){i = 0}
        if (i == -1){i = childNodes.length-1}
        childNodes.forEach(element => {
            element.classList.remove('on');
        });
        childNodes[i].classList.add("on");
    }
    let timer = setInterval(() => {
        i += 1
        changSlide(i);
    }, delay);
    
    const nextBtn = document.querySelector(nextBtnTag),
    previousBtn = document.querySelector(previousBtnTag);
    
    nextBtn.addEventListener('click', () => {
        clearInterval(timer);
        i += 1;
        changSlide();
        timer = setInterval(() => {
            i += 1
            changSlide(i);
        }, delay);
    });
    previousBtn.addEventListener('click', () => {
        clearInterval(timer);
        i -= 1;
        changSlide();
        timer = setInterval(() => {
            i += 1
            changSlide(i);
        }, delay);
    });
}

// section 감지
const sections = document.getElementsByTagName("section"),
sectionsArray = Array.from(sections);

const detectSection = (target) => {
    const current = Math.ceil(target.scrollTop/containerHeight);
    console.log(current);
    sectionsArray.forEach(section => section.classList.remove("on"));
    if (current < sectionsArray.length){
        sectionsArray[current].classList.add("on");
    }
}

const init = () => {
    window.addEventListener('resize', (e) => {
        containerHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    })    
    makeSlider("#section01 .slider", "#section01 .nextBtn", "#section01 .prevBtn")
    // 맨위로
    topbutton.addEventListener('click', () => {
        container.scrollTo({
            top: 0,
            behavior: "smooth",
        })
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
    sc1Btn.addEventListener('click', ()=> {
        container.scrollTo({
            top: containerHeight * 3,
            behavior: "smooth",
        });
    })
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
    // sections
    detectSection(container);
    container.addEventListener('scroll', (e) => {
        detectSection(container);
    })
    window.addEventListener('resize', (e) => {
        detectSection(container);
    })
}

window.addEventListener('load', e => init());

// const cursorWidth = 77,
//     cursorHeight = 77;
// const controlCursor = (e) => {
//     console.log(e);
//     cursor.style.left = `${e.pageX-cursorWidth}px`;
//     cursor.style.top = `${e.pageY -cursorHeight}px`;
// }

// console.log(mov1, mov2, mov3);
// mov1.addEventListener('mousemove', (e) => {
//     cursor.classList.add('mov1');
//     controlCursor(e);
// });
// mov1.addEventListener('mouseout', () => {
//     cursor.classList.remove('mov1');
// });
// mov2.addEventListener('mousemove', (e) => {
//     cursor.classList.add('mov2');
//     controlCursor(e);
// });
// mov2.addEventListener('mouseout', () => {
//     cursor.classList.remove('mov2');
//     console.log("22");
// });
// mov3.addEventListener('mousemove', (e) => {
//     cursor.classList.add('mov3');
//     controlCursor(e);
// });
// mov3.addEventListener('mouseout', () => {
//     cursor.classList.remove('mov3');
//     console.log("33");
// });