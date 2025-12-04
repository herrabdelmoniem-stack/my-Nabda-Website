(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


// Carousel - header-carousel
$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});


    // Product carousel Test
    var productCarousel = $(".product-carousel");

    if (productCarousel.length) {
        console.log("TEST 2A: 🟢 Found .product-carousel element in the DOM.");

        productCarousel.owlCarousel({
            autoplay: false,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            margin: 0,
            nav : true,
            navText: [
                '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            ],
            responsive: {
                0:{ items:1 },
                992:{ items:1 }
            },
            onInitialized: function(event) {
                // الكود داخل onInitialized يتم تنفيذه فقط إذا نجح السلايدر في التهيئة
                console.log("TEST 2B: ✅ Product Carousel successfully INITIALIZED.");
            }
        });

    } else {
         console.error("TEST 2A: 🔴 Could not find .product-carousel element in the DOM.");
    }

})(jQuery);
console.log("Trying to init carousel...");
console.log($(".product-carousel").length);