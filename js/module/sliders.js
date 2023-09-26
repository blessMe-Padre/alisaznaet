export const initSlider = () => {

    // слайдер "Наши преподаватели"
    const teachers = document.querySelector('.teachers');
    if (teachers) {
        const swiper = new Swiper('.teachers', {
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                374: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                580: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}