document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    // 画像の追加
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        const imageName = `img${String(i).padStart(3, '0')}.jpg`;
        img.src = `img/${imageName}`;
        img.alt = `Image ${i}`;
        img.loading = 'lazy'; // 遅延読み込みを追加
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            // アニメーションのためにタイミングを少し遅らせる
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
        });
        gallery.appendChild(img);
    }

    // ライトボックスを閉じる関数
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target.id === 'lightbox') {
            closeLightbox();
        }
    });
});
