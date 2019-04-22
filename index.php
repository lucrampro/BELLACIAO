<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>BELLACIAO</title>
    <link href="css/styles.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>

<?php 

    $bdd = new PDO('mysql:host=localhost;dbname=bellaciaodb', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $content = $bdd->query('SELECT * FROM fr');    
    $value = $content->fetch();
    $menQte = $value['men'];
    $womenQte = $value['women'];

?>


    
    <div class="main">
        <div class="scrollHack">

            <div class="menu">
                <div class="englobe">
                    <div class="about"></div>
                    <div class="menuBot">
                        <ul>
                            <li> FAQ</li>
                            <li> SUIVI DE MON COLIS</li>
                            <li class="contactOpen"> CONTACTEZ NOUS </li>
                        </ul>
                        <div class="insta"><img src="img/insta.png" alt=""></div>
                    </div>

                    <div class="contact">
                        <div class="englobe">
                            <div class="close">
                                <div class="traiClose1"></div>
                                <div class="traiClose2"></div>
                            </div>
                            <div class="form">
                                <p>Un problème ? <br>
                                    Nous vous répondrons dans un délai de 48h <br>
                                    (jours ouvrés).
                                </p>

                                <form action="">
                                    <input type="text" id="fname" name="fname" placeholder="Prénom">
                                    <input type="text" id="lname" name="lastname" placeholder="Nom">
                                        <input type="text" id="ydemande" name="demande" placeholder="Votre demande">
                                        <p class="send">Envoyé</p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="menuBurger">
                <div class="englobe">
                    <div class="trai1"></div>
                    <div class="trai2"></div>
                    <div class="trai3"></div>
                </div>
            </div>
            <div class="cacheBlack">

                <div class="relat">
                    <div class="cacheH">
                        <h1>
                            <!-- --><span class="b gm">B</span><!-- --><!-- --><span class="e gm">E</span><!-- --><!-- --><span class="l gm">L</span><!-- --><!-- --><span class="ll gm">L</span><!-- --><!-- --><span class="a gm">A</span><!-- --><!-- --><span class="c gl">C</span><!-- --><!-- --><span class="i gl">I</span><!-- --><!-- --><span class="aa gl">A</span><!-- --><!-- --><span class="o gl">O</span><!-- --><!-- --><span class="poin gl">.</span><!-- -->
                        </h1>
                    </div>
                    <div class="cacheP">
                        <p class="day">Une journée, 100 quantités.</p>
                    </div>
                </div>
            </div>

            <div class="presentation">
                <div class="men ">
                    <div class="relat">
                        <div class="product">
                            <div class="relat">
                                <div class="carroussel">
                                    <div><img src="img/lunettes.png" alt=""></div>
                                    <div><img src="img/lunettes.png" alt=""></div>
                                    <div><img src="img/lunettes.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li class='lione'>Lunettes Scandicci</li>
                            <li class='litwo'><span>49</span>,99&euro;</li>
                            <li class='lithree'>
                                Ajouter au panier
                                <span></span>
                            </li>
                        </ul>
                    
                        <div class="out">
                            <p>
                                <span class="colorb">TROP</span> 
                                <span class="colorr">TARD.</span>
                            </p>
                            <p>100 privilégiées par jour seulement.</p>
                            <input type="text">
                            <div class="separat"></div>
                            <p class="follow">Suivez nous sur instagram</p>
                            <img class="imgInsta" src="img/insta.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="women">
                    <div class="relat">
                        <div class="product">
                            <div class="relat">
                                <div class="carroussel">
                                    <div><img src="img/lunettes.png" alt=""></div>
                                    <div><img src="img/lunettes.png" alt=""></div>
                                    <div><img src="img/lunettes.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li class='lione'>Lunettes Scandicci</li>
                            <li class='litwo'><span>29</span>,99&euro;</li>
                            <li class='lithree'>
                                Ajouter au panier
                                <span></span>
                            </li>
                        </ul>
                        <div class="out">
                            <p>
                                <span class="colorb">TROP</span> 
                                <span class="colorr">TARD.</span>
                            </p>
                            <p>100 privilégiées par jour seulement.</p>
                            <input type="text">
                
                            <div class="separat"></div>
                            <p class="follow">Suivez nous sur instagram</p>
                            <img class="imgInsta" src="img/insta.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="quantity"></div>
                <div class="number">
                    <div class="relat">
                        <div class="numberMen">
                            <p>100</p>
                            <p class="hiddenQte"> <?php echo $menQte ?> </p>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="100, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <div class="numberWomen">
                            <p>100</p>
                            <p class="hiddenQte"> <?php echo $womenQte ?> </p>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                    stroke-dasharray="100, 100"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="out outAll">
                    <div class="bellaOUT">
                        <h1>
                            <!-- --><span class="b gm">B</span><!-- --><!-- --><span class="e gm">E</span><!-- --><!-- --><span class="l gm">L</span><!-- --><!-- --><span class="ll gm">L</span><!-- --><!-- --><span class="a gm">A</span><!-- --><!-- --><span class="c gl">C</span><!-- --><!-- --><span class="i gl">I</span><!-- --><!-- --><span class="aa gl">A</span><!-- --><!-- --><span class="o gl">O</span><!-- --><!-- --><span class="poin gl">.</span><!-- -->
                        </h1>
                    </div>
                    <div class="cacheP">
                        <p class="day">Une journée, 100 quantités.</p>
                    </div>

                    <p>
                        <span class="colorb">TROP</span> 
                        <span class="colorr">TARD.</span>
                    </p>
                    <p class="uppercase">100 privilégié(e) par jour <br> seulement.</p>
                
                    <input type="text">
                    <div class="separat"></div>
                
                    <p class="follow">Suivez nous sur instagram</p>
                
                    <img class="imgInsta" src="img/insta.png" alt="">
                </div>

            </div>

        </div>
        
    </div>


    <!-- Js -->
    <script src="js/jquery.min.js"></script>
    <script src="js/TweenLite.min.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="js/app.js"></script>

</body>

</html>