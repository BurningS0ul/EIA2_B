const star = document.querySelector("#star");

for (x = 0; x < 10; x++) {
    star.setAttribute("material", "color:" + randCol());
    star.setAttribute("scale", randSize());
    star.setAttribute("position", randPos());
    star.appendChild(new star);
}

function randCol() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (x = 0; x < 6; x++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
};

function randSize() {
    const scale = (Math.random() * (1.2 - 0.2) + 0.2).toFixed(1);

    return { x: scale, y: scale, z: scale }
}

function randPos() {
    const posX = (Math.random() * (1.2 - 0.1) + 0.1).toFixed(1);
    const posY = (Math.random() * (1.2 - 0.1) + 0.1).toFixed(1);
    const posZ = (Math.random() * (1.2 - 0.1) + 0.1).toFixed(1);

    return posX, posY, posZ;
}