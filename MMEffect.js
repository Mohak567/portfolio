function throttle(func, delay) {
    let lastCalledTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCalledTime >= delay) {
            func(...args);
            lastCalledTime = now;
        }
    };
}

const throttleStar = throttle((e) =>{
    // let dot = document.createElement("div");
    // dot.className = "dot";
    let starIcon = document.createElement("i");
    starIcon.className = 'fa-solid fa-star';
    let x = e.clientX;
    let y = e.clientY;
    starIcon.style.position = 'fixed'
    starIcon.style.left = `${x}px`;
    starIcon.style.top = `${y}px`;
    starIcon.style.color = randomSelect(colors);
    let ani = randomSelectAni(fallAni);
    starIcon.style.animationName = ani;
    starIcon.style.animationDuration = '1500ms';
    document.body.appendChild(starIcon);
    setTimeout( ()=>{
        document.body.removeChild(starIcon)
    },1500);
},80);

window.onmousemove = (e) => {
    throttleStar(e);
    glowPath(e);
};

function randomSelect(colors){
    const randomIndex = Math.floor(Math.random() * colors.length);
     return colors[randomIndex];
}

function randomSelectAni(fallAni){
    const ranIndex = Math.floor(Math.random() * fallAni.length);
     return fallAni[ranIndex];
}

const colors = ["rgb(0,187,249)",'rgb(0,245,212)','rgb(252,254,255)'];
const fallAni = ['fall-1','fall-2','fall-3'];

const glowPath = e =>{
    let glowbox = document.createElement("div");
    let x = e.clientX;
    let y = e.clientY;
    glowbox.className = "glow";
    glowbox.style.position = 'fixed'
    glowbox.style.left = `${x}px`;
    glowbox.style.top = `${y}px`;
    document.body.appendChild(glowbox);
    setTimeout( ()=>{
        document.body.removeChild(glowbox)
    },50);
}