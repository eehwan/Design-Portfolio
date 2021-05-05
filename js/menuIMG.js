const menu_container = document.querySelector(".menu_container");

Array.from(menu_container.children).forEach(x => {
    x.addEventListener('mouseenter', (e) => {
        const newImg = document.querySelector(`#right_area .${e.target.className}`)
        newImg.style.display = "block"
    })
    x.addEventListener('mouseleave', (e) => {
        const newImg = document.querySelector(`#right_area .${e.target.className}`);
        newImg.style.display = "none";
        const img1 = document.querySelector("#right_area .one");
        img1.style.display = "block";
    })
});

