let $slider = $(".slider");
let sliderCount = $(".slider-counter");
let width = $(window).width();


if ($slider.length) {
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement("span");

    let updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        if(width > 768){
            slidesCount = slick.slideCount - 2;
        } else {
            slidesCount = slick.slideCount;
        }
        $(sliderCounter).text(currentSlide + " из " +slidesCount);
    };

    $slider.on("init", function(event, slick) {
        sliderCount.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on("afterChange", function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: $(".slider-nav__prev"),
        nextArrow: $(".slider-nav__next"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}
