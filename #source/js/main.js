// Слайдер в большой карточке
// Вертикальный
var verticalSlider = new Swiper(".vertical__slider", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
    },
});
// Горизонтальный
var bigSlider = new Swiper(".big-slider", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: verticalSlider,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// Слайдеры карточек товара в секции по 5шт
const sliders = document.querySelectorAll('.product-cards__body');
sliders.forEach(function (el) {
    const swiper = new Swiper(el, {
        loop: false,
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 45,
        speed: 800,
        navigation: {
            nextEl: el.querySelector('.swiper-button-next'),
            prevEl: el.querySelector('.swiper-button-prev'),
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }
    });
});
// Слайдеры карточек товара в секции по 4шт
const sliders4 = document.querySelectorAll('.slides-4');
sliders4.forEach(function (el) {
    const swiper = new Swiper(el, {
        loop: false,
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 45,
        speed: 800,
        navigation: {
            nextEl: el.querySelector('.swiper-button-next'),
            prevEl: el.querySelector('.swiper-button-prev'),
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
});

// Селект
document.addEventListener('click', function () {
    $('.custom-select').removeClass('active');
})
$('.custom-select').each(function () {
    $(this).click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings().removeClass('active');
    })
    $(this).find('.select-menu__item').click(function () {
        $(this).closest('.custom-select').find('.custom-select__value').html($(this).html());
        $(this).closest('.custom-select').find('.custom-select__input').val($(this).html());
        $(this).addClass('hidden').siblings().removeClass('hidden');
    })
});
// Табы
(function ($) {
    $(function () {

        $('div.tabs__caption-inner').on('click', 'span:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

// Мобильный аккордион в подвале

$('.footer__item-head').each(function () {
    $(this).click(function () {
        if (window.innerWidth <= 769) {
            $(this).closest('.footer__item').find($('.footer-menu')).slideToggle();
            $(this).closest('.footer__item').find($('.footer__social')).slideToggle();
        }
    })
})
// Мобильное меню

$('.burger').click(function () {
    $('.header__bottom-nav').addClass('active');
    $('.overlay').addClass('active');
})
$('.overlay').click(function () {
    $('.header__bottom-nav').removeClass('active');
    $(this).removeClass('active');
})
