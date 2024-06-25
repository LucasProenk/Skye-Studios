document.addEventListener('DOMContentLoaded', () => {
    const flipper = document.querySelector('.flipper');
    let isFlipped = false;

    flipper.addEventListener('click', () => {
        if (isFlipped) {
            flipper.style.transform = 'rotateY(0deg)';
        } else {
            flipper.style.transform = 'rotateY(180deg)';
        }
        isFlipped = !isFlipped; // Corrigido para inverter o estado
    });
});
