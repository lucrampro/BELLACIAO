$('document').ready(function () {

    //    TweenMax.to('.b', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1
    //
    //
    //    });
    //
    //    TweenMax.to('.e', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.1
    //
    //
    //    });
    //
    //    TweenMax.to('.l', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.2
    //
    //
    //    });
    //
    //    TweenMax.to('.l', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.3
    //
    //
    //    });
    //
    //    TweenMax.to('.ll', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.4
    //
    //
    //    });
    //
    //    TweenMax.to('.a', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.5
    //
    //
    //    });
    //
    //    TweenMax.to('.c', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.6
    //
    //
    //    });
    //
    //    TweenMax.to('.i', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.7
    //
    //
    //    });
    //
    //    TweenMax.to('.aa', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.8
    //
    //
    //    });
    //
    //    TweenMax.to('.o', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 0.9
    //
    //
    //    });
    //    TweenMax.to('.poin', 0.8, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 1
    //
    //
    //    });
    //
    //    TweenMax.to('.day', 1, {
    //
    //        y: "0px",
    //        opacity: 1,
    //        delay: 1,
    //        onComplete: function () {
    //
    //            TweenMax.to('.e, .l, .ll, .a, .c, .i, .aa, .o', 0.01, {
    //                opacity: 0
    //            });
    //
    //
    //            TweenMax.to('.e, .l, .ll, .a, .c, .i, .aa, .o', 0.8, {
    //                width: 0
    //            });
    //
    //            TweenMax.to('.day', 1, {
    //
    //
    //                y: "-50px",
    //                opacity: 0,
    //                onComplete: function () {
    //
    //                    TweenMax.to('.cacheH', 0, {
    //
    //                        css: {
    //
    //                            width: 'auto'
    //                        }
    //                    });
    //
    //
    //                    TweenMax.to('.cacheP', 0, {
    //
    //                        css: {
    //
    //                            width: 0,
    //                            height: 0
    //                        },
    //                        onComplete: function () {
    //
    //                            TweenMax.to('.cacheH', 0.5, {
    //
    //                                css: {
    //
    //                                    opacity: 0
    //                                },
    //                                onComplete: function () {
    //
    //                                    TweenMax.to('.cacheH', 0, {
    //
    //                                        x: 0,
    //                                        y: 0,
    //                                        top: 30,
    //                                        left: 30,
    //
    //                                        onComplete: function () {
    //
    //
    //                                            TweenMax.to('.cacheH', 0.5, {
    //
    //                                                css: {
    //
    //                                                    opacity: 1
    //                                                }
    //                                            });
    //
    //
    //                                        }
    //
    //                                    });
    //
    //
    //
    //
    //                                }
    //                            });
    //
    //
    //                        }
    //                    });
    //
    //
    //                }
    //            });
    //        }
    //    });


    $(".menuBurger").click(function () {



        if ($(".menu").width() === 0) {


            TweenMax.to('.menu', 0.5, {
                
                width: '100%'
            });
            
            
            TweenMax.to('.trai2', 0.5,{
                
                css:{
                    
                    opacity: 0
                }
                
                
                
            });
            
//            
            TweenMax.to('.trai1', 0.5,{
                
                css:{
                    
    transform: 'translate(-50%,-50%) rotate(45deg)',
                    top: '50%'
                    
                }
                
                           
            });
            
            TweenMax.to('.trai3', 0.5,{
                
                css:{
                    
    transform: 'translate(-50%,-50%) rotate(-45deg)',
                    top: '50%'
                    
                }
                                
            });
            

        }


        else{
            
            
            TweenMax.to('.menu', 0.5, {
                
                width: 0
            });
            
              TweenMax.to('.trai2', 0.5,{
                
                css:{
                    
                    opacity: 1
                }
                
            });
            
            
 TweenMax.to('.trai1', 0.5,{
                
                css:{
                    
    transform: 'translate(-50%,-50%) rotate(0deg)',
                    top: '35%'
                    
                }
                
                           
            });
            
            TweenMax.to('.trai3', 0.5,{
                
                css:{
                    
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

    
    $('.close').click(function (){
            
            
            TweenMax.to('.contact', 0.5,{
                    
                    width: 0
                    
                });
       
        
        
        
    });
    
    $('.contactOpen').click(function (){
            
            
            TweenMax.to('.contact', 0.5,{
                    
                    width: '100%'
                    
                });
       
        
        
        
    });

});