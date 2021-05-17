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
const controlScroll = (e, targetElement, targetHeight) => {
    //scroll down
    if(e.wheelDelta < 0) {
        targetElement.scrollTo({
            top: parseInt((targetElement.scrollTop/targetHeight)+1)*targetHeight,
            behavior: "smooth",
        })
    }
    //scroll up
    else {
        targetElement.scrollTo({
            top: parseInt((targetElement.scrollTop-1)/targetHeight)*targetHeight,
            behavior: "smooth",
        });
    }
};
let wheeling = undefined;
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    // scroll start시 실행
    if(!wheeling){
        // console.log("start wheeling !");
    }
    clearTimeout(wheeling);

    // scroll stop시 실행
    wheeling = setTimeout(() => {
        // console.log("stop wheeling !");
        wheeling = undefined;
        controlScroll(e, container, Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));  
    }, 350);
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
makeSlider("#section01 .slider", "#section01 .nextBtn", "#section01 .prevBtn")