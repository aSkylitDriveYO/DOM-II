// Your code goes here


const imageFunBus = document.querySelector(".intro");
const SignUpButton = document.querySelectorAll (".btn");
const heading = document.getElementsByTagName("header");


imageFunBus.addEventListener("mouseover", () => {
    imageFunBus.style.display='none';
})

SignUpButton.forEach(item=> {
    item.addEventListener('click', () => {
        prompt("Your Name?");
    })
});

window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === 1301) {
        alert('you have reached the bottom');
    }
    console.log(scrolled);
    console.log(max);
    
});




/*buttonFunBus.onclick = function(){
    imageFunBus.style.display='none';
} */


