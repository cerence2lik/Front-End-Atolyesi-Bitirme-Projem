const menu = document.getElementById('menu');
let lastScrollTop = 0; // Son kaydırma konumunu saklamak için

// Sayfa yüklendiğinde menüyü açık tut
menu.classList.add('open');

// Sayfayı kaydırma olayını dinle
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    // Full-screen image kısmının yüksekliği (örnek 100vh)
    const fullScreenImageHeight = window.innerHeight;

    if (scrollTop > lastScrollTop && scrollTop > fullScreenImageHeight) {
        // Aşağı kaydırıyorsa ve full-screen image kısmını geçtiyse menüyü gizle
        menu.classList.remove('open');
    } else if (scrollTop < lastScrollTop && scrollTop < fullScreenImageHeight) {
        // Yukarı kaydırıyorsa ve full-screen image kısmında veya yukarısındaysa menüyü göster
        menu.classList.add('open');
    }

    lastScrollTop = scrollTop; // Son kaydırma konumunu güncelle
});



