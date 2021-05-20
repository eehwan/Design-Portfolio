const movAreasArray = Array.from(document.getElementsByClassName("movArea"));
const pop = document.querySelector('.pop');
const videoContainers = Array.from(document.getElementsByClassName("videoContainer"));

pop.addEventListener('click', ()=>{
    pop.className = 'pop';
})
for (let i=0; i < movAreasArray.length; i++){
    // console.log(movAreasArray[i], videoContainers[i])
    movAreasArray[i].addEventListener('click', (e)=> {
        // console.log(i)
        pop.classList.add('on');
        pop.classList.add(`video${i+1}`);
        videoContainers[i].querySelector('video').play();
    })
}