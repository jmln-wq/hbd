function revealMessage() {
    const message = document.getElementById("hidden-message");
    message.classList.toggle("hidden");
}

function playMusic() {
    const iframe = document.getElementById("bg-music");
    iframe.src += "&autoplay=1";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 300);

const photos = document.querySelectorAll('.photo-gallery img');
photos.forEach((photo, index) => {
    setTimeout(() => {
        photo.style.opacity = '1';
        photo.style.transform = 'scale(1)';
    }, index * 200);
});

function playMusic() {
    const iframe = document.getElementById("bg-music");
    const src = iframe.src;
    if (!src.includes("autoplay=1")) {
        iframe.src = src.replace("autoplay=0", "autoplay=1");
    }
}
