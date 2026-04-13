const audio = document.getElementById("bg");

document.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(err => console.log(err));
    } else {
        audio.pause();
    }
});