/********************************************************
  0. Site year
  1. Custom mouse cursor
  2. Animsition preloader
  3. Swiper slider
  4. Isotope filter
  5. Midnight
  6. Navigation open/close
  7. Drop-down menu
  8. Change menu background
  9. ScrollAnimations
  10. Headroom
  11. Magnific popup
  12. Scroll to id
  13. Touch, no touch
  14. fixed footer
  15. Progress bar
  16. Contact form
********************************************************/

$(function () {
  "use strict";

  /* 0. Site year */
  $(document).bind("contextmenu",function(e){
    return false;
  });
  var yearWeGuay = new Date().getFullYear();
  $(".siteYearWeGuay").text(yearWeGuay);
  // Nav Split
  const currentPath = window.location.pathname;
  console.log(currentPath)
  const navLinks = document.querySelectorAll('.nav-link-split');
  navLinks.forEach(link => {
    console.log(link.getAttribute('href'))
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  
  /* 1. Custom mouse cursor */
  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (e.style.left = n.clientX + "px"), (e.style.top = n.clientY + "px");
    });
  var e = document.getElementById("pointer");

  $(document).mousemove(function (e) {
    $(".red-bg")
      .on("mouseenter", function () {
        $(".pointer").addClass("black");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("black");
      });

    $(
      ".pointer-large, .swiper-button-next, .swiper-button-prev, .mfp-arrow-left, .mfp-arrow-right, .home-slider .swiper-pagination-bullet, .group"
    )
      .on("mouseenter", function () {
        $(".pointer").addClass("large");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("large");
      });

    $(
      ".pointer-small, .testimonials-slider .swiper-pagination-bullet, .portfolio-slider .swiper-pagination-bullet"
    )
      .on("mouseenter", function () {
        $(".pointer").addClass("small");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("small");
      });

    $(".mfp-img, .pointer-right")
      .on("mouseenter", function () {
        $(".pointer").addClass("right");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("right");
      });

    $(".pointer-zoom")
      .on("mouseenter", function () {
        $(".pointer").addClass("zoom");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("zoom");
      });

    $(".pointer-open")
      .on("mouseenter", function () {
        $(".pointer").addClass("open");
      })
      .on("mouseleave", function () {
        $(".pointer").removeClass("open");
      });
  });

  $(document).ready(function () {
    /* 2. Animsition preloader */
    $(".popup-modal").click();
    $(".animsition-overlay").animsition({
      inClass: "overlay-slide-in-right",
      outClass: "overlay-slide-out-right",
      inDuration: 1,
      outDuration: 500,
      linkElement: ".animsition-link",
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: false,
      loadingParentElement: "body", //animsition wrapper element
      loadingClass: "animsition-loading",
      loadingInner: "", // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 200,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay: true,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
      transition: function (url) {
        window.location.href = url;
      },
    });

    $("body").on("animsition.outStart", function () {
      $("body").removeClass("active");
      $("body").addClass("out");
    });

    $("body").on("animsition.inEnd", function () {
      $("body").addClass("active");
      $("body").addClass("in");
      setTimeout(function () {
        $("body").addClass("anim");
      }, 10);

      /* 3. Swiper slider */
      var interleaveOffset = 0.5;

      new Swiper(".home-slider", {
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
          delay: 5000,
        },
        autoHeight: false,
        // watchSlidesProgress: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              var slideProgress = swiper.slides[i].progress;
              var innerOffset = swiper.width * interleaveOffset;
              var innerTranslate = slideProgress * innerOffset;
              swiper.slides[i].querySelector(".slide-bg").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }
          },
          touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },
          setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + "ms";
              swiper.slides[i].querySelector(".slide-bg").style.transition =
                speed + "ms";
            }
          },
        },
      });

      new Swiper(".home-slider-new", {
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 4500,
        },
        autoHeight: false,
        watchSlidesProgress: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      new Swiper(".testimonials-slider", {
        speed: 1200,
        autoplay: {
          delay: 5000,
        },
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      /* 4. Calendar March Slider */
      new Swiper(".slider-matchs", {
        cssMode: true,
        speed: 500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        // breakpoints: {
        //   999: {
        //     slidesPerView: 2,
        //     autoplay: {
        //       delay: 500,
        //     },
        //   },
        //   767: {
        //     slidesPerView: 1,
        //   },
        // },
      });

      new Swiper(".feature-players-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1400,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          767: {
            slidesPerView: 4,
          },
        },
      });

      new Swiper(".grid-feature-players", {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            autoplay: {
              delay: 500,
            },
          },
          900: {
            slidesPerView: 2,
            autoplay: {
              delay: 500,
            },
          },
          767: {
            slidesPerView: 1,
            grid: {
              rows: 2,
            },
          },
        },
        pagination: {
          el: ".swiper-pagination-players",
          clickable: true,
        },
      });

      new Swiper(".portfolio-slider", {
        direction: "vertical",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        speed: 1300,
        parallax: true,
        autoplay: false,
        effect: "slide",
        mousewheel: {
          sensitivity: 1,
        },
      });

      new Swiper(".portfolio-column-slider", {
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed: 1300,
        parallax: true,
        freeMode: true,
        autoplay: false,
        breakpoints: {
          999: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
        },
        mousewheel: {
          sensitivity: 1,
        },
      });

      new Swiper(".portfolio-slider2", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1400,
        autoplay: {
          delay: 5000,
        },
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          999: {
            slidesPerView: 1,
          },
        },
      });

      /* 4. Isotope filter */
      function projectFilter() {
        var $gridt = $(".works");
        $gridt.isotope({
          itemSelector: ".grid-item",
          percentPosition: true,
        });
        $(".filter-buttons").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          $gridt.isotope({
            filter: filterValue,
          });
          $(this).addClass("active").siblings().removeClass("active");
        });
      }
      projectFilter();
    });

    /* 5. Midnight */
    // $(".fixed-header").midnight();

    /* 6. Navigation open/close */
    $(".menu-open").on("click", function () {
      $(".menu-open, .nav-container").addClass("active");
    });

    $(".menu-close").on("click", function () {
      $(".menu-open, .nav-container").removeClass("active");
    });

    /* 7. Drop-down menu */
    $(".dropdown-open").on("click", function () {
      $(this).find(".dropdown").addClass("active");
      $(".nav-link").addClass("done");
      $(".dropdown-close").addClass("active");
    });

    $(".dropdown-close").on("click", function () {
      $(".dropdown").removeClass("active");
      $(".nav-link").removeClass("done");
      $(".dropdown-close").removeClass("active");
    });
  });

  /* 8. Change menu background */
  $(document).on("mouseover", ".nav-bg-change", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /* 9. ScrollAnimations */
  var $containers = $(
    "[data-animation]:not([data-animation-child]), [data-animation-container]"
  );
  $containers.scrollAnimations();

  /* 10. Headroom */
  // $(".fixed-header, .team-nav").headroom();
  $(".team-nav").headroom();

  /* 11. Magnific popup */
  $(".photo-popup").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom", // this class is for CSS animation below
    gallery: {
      // options for gallery
      enabled: true,
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 800, // duration of the effect, in milliseconds
      easing: "cubic-bezier(.858, .01, .068, .99)", // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  $('.popup-modal').magnificPopup({
    type: 'inline',
    mainClass: "mfp-with-zoom", // this class is for CSS animation below
    preloader: false,
    fixedContentPos: true,
    removalDelay: 160,
    preloader: false,
    closeOnBgClick: true,
  });

  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
  });

  /* 12. Scroll to id */
  $(".to-top-btn, .scroll-btn").mPageScroll2id();

  /* 13. Touch, no touch */
  var supports = (function () {
    var d = document.documentElement,
      c = "ontouchstart" in window || navigator.msMaxTouchPoints;
    if (c) {
      d.className += " touch";
      return {
        touch: true,
      };
    } else {
      d.className += " no-touch";
      return {
        touch: false,
      };
    }
  })();

  /* 14. fixed footer */
  $("footer").footerReveal({
    shadow: false,
    zIndex: 1,
  });

  /* 15. Progress bar */
  $(".progress-zero").each(function () {
    $(this)
      .find(".progress-full")
      .animate({
        width: $(this).attr("data-progress"),
      });
  });

  /* 16. Contact form */
  $("#send_form").on("submit", function () {
    var first_name = $("#first_name").val().trim();
    var last_name = $("#last_name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    $.ajax({
      url: "assets/ajax/mail.php",
      type: "POST",
      cache: false,
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        message: message,
      },
      dataType: "html",
      beforeSend: function () {
        $("#send").addClass("js-active");
      },
      success: function (data) {
        if (!data || data != "Good") {
          $("#m_err").addClass("js-active");
          $(".form-box").addClass("js-active");
          setTimeout(function () {
            $("#send").removeClass("js-active");
          }, 2000);
        } else {
          $("#m_sent").addClass("js-active");
          $(".form-box").addClass("js-active");
          setTimeout(function () {
            $("#send").removeClass("js-active");
            $("#send_form").trigger("reset");
            $(".email-label").removeClass("js-active");
          }, 2000);
        }
        $(".js-popup-close").click(function () {
          $(this).parents(".js-popup-fade").removeClass("js-active");
          $(".form-box").removeClass("js-active");
          return false;
        });

        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            e.stopPropagation();
            $(".js-popup-fade").removeClass("js-active");
            $(".form-box").removeClass("js-active");
          }
        });

        $(".js-popup-fade").click(function (e) {
          if ($(e.target).closest(".js-popup").length == 0) {
            $(".js-popup-fade").removeClass("js-active");
            $(".form-box").removeClass("js-active");
          }
        });
      },
    });
    return false;
  });

  $("#email").on("keyup", function () {
    var $this = $(this),
      val = $this.val();

    if (val.length >= 1) {
      $(".email-label").addClass("js-active");
    } else {
      $(".email-label").removeClass("js-active");
    }
  });

  /* 17. Players AJAX */
  const url_all = location.href; 
  const url_last = url_all.lastIndexOf("/"); 
  const active_page = url_all.slice(url_last+1).replace("-fc", "");
  const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const calculateRanking = (data) => {
    const calculateAverage = (scores) => {
      const sum = scores.reduce((total, score) => total + score, 0);
      return sum / scores.length;
    };
    const newData = data.map((player) => {
      const scores = Object.values(player.scorePerMatch);
      const average = calculateAverage(scores);
      return { ...player, ranking: average };
    });
    const filterData = newData.filter((player) => player.team === capitalizarPrimeraLetra(String(active_page)) && player.pos !== "-");
    return filterData;
  }
  const formateImage = (image) => {
    return image.replace(' ', '%20');
  }
  const displayResources = $("#playersTeam");
  if(displayResources.length > 0) {
    $(document).ready(function() {
      displayResources.text("Cargando...");
      const playerProfesional = {
        exodia: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)"><a href="https://www.instagram.com/p/Cz10GV3Ry1I/" target="_blank"><div class="flex pt-9"><div class="flex flex-col pl-4 pt-4 absolute"><svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21"width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"></path></svg><span class="mt-0 text-l font-semibold">PROF.</span></div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/exodia-fc/diego-gomez-prof.webp" alt="Angel Mendez" loading="lazy" decoding="async" fetchpriority="low"/></div><div class="flex flex-col"><h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block"> Diego Gomez</h3><div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block"> <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@diego7gomezm</span > </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/exodia-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        mewtwo: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/CzwEkU7Lgx3/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/mewtow-fc/harrison-canchimbo-prof.webp" alt="Hector Salgado" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Harrison Canchimbo </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@canchimbo17 </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/mewtwo-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        zeus: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/Czz2hHMLtpQ/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/zeus-fc/faber-lopez-prof.webp" alt="Hector Salgado" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Faber Lopez </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@faberlopez10 </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/zeus-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        grandopolis: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/Czwju-sxqBy/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/grandopolis-fc/manuel-nino-prof.webp" alt="Angel Mendez" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Manuel Nińo </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@manuel.nino </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/grandopolis-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        lugia: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/Czz8sHYtr7B/" target="_blank"> <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/lugia-fc/sebastian-rodriguez.webp" alt="Hector Salgado" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Sebastian Rodriguez </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@sebascrack99_ </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/lugia-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        deoxys: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/CzuWd85LzrQ/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/deoxys-fc/angel-mendez-profesional.webp" alt="Angel Mendez" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Angel Mendez </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@17m.angel</span > </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/deoxys-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        latios: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/CzzuiutLJ2J/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/latios-fc/hector-salgado-prof.webp" alt="Hector Salgado" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Hector Salgado </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@hsalgado5 </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/latios-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        obelisco: '<article class="card text-white w-9/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group mb-14 sm:mb-0" style="background-image: url(assets/images/cards/tow.png)" > <a href="https://www.instagram.com/p/CzzyBf0rW6_/" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-4 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/152]" src="assets/images/players/obelisco-fc/johan-andres-prof.webp" alt="Hector Salgado" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Johan Joya </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@johan10joya </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugador Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="assets/images/team/obelisco-fc-min.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
      }
      $.ajax({
        type: "GET",
        url: "/api/players.json?ver=2.5.1",
        success: function(result) {
          var data = calculateRanking(result)
          var output = playerProfesional[active_page];
          for (var i in data) {
            output += `<article class="card text-white w-9/12 text-center relative rounded-sm m-auto mb-6 bg-contain bg-no-repeat aspect-[489/720] sm:aspect-[489/787] col-span-1 group transition-all hover:scale-105"><a href="ranking" class="absolute z-10 -right-3.5 -top-3.5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-yellow-400 group-hover:text-black hover:scale-105"><h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">${data[i].ranking.toFixed(1)}</h3><span class="font-bold uppercase text-[8px]">Clasif.</span></a><a href=${formateImage(data[i].image)} class="photo-popup"><div class="pointer-zoom"><img src=${formateImage(data[i].image)} class="w-full" alt="${data[i].namePlayer}" /></div></a></article>`;
          }
          displayResources.append().html(output);
          $(".photo-popup").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom", 
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: true, 
              duration: 800, 
              easing: "cubic-bezier(.858, .01, .068, .99)", 
              opener: function (openerElement) {
                return openerElement.is("img")
                  ? openerElement
                  : openerElement.find("img");
              },
            },
          });
        }
      });
    });
  }

  /* 18. Power Card */
  var swiperPowerCardsCopy = new Swiper(".swiper-power-card-copy", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoHeight: true,
      allowTouchMove: false,
    });
  new Swiper(".swiper-power-card", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function() {
        swiperPowerCardsCopy.slideTo(this.activeIndex);
      },
    },
  });

  // PARTIDOS ONLINE
  function checkAndApplyClass() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Los meses van de 0 a 11
    const date = now.getDate();
    // const hours = now.getHours();
    // const minutes = now.getMinutes();

    const targetYear = 2024;
    const targetMonth = 7; // Julio
    const targetDate = 7;

    const live = document.querySelector('.live');

    // Remove the 'live' class initially
    live?.classList.remove('live-active');

    // Helper function to check if current time is within a range
    function isWithinTimeRange(startHour, startMinute, endHour, endMinute) {
      const start = new Date(year, month - 1, date, startHour, startMinute);
      const end = new Date(year, month - 1, date, endHour, endMinute);
      return now >= start && now <= end;
    }

    // Check date and time range for partido-1 (30 de Junio 2024, 9:00 AM - 10:30 AM)
    if (year === targetYear && month === targetMonth && date === targetDate) {
      // Check date and time range for partido-2 (30 de Junio 2024, 12:30 PM - 1:30 PM)
      if (isWithinTimeRange(8, 55, 15, 0)) {
        live?.classList.add('live-active');
      }
    }
  }

  // Check every minute (60000 milliseconds)
  setInterval(checkAndApplyClass, 30000);

  // Initial check
  checkAndApplyClass();
});