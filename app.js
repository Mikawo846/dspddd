// Переключение темы
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Обработчик формы контактов
if (document.getElementById('feedback-form')) {
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено.');
        this.reset();
    });
}

// Инициализация всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Анимация карточек
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.category-card, .guide-card, .article-card');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 50;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Инициализация анимации
    document.querySelectorAll('.category-card, .guide-card, .article-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

// Остальной код темы и навигации остается без изменений
