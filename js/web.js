const container =
document.getElementById("particle-container");

for(let i = 0; i < 30; i++){

    let particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    container.appendChild(particle);
}

particle.style.animation =
    `float ${5 + Math.random()*5}s linear infinite`;

    let size =
    Math.random() * 8 + 2;

particle.style.width =
    size + "px";

particle.style.height =
    size + "px";

const colors = [
    "#ffe08a"
];

particle.style.background =
    colors[Math.floor(Math.random()*colors.length)];