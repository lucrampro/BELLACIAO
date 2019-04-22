var lastScrollTop = 0;

$(document).on('scroll', function() {

    console.log('ok');
    var st = $(this).scrollTop();

    if( $('.cacheBlack').css('height') === '0px' ) {

        if( st > lastScrollTop ) {
            if (!$('.product').hasClass('lunetteO')) {

                $('li').addClass('black');
                $('.cacheH').addClass('black');
                $('.menuBurger').addClass('bc');
                $('.trai1').addClass('bb');
                $('.trai2').addClass('bb');
                $('.trai3').addClass('bb');

                TweenMax.to('.men .product', 1.5, {
                    top: 0,
                    ease: Expo.easeOut
                });
                TweenMax.to('.women .product', 1.5, {
                    top: 0,
                    ease: Expo.easeOut,
                    delay: 0.1
                });

                setTimeout(function() {
                    $('.product').addClass('lunetteO');
                }, 1600);

            }
        } else {

            if ($('.product').hasClass('lunetteO')) {

                $('li').removeClass('black');
                $('.cacheH').removeClass('black');
                $('.menuBurger').removeClass('bc');
                $('.trai1').removeClass('bb');
                $('.trai2').removeClass('bb');
                $('.trai3').removeClass('bb');

                TweenMax.to('.men .product', 1.5, {
                    top: '100%',
                    ease: Expo.easeOut
                });
                TweenMax.to('.women .product', 1.5, {
                    top: '100%',
                    ease: Expo.easeOut,
                    delay: 0.1
                });

                setTimeout(function() {
                    $('.product').removeClass('lunetteO');
                }, 1600);
            }
        }
    }

    lastScrollTop = st;
    
});

