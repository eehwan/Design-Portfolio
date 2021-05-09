const changing = document.querySelector("#changing");
const selectee = document.getElementsByClassName("selectee");
Array.from(selectee).forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        changing.className = e.target.id;
    });
});