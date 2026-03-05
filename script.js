// Анимации и интерактивные эффекты для сайта Snap

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при загрузке страницы
    const animateOnLoad = () => {
        const elements = document.querySelectorAll('.header, .make > div, .make > img');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + index * 100);
        });
    };

    // Плавная анимация кнопок при наведении
    const animateButtons = () => {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    };

    // Анимация изображений в блоке imgg
    const animateImages = () => {
        const images = document.querySelectorAll('.imgg img');
        
        images.forEach((img, index) => {
            img.style.transition = `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`;
            img.style.transform = `translateY(${Math.sin(index) * 10}px)`;
            
            img.addEventListener('mouseenter', function() {
                this.style.transform = `translateY(${Math.sin(index) * 10 + 15}px) scale(1.05)`;
                this.style.filter = 'brightness(1.1)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = `translateY(${Math.sin(index) * 10}px) scale(1)`;
                this.style.filter = 'brightness(1)';
            });
        });
    };

    // Параллакс-эффект для главного изображения
    const parallaxEffect = () => {
        const heroImage = document.querySelector('.make > img');
        
        if (heroImage) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroImage.style.transform = `translateY(${rate}px)`;
            });
        }
    };

    // Анимация меню при прокрутке
    const stickyHeader = () => {
        const header = document.querySelector('.header');
        const originalPadding = window.getComputedStyle(header).padding;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                header.style.padding = '15px 25px';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
                header.style.padding = originalPadding;
            }
        });
    };

    // Плавная анимация текста
    const textAnimation = () => {
        const headings = document.querySelectorAll('h1');
        
        headings.forEach(h1 => {
            const text = h1.textContent;
            h1.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.transition = `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
                h1.appendChild(span);
            });
            
            // Анимация появления букв
            setTimeout(() => {
                const spans = h1.querySelectorAll('span');
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }, 500);
        });
    };

    // Интерактивный эффект для пунктов меню
    const menuInteraction = () => {
        const menuItems = document.querySelectorAll('.header ul li');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.color = '#333';
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.color = 'inherit';
                this.style.transform = 'scale(1)';
            });
        });
    };

    // Запуск всех анимаций
    animateOnLoad();
    animateButtons();
    animateImages();
    parallaxEffect();
    stickyHeader();
    textAnimation();
    menuInteraction();
});