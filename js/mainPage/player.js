const movAreas = document.getElementsByClassName("mov_area");
const movAreasArray = Array.from(movAreas);
const pop = document.querySelector('.pop');
const videoContainers = Array.from(document.getElementsByClassName("videoContainer"));

pop.addEventListener('click', ()=>{
    pop.className = 'pop';
})
for (let i=0; i < movAreasArray.length; i++){
    movAreasArray[i].addEventListener('click', (e)=> {
        pop.classList.add('on');
        pop.classList.add(`video${i+1}`);
        videoContainers[i].querySelector('video').play();
    })
}