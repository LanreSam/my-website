// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    //$("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    const container = [
         {
            id: 0,
            head: "The Blue Catering Services",
            txt:
                "The Blue Catering Services offers you catering services for your various events occasions. The Blue Catering services is located in Porthacourt",
            img:
              "img/portfolio/logo1.jpg",
            animate:
                $("#demo01").animatedModal(),
        },

        {
            //demo: document.getElementById('demo02'),
            id: 1,
            head: "De Dola's Style Loft",
            txt:
                "De Dola's Style Loft is an instagram Store that sells unisex fashion wears",
            img:
              "img/portfolio/logo2.jpg",
            animate:
                $("#demo02").animatedModal(),
        },

        {
            id: 2,
            head: "Juliaben Stitches",
            txt:
                "Juliaben Stitches is a fashion Design firm that deals with Ladies wears and fashion in general",
            img:
              "img/portfolio/logo3.jpg",
            animate:
                $("#demo03").animatedModal(),
        },

        {
            id: 3,
            head: "SamNuTomOl",
            txt:
                "SamNuTomOl is a register multipurpose ventures that sells diffent kind of foodstuffs ranging from Groundnut oil to Rice in bulk",
            img:
              "img/portfolio/logo4.png",
            animate:
                $("#demo04").animatedModal(),
        },
    ]

    // select items
    const txt = document.getElementById('p-txt');
    const head = document.getElementById("head-txt");
    const image = document.getElementById("img-modal");



    //let currentItem = container[1].id;

    //load initial item
    window.addEventListener("DOMContentLoaded", function () {
        show();
        //console.log(currentItemArray());
    });
  
    //let currentItem = container.forEach((items) => console.log(items.img));

    function show() {
        container.forEach(element => 
            {
                const item = container[element.id];
                image.src = item.img;
                head.textContent = item.head;
                txt.textContent = item.txt;
                console.log(item.id);
                console.log(image.src = item.img);
                console.log(head.textContent = item.head);
                console.log(txt.textContent = item.txt);
            }
        );
    }

    // show person based on item
    // function showItem() {
    //     const item = container[currentItem];
    //     image.src = item.img;
    //     head.textContent = item.head;
    //     txt.textContent = item.txt;
    // }


    // function currentItemArray() {
    //     container.forEach(element => {
    //         console.log(element.id);
    //         element.id;
    //     });
    // }


    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});