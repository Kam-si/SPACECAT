(function(){
    const container = document.querySelector('.bubbles');
    if(!container) return;
    const count = 16;
    for(let i=0;i<count;i++){
      const b = document.createElement('div');
      b.className = 'bubble-item';
      const size = Math.floor(Math.random()*36)+14; // 14–50px
      b.style.width = size+'px';
      b.style.height = size+'px';
      b.style.left = Math.random()*100 + '%';
      b.style.bottom = (-10 - Math.random()*10) + '%';
      b.style.opacity = 0.6 + Math.random()*0.4;
      b.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(255,255,255,0.08) 25%, transparent 55%), linear-gradient(135deg, rgba(160,90,255,0.12), rgba(95,220,200,0.06))`;
      b.style.position = 'absolute';
      b.style.borderRadius = '50%';
      b.style.filter = 'blur(0.6px)';
      const duration = 8 + Math.random()*18;
      b.style.animation = `bubbleRise ${duration}s linear infinite`;
      b.style.zIndex = 0;
      container.appendChild(b);
    }
  })();
  
  // create keyframes dynamically if not present
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
  @keyframes bubbleRise {
    0% { transform: translateY(0) translateX(0); opacity:0.2; }
    50% { opacity:0.8; }
    100% { transform: translateY(-140vh) translateX(20px); opacity:0; }
  }`;
  document.head.appendChild(styleEl);