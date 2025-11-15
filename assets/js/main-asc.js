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
    const navLinks = document.querySelectorAll('.nav-link-split');
    navLinks.forEach(link => {
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
        // var interleaveOffset = 0.5;
        new Swiper(".home-slider", {
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
          // on: {
          //   progress: function () {
          //     this;
          //     for (var i = 0; i < swiper.slides.length; i++) {
          //       var slideProgress = swiper.slides[i].progress;
          //       var innerOffset = swiper.width * interleaveOffset;
          //       var innerTranslate = slideProgress * innerOffset;
          //       swiper.slides[i].querySelector(".slide-bg").style.transform =
          //         "translate3d(" + innerTranslate + "px, 0, 0)";
          //     }
          //   },
          //   touchStart: function () {
          //     this;
          //     for (var i = 0; i < swiper.slides.length; i++) {
          //       swiper.slides[i].style.transition = "";
          //     }
          //   },
          //   setTransition: function (speed) {
          //     this;
          //     for (var i = 0; i < swiper.slides.length; i++) {
          //       swiper.slides[i].style.transition = speed + "ms";
          //       swiper.slides[i].querySelector(".slide-bg").style.transition =
          //         speed + "ms";
          //     }
          //   },
          // },
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
  
        var mySwiper = new Swiper(".portfolio-slider", {
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
  
        var mySwiper = new Swiper(".portfolio-column-slider", {
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
    // var supports = (function () {
    //   var d = document.documentElement,
    //     c = "ontouchstart" in window || navigator.msMaxTouchPoints;
    //   if (c) {
    //     d.className += " touch";
    //     return {
    //       touch: true,
    //     };
    //   } else {
    //     d.className += " no-touch";
    //     return {
    //       touch: false,
    //     };
    //   }
    // })();
  
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
        url: "../assets/ajax/mail.php",
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
  
    const initModalPlayers = () => {
      $('.popup-modal').magnificPopup({
        type: 'inline',
        mainClass: "mfp-with-zoom modal-detail", // this class is for CSS animation below
        preloader: false,
        fixedContentPos: true,
        removalDelay: 160,
        preloader: false,
        closeOnBgClick: true,
        callbacks: {
          beforeOpen: function() {
            var info = this.st.el.attr('data-info');
            var player = JSON.parse(info);
            cardPlayerModal(player)
          }
        }
      });
    }
  
  
    /* 17. Players AJAX */
    const url_all = location.href; 
    const url_last = url_all.lastIndexOf("/"); 
    const active_page = url_all.slice(url_last+1).replace("-fc", "");
    const capitalizarPrimeraLetra = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const calculateRankingTeam = (data) => {
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
    const comparePositions = (a, b) => {
        const order = ["Portero", "Defensa", "Volante", "Delantero"];
        return order.indexOf(a.pos) - order.indexOf(b.pos);
    }
    const displayResources = $("#playersTeam");
    const cardPlayerModal = (player) => {
      $('#info-player').html(`<div class="flex flex-col sm:flex-row w-full"> <div class="w-full sm:w-[410px] flex justify-center items-baseline mb-6 sm:mb-0"> <img src="${player.image}" class="w-auto sm:w-full sm:h-auto" alt=${player.namePlayer} /> </div> <div class="w-full pl-0 sm:pl-8"> <h3 class="font-bold text-2xl sm:text-3xl uppercase">${player.namePlayer}</h3> <div class="flex justify-between items-end border-b-2 border-gray-100 pb-4 mb-8 relative"> <div> <p class="text-gray-400 text-sm lg:text-base mb-5 capitalize font-semibold">${player.pos}</p> <div class="flex gap-4 text-[.9rem]"> <p class="kql-player-info-title text-gray-500">Equipo</p> <p class="kql-player-info-value font-semibold capitalize">${player.team.replace("-", " ")} FC</p> </div> <div class="flex gap-4 text-[.9rem]"> <p class="kql-player-info-title text-gray-500">Nacionalidad</p> <p class="kql-player-info-value font-semibold">Colombia</p> </div> <div class="flex gap-4 text-[.9rem]"> <p class="kql-player-info-title text-gray-500">Apodo</p> <p class="kql-player-info-value font-semibold">${player.nickname}</p> </div> <div class="flex gap-4 text-[.9rem]"> <p class="kql-player-info-title text-gray-500">Liga</p> <p class="kql-player-info-value font-semibold">Ascenso</p> </div> <div class="flex gap-4 text-[.9rem]"> <p class="kql-player-info-title text-gray-500">Jug, Profesional</p> <p class="kql-player-info-value font-semibold">${player.professionalPlayer ? "Si" : "No"}</p> </div> </div> <div class="block"> <a href="/ascenso/ranking"> <div class="rounded-lg px-1 py-1 lg:px-2 lg:py-2 bg-${player.team.toLowerCase()}-fc text-white flex justify-between items-center flex-col min-w-[46px] lg:min-w-[66px] text-black h-fit absolute lg:static top-10 sm:top-2 right-0 sm:right-4"> <p class="text-[10px] text-white font-semibold">Ranking</p> <p class="text-base text-white font-bold"> <span>${player?.ranking?.toFixed(1)}</span> </p> </div> </a> <a href="/ascenso/${player.team.toLowerCase()}-fc"> <img src="../../../assets/images/ascent-league/team/logo-${player.team.toLowerCase()}.webp" alt="${player.team} FC" class="absolute top-auto sm:top-6 bottom-4 sm:bottom-auto right-0 w-8 sm:w-12 block"> </a> </div> </div> <div class="w-full border-b-2 border-gray-100 pb-8 mb-3"> <div class="w-full flex gap-4 flex-wrap lg:flex-nowrap"> <div class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"> <p class="text-gray-400 text-xs sm:text-sm text-center">Goles</p> <p class="lg:mt-auto font-bold text-lg">${player.goals}</p> </div> <div class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"> <p class="text-gray-400 text-xs sm:text-sm text-center">Asistencias</p> <p class="lg:mt-auto font-bold text-lg">${player.asistencias}</p> </div> <div class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"> <p class="text-gray-400 text-xs sm:text-sm text-center">Tarjetas Amarillas</p> <p class="lg:mt-auto font-bold text-lg">${player.tarjetasAmarillas}</p> </div> <div class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"> <p class="text-gray-400 text-xs sm:text-sm text-center">Tarjetas Rojas</p> <p class="lg:mt-auto font-bold text-lg">${player.tarjetasRoja}</p> </div> <div class="card-statistic mvp-box flex items-center shadow shadow-gray-500/40 rounded-lg"> <p class="lg:text-center text-white !text-lg">MVP Partido</p> <p class="text-white text-lg lg:mt-auto font-bold m-auto">${player.mvpMatch}</p> </div> </div> </div> <div class="flex justify-between items-end pb-5 w-full"> <div class="w-full"> <p class="text-gray-400 text-sm lg:text-base mb-3 capitalize font-semibold">Síguenos:</p> <div class="flex flex-col sm:flex-row"> <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0"> <p class="kql-player-info-title text-gray-500">Instagram:</p> <p class="kql-player-info-value"><a href="https://www.instagram.com/kantoleaguecol/" target="_blank" class="hover:text-primaryColor cursor-pointer">@kantoleaguecol</a></p> </div> <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0"> <p class="kql-player-info-title text-gray-500">Facebook:</p> <p class="kql-player-info-value"><a href="https://www.facebook.com/people/Kantoleaguecol/61553272852433/" target="_blank" class="hover:text-primaryColor cursor-pointer">@Kantoleaguecol</a></p> </div> <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0"> <p class="kql-player-info-title text-gray-500">Tiktok:</p> <p class="kql-player-info-value"><a href="https://www.tiktok.com/@kantoleaguecol" target="_blank" class="hover:text-primaryColor cursor-pointer">@kantoleaguecol</a></p> </div> </div> </div> </div> </div> </div>`);
    }
    if(displayResources.length > 0) {
      $(document).ready(function() {
        displayResources.text("Cargando...");
        // const playerProfesional = {
        //   sigma: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-sigma.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   omega: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-omega.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   gamma: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-gamma.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   delta: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-delta.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   "reficol-united": '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-reficol-united.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   beta: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-beta.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   karzac: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-karzac.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   ojito: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-ojito.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   orion: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-orion.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   alpha: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-alpha.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   zeta: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-zeta.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        //   zeus: '<article class="card text-white w-10/12 top-0 sm:-top-12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[500/720] col-span-1 group mb-14 sm:mb-0" style="background-image: url(../assets/images/cards/asc.png)" > <a href="#" target="_blank" > <div class="flex pt-9"> <div class="flex flex-col pl-6 pt-4 absolute"> <svg class="w-10 block h-auto" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="#b99e52" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)" ></path> </svg> <span class="mt-0 text-l font-semibold">PROF.</span> </div> <img class="object-contain object-top h-auto aspect-[204/132] pl-5" src="../../../assets/images/players/cover-presidents-ascenso-light.png" alt="Jugador Profesional" loading="lazy" decoding="async" fetchpriority="low" /> </div> <div class="flex flex-col"> <h3 class="py-2 font-bold text-center text-xl uppercase after:w-4/5 after:h-[1px] after:bg-current after:m-auto after:block" > Nombre Jugador </h3> <div class="grid grid-cols-1 relative text-lg after:m-auto after:bg-current after:block" > <div class="py-1 sm:py-0"> <span title="Partidos" class="font-light" >@kantoleague.col </span> </div> <div class="py-1 sm:py-0"> <span title="Goles" class="font-light" >Jugadora Profesional</span > </div> </div> <div class="flex align-center justify-center mt-1"> <img src="../../../assets/images/ascent-league/team/logo-zeus.webp" class="w-6 py-1" /> </div> </div> </a> </article>',
        // }
        $.ajax({
          type: "GET",
          url: "/api/players-assent-league.json?ver=2.9.8",
          success: function(result) {
            var data = calculateRankingTeam(result)
            // var output = playerProfesional[active_page] ?? [];
            var output = [];
  
            for (var i in data.sort(comparePositions)) {
              var objPlayer = JSON.stringify(data[i]);
              var formatPlayer = objPlayer.replace(/"/g, '&quot;');
              output += `<article class="card text-white w-9/12 text-center relative rounded-sm m-auto mb-6 bg-contain bg-no-repeat aspect-[489/720] sm:aspect-[489/787] col-span-1 group transition-all hover:scale-105"><a href="ranking" class="absolute z-10 -right-3.5 -top-3.5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-thirdColor hover:scale-105"><h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">${data[i].ranking.toFixed(1)}</h3><span class="font-bold uppercase text-[8px]">Clasif.</span></a><a href="#modal-player" class="popup-modal" data-info="${formatPlayer}"><div class="pointer-zoom"><img src=${formateImage(data[i].imageMedium)} class="w-full" alt="${data[i].namePlayer}" /></div></a></article>`;
            }
            if (output.length > 0) {
              displayResources.append().html(output);
            } else {
              displayResources.append().html(`<h3>Proximamente...</h3>`);
            }
            // Script Modal
            initModalPlayers()
          }
        });
      });
    }
  
    /* 18. Players AJAX - Ranking */
    const calculateRanking = (data) => {
      // Función para calcular el promedio de los elementos de scorePerMatch
      const calculateAverage = (scores) => {
        const sum = scores.reduce((total, score) => total + score, 0);
        return sum / scores.length;
      };
      // Asignar ranking basado en el promedio
      const newData = data.map((player) => {
        const scores = Object.values(player.scorePerMatch);
        const average = calculateAverage(scores);
        return { ...player, ranking: average, average: average };
      });
      return newData;
    };
    const openDetailPayer = () => {
      $(".openDetailPayer").on("click", function () {
        const dataId = $(this).data("id");
        $.ajax({
          type: "GET",
          url: "/api/players-assent-league.json?ver=2.9.8",
          success: function(result) {
            var data = calculateRanking(result);
            const filterPlayer = data.find((item) => item.id === Number(dataId))
            $.magnificPopup.open({
              items: {
                src: '#modal-player'
              },
              type: 'inline',
              mainClass: "mfp-with-zoom modal-detail",
              preloader: false,
              fixedContentPos: true,
              removalDelay: 160,
              preloader: false,
              closeOnBgClick: true,
              callbacks: {
                beforeOpen: function() {
                  cardPlayerModal(filterPlayer)
                }
              }
            });
          }
        });
      });
    }
  
    /* 19. Power Card */
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
  
    /* 20. Players Santions (Foul / Failure) */
    $.ajax({
      url: "/api/players-assent-league.json?ver=3.8.1",
      type: "GET",
      success: function (result) {
        var data = calculateRanking(result);
        // Foul List
        const filterPlayerFoul = data.filter((item) => item?.sanctions?.foul?.length > 0)
        var outputFoul = [];
        for (var i in filterPlayerFoul) {
          var objPlayer = JSON.stringify(filterPlayerFoul[i]);
          var formatPlayer = objPlayer.replace(/"/g, '&quot;');
          outputFoul += `<a href="#modal-player" class="popup-modal" data-info="${formatPlayer}"><article class="w-full flex flex-row items-start border-b pb-3 mb-3"><div class="w-8/12 sm:w-full flex items-center pointer-large"><div class="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition mr-3 relative"><img src=${formateImage(filterPlayerFoul[i].imageMedium)} class="h-full w-full object-cover object-right-bottom absolute -left-[17px] top-[1px] scale-[2.5]" alt="${filterPlayerFoul[i].namePlayer}" /></div><div class="w-9/12 sm:w-full flex flex-col"><h3 class="text-[14px] sm:text-lg font-bold font-body text-title capitalize truncate">${filterPlayerFoul[i].namePlayer}</h3><h4 class="text-[13px] sm:text-base font-body text-text flex items-center" href="${filterPlayerFoul[i]?.team?.toLowerCase()}-fc"><img src="../../../assets/images/ascent-league/team/logo-${filterPlayerFoul[i]?.team.toLowerCase()}.webp" alt="${filterPlayerFoul[i]?.team?.toLowerCase()} FC" class="w-auto h-3 sm:h-4 mr-1 sm:mr-2 block"><span>${filterPlayerFoul[i].team.replace("-", " ")} F.C.</span></h4></div></div><div class="flex flex-col w-4/12 sm:w-2/12 text-right relative"><p class="font-bold text-[11px] sm:text-[14px] text-text">Fecha de sancion:</p> ${filterPlayerFoul[i].sanctions?.foul.map((sanction) => ` <p class="text-[12px] sm:text-[14px] text-text ml-2">${sanction.date}</p>`).join('')} ${filterPlayerFoul[i].sanctions?.foul.length > 1 ? ` <div class="absolute z-10 left-6 sm:left-8 top-5 sm:top-6 p-1 sm:p-1.5 bg-[#dd3333] rounded-full w-7 h-7 sm:w-9 sm:h-9 opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-thirdColor hover:scale-105 align-center flex flex-col"><h5 class="text-white text-[13px] sm:text-[16px] text-center leading-3 font-bold tooltip-tip tooltip-up" title="Acumuladas">${filterPlayerFoul[i].sanctions?.foul?.length}</h5><span class="font-bold text-white text-center uppercase text-[5px] sm:text-[7px] w-full mt-[1px] sm:mt-[2px]">Faltas</span></div> `: ''} </div></article></a>`
        }
        if (filterPlayerFoul.length > 0) {
          $("#list-foul-players").append().html(outputFoul);
        } else {
          $("#list-foul-players").append().html(`<h3>No se encontraron faltas...</h3>`);
        }
        // Failure List
        const filterPlayerFailure = data.filter((item) => item?.sanctions?.failure?.length > 0)
        var outputFailure = [];
        for (var i in filterPlayerFailure) {
          var objPlayer = JSON.stringify(filterPlayerFailure[i]);
          var formatPlayer = objPlayer.replace(/"/g, '&quot;');
          outputFailure += `<a href="#modal-player" class="popup-modal" data-info="${formatPlayer}"> <article class="w-full flex flex-row items-center border-b pb-3 mb-3"> <div class="w-8/12 sm:w-full flex items-center pointer-large"> <div class="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition mr-3 relative"> <img src=${formateImage(filterPlayerFailure[i].imageMedium)} class="h-full w-full object-cover object-right-bottom absolute -left-[17px] top-[1px] scale-[2.5]" alt="${filterPlayerFailure[i].namePlayer}" /> </div> <div class="w-9/12 sm:w-full flex flex-col"> <h3 class="text-[14px] sm:text-lg font-bold font-body text-title capitalize truncate">${filterPlayerFailure[i].namePlayer}</h3> <h4 class="text-[13px] sm:text-base font-body text-text flex items-center" href="${filterPlayerFailure[i]?.team?.toLowerCase()}-fc"> <img src="../../../assets/images/ascent-league/team/logo-${filterPlayerFailure[i]?.team.toLowerCase()}.webp" alt="${filterPlayerFailure[i]?.team?.toLowerCase()} FC" class="w-auto h-3 sm:h-4 mr-1 sm:mr-2 block"> <span>${filterPlayerFailure[i].team.replace("-", " ")} F.C.</span> </h4> </div> </div> <div class="flex flex-col w-4/12 sm:w-2/12 text-right relative"> <p class="font-bold text-[11px] sm:text-[14px] text-text">Fecha de sancion:</p> ${filterPlayerFailure[i].sanctions?.failure.map((sanction) => ` <p class="text-[12px] sm:text-[14px] text-text ml-2">${sanction.date}</p>`).join('')} ${filterPlayerFailure[i].sanctions?.failure.length > 1 ? ` <div class="absolute z-10 left-6 sm:left-8 top-5 sm:top-6 p-1 sm:p-1.5 bg-[#dd3333] rounded-full w-7 h-7 sm:w-9 sm:h-9 opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-thirdColor hover:scale-105 align-center flex flex-col"> <h5 class="text-white text-[13px] sm:text-[16px] text-center leading-3 font-bold tooltip-tip tooltip-up" title="Acumuladas">${filterPlayerFailure[i].sanctions?.failure?.length}</h5> <span class="font-bold text-white text-center uppercase text-[5px] sm:text-[7px] w-full mt-[1px] sm:mt-[2px]">Fallas</span> </div> `: ''} </div> </article> </a>`
        }
        if (filterPlayerFailure.length > 0) {
          $("#list-failure-players").append().html(outputFailure);
        } else {
          $("#list-failure-players").append().html(`<h3>No se encontraron fallas...</h3>`);
        }
        // Script Modal
        initModalPlayers()
      },
    });
  
    /* 21. Players Ranking Five TOP */
    const calculateRankingFiveTop = (data) => {
      // Función para calcular el promedio de los elementos de scorePerMatch
      const calculateAverage = (scores) => {
        const sum = scores.reduce((total, score) => total + score, 0);
        return sum / scores.length;
      };
      // Asignar ranking basado en el promedio
      const newData = data.map((player) => {
        const scores = Object.values(player.scorePerMatch);
        const average = calculateAverage(scores);
        return { ...player, ranking: average, average: average };
      });
      // Ordenar el nuevo arreglo por el campo ranking de menor a mayor
      newData.sort((a, b) => a.ranking - b.ranking);
      // Asignar el ranking correcto de mayor a menor
      newData.forEach((player, index) => {
        player.ranking = newData.length - index;
      });
      // Eliminar registros con ranking === 0
      const filterPlayers = newData.filter((player) => player.average > 7.0);
      // Ordenar los jugadores por average de mayor a menor
      filterPlayers.sort((a, b) => b.average - a.average);
      // Obtener los primeros 5 jugadores
      return filterPlayers.slice(0, 5);
    };
    $.ajax({
      url: "/api/players-assent-league.json?ver=3.8.1",
      type: "GET",
      success: function (result) {
        var data = calculateRankingFiveTop(result)
        var outputFoul = [];
        for (var i in data) {
          outputFoul += `<div class="swiper-slide"> <article class="card text-white w-9/12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group transition-all hover:scale-105" > <a href="javascript:void(0)" class="openDetailPayer" data-id="${data[i].id}"> <div class="absolute z-10 -right-3.5 -top-3.5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-yellow-400 group-hover:text-black hover:scale-105"> <h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">${data[i]?.average?.toFixed(1)}</h3> <span class="font-bold uppercase text-[8px]">Clasif.</span> </div> <!-- <h4 class="absolute z-10 text-left font-bold top-[41px] sm:top-[35px] left-[47px] sm:left-[40px] text-[#f3e8b9] w-[52%] uppercase shadow-name flex h-[36px] text-[15px] sm:text-[13px] items-end">Nombre Jugadora</h4> --> <img src="${data[i].image}" class="w-full" alt="${data[i].namePlayer}" /> </a> </article> </div>`
        }
        if (outputFoul.length > 0) {
          $("#top-raking-feature").append().html(outputFoul);
        } else {
          $("#top-raking-feature").append().html(`<h3>No se encontraron jugadores...</h3>`);
        }
        // Clik Modal
        openDetailPayer()
        // Script Modal
        initModalPlayers()
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
      const targetMonth = 8; // Julio
      const targetDate = 3;
      const targetDateTwo = 4;
  
      const live = document.querySelector('.live');
      const partido1 = document.querySelector('.partido-1');
      const partido2 = document.querySelector('.partido-2');
      const partido3 = document.querySelector('.partido-3');
      const partido4 = document.querySelector('.partido-4');
      const partido5 = document.querySelector('.partido-5');
      const partido6 = document.querySelector('.partido-6');
      const partido7 = document.querySelector('.partido-7');
      const partido8 = document.querySelector('.partido-8');
  
      // Remove the 'live' class initially
      live?.classList.remove('live-active');
      partido1?.classList.remove('live');
      partido2?.classList.remove('live');
      partido3?.classList.remove('live');
      partido4?.classList.remove('live');
      partido5?.classList.remove('live');
      partido6?.classList.remove('live');
      partido7?.classList.remove('live');
      partido8?.classList.remove('live');
  
      // Helper function to check if current time is within a range
      function isWithinTimeRange(startHour, startMinute, endHour, endMinute) {
        const start = new Date(year, month - 1, date, startHour, startMinute);
        const end = new Date(year, month - 1, date, endHour, endMinute);
        return now >= start && now <= end;
      }
  
      // Check date and time range for Jornada-5 (13 de Junio 2024, 9:00 AM - 10:30 AM)
      if (year === targetYear && month === targetMonth && date === targetDate) {
        // Check date and time range for Jornada 1 (03 de Junio 2024, 12:30 PM - 1:30 PM)
        if (isWithinTimeRange(8, 55, 15, 0)) {
          live?.classList.add('live-active');
        }
  
        // Check date and time range for partido-1 (03 de Junio 2024, 09:00 AM - 10:30 AM)          
        if (isWithinTimeRange(9, 0, 10, 25)) {
          partido1?.classList.add('live');
        }
  
        // Check date and time range for partido-2 (03 de Junio 2024, 10:30 AM - 12:00 PM)
        if (isWithinTimeRange(10, 26, 11, 56)) {
          partido2?.classList.add('live');
        }
  
        // Check date and time range for partido-3 (03 de Junio 2024, 12:30 PM - 1:30 PM)          
        if (isWithinTimeRange(11, 59, 13, 25)) {
          partido3?.classList.add('live');
        }
  
        // Check date and time range for partido-4 (03 de Junio 2024, 01:30 PM - 3:00 PM)
        if (isWithinTimeRange(13, 25, 14, 55)) {
          partido4?.classList.add('live');
        }
      }
      // Check date and time range for Jornada-6 (14 de Junio 2024, 9:00 AM - 10:30 AM)
      if (year === targetYear && month === targetMonth && date === targetDateTwo) {
        // Check date and time range for Jornada 2 (30 de Junio 2024, 12:30 PM - 1:30 PM)
        if (isWithinTimeRange(8, 55, 15, 0)) {
          live?.classList.add('live-active');
        }
  
        // Check date and time range for partido-1 (03 de Junio 2024, 09:00 AM - 10:30 AM)          
        if (isWithinTimeRange(9, 0, 10, 25)) {
          partido5?.classList.add('live');
        }
  
        // Check date and time range for partido-2 (03 de Junio 2024, 10:30 AM - 12:00 PM)
        if (isWithinTimeRange(10, 26, 11, 56)) {
          partido6?.classList.add('live');
        }
  
        // Check date and time range for partido-3 (03 de Junio 2024, 12:30 PM - 1:30 PM)          
        if (isWithinTimeRange(11, 59, 13, 25)) {
          partido7?.classList.add('live');
        }
  
        // Check date and time range for partido-4 (03 de Junio 2024, 01:30 PM - 3:00 PM)
        if (isWithinTimeRange(13, 25, 14, 55)) {
          partido8?.classList.add('live');
        }
      }
    }
  
    // Check every minute (60000 milliseconds)
    setInterval(checkAndApplyClass, 30000);
  
    // Initial check
    checkAndApplyClass();
  });