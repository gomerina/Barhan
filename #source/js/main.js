// Слайдер в большой карточке
// Вертикальный
var verticalSlider = new Swiper(".vertical__slider", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
    direction: "vertical",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
// Горизонтальный
var bigSlider = new Swiper(".big-slider", {
    spaceBetween: 0,
    autoHeight: true,
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
    breakpoints: {
        280: {
            autoHeight: true,
        },
        768: {
            autoHeight: false,
        },
    }
});
// Слайдеры карточек товара в секции по 5шт
const sliders = document.querySelectorAll('.product-cards__body');
sliders.forEach(function (el) {
    const swiper = new Swiper(el, {
        loop: false,
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 50,
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
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
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
    const swiper4 = new Swiper(el, {
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
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
});
// Слайдер дополнить образ 
var fashionSlider = new Swiper(".fashion-slider", {
    loop: false,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 45,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});
// Селект
document.addEventListener('click', function () {
    $('.custom-select').removeClass('active');
})
$('.custom-select').each(function () {
    $(this).click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings().removeClass('active');
        $(this).find('.select-menu').slideToggle();
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
        if (window.innerWidth <= 1023) {
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
// Оверлей
$('.overlay').click(function () {
    $('.header__bottom-nav').removeClass('active');
    $('.filter').removeClass('active');
    $(this).removeClass('active');
    $('.modal').fadeOut(300);
})
// Поиск

$('.search').click(function () {
    $('.search__box').fadeToggle(300);
})

$('.mobile-search').click(function () {
    $('.search__box').fadeToggle(300);
})
$('.alphabet__item').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
})
$('.close-search').click(function () {
    $('.search__box').fadeToggle(300);
})
// Фильтр

$('.filter__item').each(function () {
    $(this).find('.filter__item-heading').click(function () {
        $(this).next('.filter-menu').slideToggle();
        $(this).toggleClass('active');
    })
})
$('.filter-mobile').click(function () {
    $('.filter').addClass('active');
    $('.overlay').addClass('active');
})
// Кнопка показать ещё
$('.catalog__more-button').click(function () {
    $('.product-card__item').removeClass('hidden')
})

// Способы доставки
$('.delivery__item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.delivery__item').find('.reg-checkbox').attr('checked', false);
    $(this).find('.reg-checkbox').attr('checked', true);
})
// Способы оплаты

$('.payment__item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.payment__item').find('.reg-checkbox').attr('checked', false);
    $(this).find('.reg-checkbox').attr('checked', true);
})

// Модальное окно регистрации 
const scrollY = document.body.style.top;
$('.user__btn').click(function () {
    $('.registration-modal').fadeIn(300);
    $('.overlay').addClass('active');
})
// Закрыть модальное окно
$('.close-modal').click(function () {
    $('.modal').fadeOut(300);
    $('.overlay').removeClass('active');
})
// Маска на инпут телефона
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
// Скролл страницы вверх
$('.scroll-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
})


