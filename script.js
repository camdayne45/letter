function openLetter() {
    const wrapper = document.getElementById('envelopeWrapper');
    const heartContainer = document.getElementById('heartsContainer');
    
    wrapper.classList.toggle('open');

    if (wrapper.classList.contains('open')) {
        // Tạo 20 trái tim bay ngẫu nhiên
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Vị trí xuất phát từ giữa phong bì
                heart.style.left = '50%';
                heart.style.top = '50%';
                
                // Tạo hướng bay ngẫu nhiên
                const tx = (Math.random() - 0.5) * 400; // Bay ngang sang trái/phải 200px
                const ty = -(Math.random() * 300 + 100); // Bay lên trên 100-400px
                
                heart.style.setProperty('--tx', `${tx}px`);
                heart.style.setProperty('--ty', `${ty}px`);
                
                heart.style.animation = `heartFly ${Math.random() * 1 + 1}s ease-out forwards`;
                
                heartContainer.appendChild(heart);
                
                // Xóa trái tim sau khi bay xong để nhẹ máy
                setTimeout(() => heart.remove(), 2000);
            }, i * 50); // Các trái tim bay ra cách nhau một chút
        }
    }
}