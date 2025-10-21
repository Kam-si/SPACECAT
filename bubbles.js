const numBubbles = 60;

for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 30 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.top = Math.random() * 100 + 'vh';

    const floatDuration = (4 + Math.random() * 6) + 's';
    const swayDuration = (3 + Math.random() * 4) + 's';

    bubble.style.animationDuration = `${floatDuration}, ${swayDuration}`;
    bubble.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`;

    document.body.appendChild(bubble);
}
