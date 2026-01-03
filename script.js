function generateMeme() {
    const topText = document.getElementById('topText').value || 'أنا عندما';
    const bottomText = document.getElementById('bottomText').value || 'أرى شيئاً مجنوناً';
    const canvas = document.getElementById('memeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';

    // خلفية عشوائية مجنونة (لون فلاشي)
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = randomColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // رسم صورة ميم بسيطة (مثل وجه مبتسم مجنون باستخدام Canvas)
    ctx.fillStyle = '#ffff00'; // وجه أصفر
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000'; // عيون
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.arc(350, 150, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath(); // فم مجنون
    ctx.arc(250, 350, 100, 0, Math.PI, false);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 10;
    ctx.stroke();

    // إضافة إيموجي عشوائي مجنون
    const emojis = ['😂', '🤪', '😈', '👽', '🔥'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    ctx.font = 'bold 100px Arial';
    ctx.fillText(randomEmoji, 200 + Math.random() * 100, 400 + Math.random() * 50);

    // نص علوي وسفلي بأسلوب ميم (أبيض مع حدود أسود)
    ctx.font = 'bold 40px Impact';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.textAlign = 'center';

    ctx.strokeText(topText.toUpperCase(), 250, 60);
    ctx.fillText(topText.toUpperCase(), 250, 60);

    ctx.strokeText(bottomText.toUpperCase(), 250, 480);
    ctx.fillText(bottomText.toUpperCase(), 250, 480);

    // رابط التحميل
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.style.display = 'inline-block';
}
