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
    targetElement.scrollTo({
        top: (Math.ceil(targetElement.scrollTop/targetHeight)+Math.sign(e.deltaY))*targetHeight,
        behavior: "smooth",
    });
};
let wheeling = undefined;
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    // scroll start시 실행
    if(!wheeling){
        // console.log("start wheeling !");
        controlScroll(e, container, Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
    }
    clearTimeout(wheeling);

    // scroll stop시 실행
    wheeling = setTimeout(() => {
        // console.log("stop wheeling !");
        wheeling = undefined;
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
const sc1Btn = document.querySelector("#section01 .button");
sc1Btn.addEventListener('click', ()=> {
    container.scrollTo({
        top: parseInt(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 3),
        behavior: "smooth",
    });
})

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

// section 감지
const sections = document.getElementsByTagName("section"),
    sectionsArray = Array.from(sections);
setTimeout(()=>sectionsArray[0].classList.add('on'), 20);
sectionsArray.forEach(section => {
    section.addEventListener('mouseenter', e => {
        e.target.classList.add("on");
    });
    section.addEventListener('mouseleave', e => {
        e.target.classList.remove("on");
    });
});

// cursor
// const cursor = document.querySelector("#cursor"),
//     mov1 = document.querySelector("#section01 .slider__item:nth-child(1) .img_box1 .movArea"),
//     mov2 = document.querySelector("#section01 .slider__item:nth-child(2) .img_box1 .movArea"),
//     mov3 = document.querySelector("#section01 .slider__item:nth-child(3) .img_box1 .movArea");

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