const light = document.querySelector(".light");

let time = 0;

function animate() {

    time += 0.02;

    const flicker = Math.sin(time) * 20;

    light.style.opacity = 0.15 + Math.random() * 0.05;

    light.style.transform =
    `translateX(${flicker}px)`;

    requestAnimationFrame(animate);
}

animate();