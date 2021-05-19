const flags = document.getElementsByClassName("flag");
const flagsArray = Array.from(flags);

for (let i=0; i < flagsArray.length; i++){
    console.log(flagsArray[i].innerHTML, i)
}