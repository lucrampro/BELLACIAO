$('document').ready(function () {

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
        onComplete: function () {

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
                onComplete: function () {

                    TweenMax.to('.cacheH', 0, {

                        css: {

                            width: 'auto'
                        }
                    });


                    TweenMax.to('.cacheP', 0, {

                        css: {

                        },
                        onComplete: function () {

                            TweenMax.to('.cacheH', 0.5, {

                                css: {

                                    opacity: 0
                                },
                                onComplete: function () {

                                    TweenMax.to('.b, .poin', 0, {

                                        y: '-50px'

                                    });

                                    TweenMax.to('.cacheH', 0, {

                                        x: 0,
                                        y: 0,
                                        top: 0,
                                        left: 30,

                                        onComplete: function () {

                                            TweenMax.to('.b, .poin', 1, {

                                                y: 0

                                            });

                                            TweenMax.to('.cacheH', 0.5, {

                                                css: {

                                                    opacity: 1
                                                },
                                                onComplete: function () {

                                                    TweenMax.to('.cacheBlack', 1, {

                                                        height: 0,
                                                        ease: SlowMo.ease.config(0.7, 0.7, false)
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


    $('.numberMen, .numberWomen').click(function () {



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
                onComplete: function () {


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



    $(".menuBurger").click(function () {



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


            if ($('.lunette').hasClass('lunetteO')) {


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


    $('.close').click(function () {


        TweenMax.to('.contact', 0.5, {

            height: 0

        });

        TweenMax.to('.menuBurger', 0, {

            css: {


                display: 'inherit'
            }

        });
        
        if(!$('.lunette').hasClass('lunetteO')){
            
            
            $('.cacheH').removeClass('black');
            
            
        }





    });

    $('.contactOpen').click(function () {

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


    ////////// SCROLL //////////

    //    
    //      $(document).on('scroll', function () {
    //          
    //          
    //          
    //          
    //          
    //    if(!$('.lunette').hasClass('lunetteO')){
    //        
    //        $(document).on('scroll') === false;
    //         
    //        $('.lunette').addClass('lunetteO');
    //        $('li').addClass('black');
    //        $('li').addClass('black');
    //        
    //    TweenMax.to('.lunette', 1.5,{
    //        
    //        
    //        top:0,
    //        ease: Expo.easeOut
    //        
    //        
    //    });
    //        
    //    }
    //    
    //    else{
    //        
    //        $('.lunette').removeClass('lunetteO');
    //        $('li').removeClass('black');
    //        $('li').removeClass('black');
    //        
    //         TweenMax.to('.lunette', 1.5,{
    //        
    //        
    //        top:'100%',
    //        ease: Expo.easeOut
    //        
    //        
    //    });
    //        
    //        
    //    }
    //    
    //          
    //          
    //          
    //          
    //      });
    //
    $('.lithree').click(function () {

        if (!$('.lunette').hasClass('lunetteO')) {

            $('.lunette').addClass('lunetteO');
            $('li').addClass('black');
            $('.cacheH').addClass('black');


            TweenMax.to('.first', 1.5, {


                top: 0,
                ease: Expo.easeOut


            });
            TweenMax.to('.second', 1.5, {


                top: 0,
                ease: Expo.easeOut,
                delay: 0.1


            });

        } else {

            $('.lunette').removeClass('lunetteO');
            $('li').removeClass('black');
            $('.cacheH').removeClass('black');




            TweenMax.to('.first', 1.5, {


                top: '100%',
                ease: Expo.easeOut



            });
            TweenMax.to('.second', 1.5, {


                top: '100%',
                ease: Expo.easeOut,
                delay: 0.1


            });


        }



    });


});