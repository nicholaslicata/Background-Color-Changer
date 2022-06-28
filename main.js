let colorButton = document.querySelector('.color-btn');
colorButton.addEventListener('click', colorChange);

function colorChange() {
    const x = Math.floor(Math.random() * 255);
    const y = Math.floor(Math.random() * 255);
    const z = Math.floor(Math.random() * 255);
    const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

    document.body.style.background = bgColor;
}
