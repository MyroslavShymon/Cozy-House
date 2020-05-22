$(document).ready(function(){
    $('.friends__information').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        easing: 'easy',
        autoplay: true,
        autoplaySpeed: 1500,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive:[
            {
                breakpoint:880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            

        ]
    });
});
