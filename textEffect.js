 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 document.getElementById("text").onmousemove = e =>{

    let interations = 0;

    const interval = setInterval(()=>{

        e.target.innerText = e.target.innerText.split("")

        .map((letter,index) => {

            if(index < interations){
                return e.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
    })
        .join("");
        if(interations >= e.target.dataset.value.length) clearInterval(interval);
        interations += 1 / 3;
    },40);
 }