const swiperIMG = new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});

const swiperText = new Swiper('.slider-text');

swiperIMG.controller.control = swiperText
swiperText.controller.control = swiperIMG