$('document').ready(function() {

    TweenMax.to('.b', 0.8, {
        y: "0px",
        opacity: 1
    });

    TweenMax.to('.e', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.1
    });

    TweenMax.to('.l', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.2
    });

    TweenMax.to('.l', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.3
    });

    TweenMax.to('.ll', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.4
    });

    TweenMax.to('.a', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.5
    });

    TweenMax.to('.c', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.6
    });

    TweenMax.to('.i', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.7
    });

    TweenMax.to('.aa', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.8
    });

    TweenMax.to('.o', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 0.9
    });

    TweenMax.to('.poin', 0.8, {
        y: "0px",
        opacity: 1,
        delay: 1
    });

    TweenMax.to('.day', 1, {
        y: "0px",
        opacity: 1,
        delay: 1,
        onComplete: function() {

            TweenMax.to('.e, .l, .ll, .a, .c, .i, .aa, .o', 0.5, {
                opacity: 0,
                y: '-50px'
            });

            TweenMax.to('.e, .l, .ll, .a, .c, .i, .aa, .o', 0.8, {
                width: 0,
                delay: 0.5
            });

            TweenMax.to('.day', 1, {
                y: "-50px",
                opacity: 0,
                onComplete: function() {

                    TweenMax.to('.cacheH', 0, {
                        css: { width: 'auto' }
                    });
                    TweenMax.to('.cacheP', 0, {
                        css: {
                        },
                        onComplete: function() {

                            TweenMax.to('.cacheH', 0.5, {
                                css: {
                                    opacity: 0
                                },
                                onComplete: function() {

                                    TweenMax.to('.b, .poin', 0, {
                                        y: '-50px'
                                    });

                                    TweenMax.to('.cacheH', 0, {
                                        x: 0,
                                        y: 0,
                                        top: 0,
                                        left: 25,

                                        onComplete: function() {
                                            TweenMax.to('.b, .poin', 1, {
                                                y: 0
                                            });

                                            TweenMax.to('.cacheH', 0.5, {
                                                css: {
                                                    opacity: 1
                                                },
                                                onComplete: function() {

                                                    TweenMax.to('.cacheBlack', 2, {
                                                        height: 0,
                                                        ease: Power4.easeOut,

                                                        onComplete: function() {
                                                            updateQuantity();
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });


    $('.numberMen, .numberWomen').click(function() {

        if ($('.quantity').hasClass('scale')) {
            $('.quantity').removeClass('scale');
            TweenMax.to('.cacheH', 0.5, {
                top: '5%',
                left: '10%',
                x: '-50%',
                y: '-50%',
            });

            TweenMax.to('.day', 0.1, {
                y: '-20px',
                opacity: 0
            });
        } else {
            TweenMax.to('.cacheH', 0.5, {
                top: '30%',
                left: '50%',
                x: '-50%',
                y: '-50%',
            });
            TweenMax.to('.cacheP', 0.3, {
                top: '38%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                onComplete: function() {
                    TweenMax.to('.day', 0.5, {
                        y: '0px',
                        opacity: 1
                    });
                }
            });
            $('.quantity').addClass('scale');
        }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".menuBurger").click(function() {

        if (!$(".menu").hasClass('open')) {
            $('.menu').addClass('open');
            $('li').removeClass('black');

            TweenMax.to('.trai2', 0.5, {
                css: {
                    opacity: 0
                }
            });
            //            
            TweenMax.to('.trai1', 0.5, {
                css: {
                    transform: 'translate(-50%,-50%) rotate(45deg)',
                    top: '50%'
                }
            });

            TweenMax.to('.trai3', 0.5, {
                css: {
                    transform: 'translate(-50%,-50%) rotate(-45deg)',
                    top: '50%'
                }
            });
        } else {
            if ($('.product').hasClass('lunetteO')) {
                $('li').addClass('black');
            } else {
                $('li').removeClass('black');
            }

            $('.menu').removeClass('open');

            TweenMax.to('.trai2', 0.5, {
                css: {
                    opacity: 1
                }
            });
            TweenMax.to('.trai1', 0.5, {
                css: {
                    transform: 'translate(-50%,-50%) rotate(0deg)',
                    top: '35%'
                }
            });

            TweenMax.to('.trai3', 0.5, {
                css: {
                    transform: 'translate(-50%,-50%) rotate(0deg)',
                    top: '65%'
                }
            });
        }
    });


    //    -------------
    //    -------------
    //    -------------
    //    -------------
    //    -------------
    //    -------------


    $('.close').click(function() {
        TweenMax.to('.contact', 0.5, {
            height: 0
        });

        TweenMax.to('.menuBurger', 0, {
            css: {
                display: 'inherit'
            }
        });

        if (!$('.product').hasClass('lunetteO')) {
            $('.cacheH').removeClass('black');
        }
    });

    $('.contactOpen, .menuBot ul li').click(function() {

        if (!$('.cacheH').hasClass('black')) {
            $('.cacheH').addClass('black');
        }

        TweenMax.to('.contact', 0.5, {
            height: '100%'
        });

        TweenMax.to('.menuBurger', 0, {
            css: {
                display: 'none'
            }
        });

    });

    $('.carroussel').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '200px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

});

function updateQuantity() {

    console.log('ok');

    var menQuantity = Number( $('.numberMen .hiddenQte').html());
    var womenQuantity = Number( $('.numberWomen .hiddenQte').html());

    var menStart = 100;
    var menDiff = 100 - menQuantity;
    var menTempo = 2000 / menDiff;
    var menInterval = setInterval(updateMenInterval, menTempo);

    var womenStart = 100;
    var womenDiff = 100 - womenQuantity;
    var womenTempo = 2000 / womenDiff;
    var womenInterval = setInterval(updateWomenInterval, womenTempo);

    function updateMenInterval() {

        if( menStart > menQuantity ) {
            menStart--;
            $('.number .numberMen p').html( menStart );
        } else {
            clearInterval(menInterval);
        }
    } 
    function updateWomenInterval() {

        if( womenStart > womenQuantity ) {
            womenStart--;
            $('.number .numberWomen p').html( womenStart );
        } else {
            clearInterval(womenInterval);
        }
    }

    // $('.number .numberWomen p').html( womenQuantity );
    // $('.number .numberMen p').html( menQuantity );


    $('.numberWomen .circle').css('stroke-dasharray',  womenQuantity + ' 100');
    $('.numberMen .circle').css('stroke-dasharray', menQuantity + ' 100');
}
