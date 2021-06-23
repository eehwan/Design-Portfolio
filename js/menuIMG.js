const menu_container = document.querySelector(".menu_container");

const img1 = document.querySelector("#right_area .one");
img1.classList.add("on");
Array.from(menu_container.children).forEach(x => {
    x.addEventListener('mouseenter', (e) => {
        const newImg = document.querySelector(`#right_area .${e.target.className}`)
        newImg.classList.add("on");
    })
    x.addEventListener('mouseleave', (e) => {
        const newImg = document.querySelector(`#right_area .${e.target.className}`);
        newImg.classList.remove("on");
        img1.classList.add("on");
    })
});

document.querySelector(".menu_container:nth-child(1)").addEventListener('click', () => {
    location.replace('highJewerly.html');
});
document.querySelector(".menu_container:nth-child(1)").addEventListener('click', () => {
    location.replace('bezero1.html');
});