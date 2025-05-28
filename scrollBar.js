let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let currentHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = currentHeight + "%";
}