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
            loop: true,
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
  const openDetailPayer = () => {
    console.log("DSDS");
    $(".openDetailPayer").on("click", function () {
      const dataId = $(this).data("id");
      console.log(dataId, " dataId");
      $.ajax({
        type: "GET",
        url: "/api/players-premier-league-2024.json?ver=2.5.4",
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

  const formateImage = (image) => {
    return image.replace(' ', '%20');
  }
  const comparePositions = (a, b) => {
    const order = ["Mixto", "Portero", "Defensa", "Volante", "Delantero"];
    return order.indexOf(a.pos) - order.indexOf(b.pos);
}
  const displayResources = $("#playersTeam");
  const cardPlayerModal = (player) => {
    console.log("modal,,,");
    $('#info-player').html(`
    <div class="flex flex-col sm:flex-row w-full">
      <div
        class="w-full sm:w-[410px] flex justify-center items-baseline mb-6 sm:mb-0"
      >
        <div class="w-full h-full rounded-xl px-2 pt-2 bg-primaryColor flex items-end justify-center bg-center" style="background-image: url(assets/images/cards/card-${player?.team.toLowerCase()}-fc.webp); background-size: 130%;">
          <img
            src="${player.image}"
            class="w-auto sm:w-full h-[23rem] sm:h-auto m-0 object-cover"
            alt="${player.namePlayer}"
          />
        </div>
      </div>
      <div class="w-full pl-0 sm:pl-8">
        <h3 class="font-bold text-3xl sm:text-3xl uppercase">
          ${player.namePlayer}
        </h3>
        <div
          class="flex justify-between items-end border-b-2 border-gray-100 pb-4 mb-8 relative"
        >
          <div>
            <p
              class="text-gray-400 text-base mb-3 sm:mb-5 capitalize font-semibold"
            >
              ${player.pos}
            </p>
            <div class="flex gap-4 text-[.9rem]">
              <p class="kql-player-info-title text-gray-500">Equipo</p>
              <p class="kql-player-info-value font-semibold capitalize">
                ${player.team.replace("-", " ")} FC
              </p>
            </div>
            <div class="flex gap-4 text-[.9rem]">
              <p class="kql-player-info-title text-gray-500">Nacionalidad</p>
              <p class="kql-player-info-value font-semibold">Colombia</p>
            </div>
            <div class="flex gap-4 text-[.9rem]">
              <p class="kql-player-info-title text-gray-500">Liga</p>
              <p class="kql-player-info-value font-semibold">Premier</p>
            </div>
            <div class="flex gap-4 text-[.9rem]">
              <p class="kql-player-info-title text-gray-500">
                Jug, Profesional
              </p>
              <p class="kql-player-info-value font-semibold">
                ${player.professionalPlayer ? "Si" : "No"}
              </p>
            </div>
          </div>
          <div class="block">
            <a href="/ranking">
              <div
                class="rounded-lg px-1 py-1 lg:px-2 lg:py-2 bg-primaryColor text-white flex justify-between items-center flex-col min-w-[46px] lg:min-w-[66px] text-black h-fit absolute lg:static top-7 sm:top-2 right-0 sm:right-4"
              >
                <p class="text-[10px] text-white font-semibold">Ranking</p>
                <p class="text-base text-white font-bold">
                  <span>${player?.average?.toFixed(1)}</span>
                </p>
              </div>
            </a>
            <a href="/${player.team.toLowerCase()}-fc">
              <img
                src="../assets/images/premier/second-season/team/logo-${player.team.toLowerCase()}.webp"
                alt="${player.team} FC"
                class="absolute top-auto sm:top-6 bottom-4 sm:bottom-auto right-0 w-auto h-10 sm:h-9 block"
              />
            </a>
          </div>
        </div>
        <div class="w-full border-b-2 border-gray-100 pb-8 mb-3">
          <div class="w-full flex gap-4 flex-wrap lg:flex-nowrap">
            <div
              class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"
            >
              <p class="text-gray-400 text-xs sm:text-sm text-center">Goles</p>
              <p class="lg:mt-auto font-bold text-lg">${player.goals}</p>
            </div>
            <div
              class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"
            >
              <p class="text-gray-400 text-xs sm:text-sm text-center">
                Asistencias
              </p>
              <p class="lg:mt-auto font-bold text-lg">${player.asistencias}</p>
            </div>
            <div
              class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"
            >
              <p class="text-gray-400 text-xs sm:text-sm text-center">
                Tarjetas Amarillas
              </p>
              <p class="lg:mt-auto font-bold text-lg">
                ${player.tarjetasAmarillas}
              </p>
            </div>
            <div
              class="card-statistic stat-box flex items-center shadow shadow-gray-500/40 rounded-lg"
            >
              <p class="text-gray-400 text-xs sm:text-sm text-center">
                Tarjetas Rojas
              </p>
              <p class="lg:mt-auto font-bold text-lg">${player.tarjetasRoja}</p>
            </div>
            <div
              class="card-statistic mvp-box flex items-center shadow shadow-gray-500/40 rounded-lg"
            >
              <p class="lg:text-center text-white !text-lg">MVP Partido</p>
              <p class="text-white text-lg lg:mt-auto font-bold m-auto">
                ${player.mvpMatch}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-end pb-5 w-full">
          <div class="w-full">
            <p
              class="text-gray-400 text-sm lg:text-base mb-3 capitalize font-semibold"
            >
              Síguenos:
            </p>
            <div class="flex flex-col sm:flex-row">
              <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0">
                <p class="kql-player-info-title text-gray-500">Instagram:</p>
                <p class="kql-player-info-value">
                  <a
                    href="https://www.instagram.com/kantoleaguecol/"
                    target="_blank"
                    class="hover:text-primaryColor cursor-pointer"
                    >@kantoleaguecol</a
                  >
                </p>
              </div>
              <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0">
                <p class="kql-player-info-title text-gray-500">Facebook:</p>
                <p class="kql-player-info-value">
                  <a
                    href="https://www.facebook.com/people/Kantoleaguecol/61553272852433/"
                    target="_blank"
                    class="hover:text-primaryColor cursor-pointer"
                    >@Kantoleaguecol</a
                  >
                </p>
              </div>
              <div class="flex gap-4 w-full sm:w-4/12 py-1 sm:py-0">
                <p class="kql-player-info-title text-gray-500">Tiktok:</p>
                <p class="kql-player-info-value">
                  <a
                    href="https://www.tiktok.com/@kantoleaguecol"
                    target="_blank"
                    class="hover:text-primaryColor cursor-pointer"
                    >@kantoleaguecol</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `);
  }
  if(displayResources.length > 0) {
    $(document).ready(function() {
      displayResources.text("Cargando...");
      $.ajax({
        type: "GET",
        url: "/api/players-premier-league-2024.json?ver=2.5.4",
        success: function(result) {
          var data = calculateRanking(result)
          var output = []
          // var output = playerProfesional[active_page.replace(/-/g, '').toLowerCase()];
          for (var i in data.sort(comparePositions)) {
            var objPlayer = JSON.stringify(data[i]);
            var formatPlayer = objPlayer.replace(/"/g, '&quot;');
            if (data[i].professionalPlayer) {
              output += `<article class="card text-white w-9/12 w-9/12 top-0 sm:-top-9 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] inline-block md:block group"
                style="background-image: url(assets/images/cards/card-${data[i]?.team.toLowerCase()}-fc.webp)">
                <a
                  href="ranking"
                  class="absolute z-10 -right-3.5 top-5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-primaryColor group-hover:text-black hover:scale-105"
                >
                  <h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">
                    ${data[i].ranking.toFixed(1)}
                  </h3>
                  <span class="font-bold uppercase text-[8px]">Ranking</span>
                </a>
                <a href="#modal-player" class="popup-modal" data-info="${formatPlayer}">
                  <div class="flex pt-9">
                    <div class="flex flex-col pl-7 pt-8 sm:pl-5 sm:pt-6 2xl:pl-7 2xl:pt-8 absolute z-10">
                      <span class="mb-1">
                        <img src="assets/images/premier/second-season/team/logo-${data[i]?.team.toLowerCase()}.webp" class="w-9 block h-auto mb-1" />
                      </span>
                      <svg
                        class="w-10 block h-auto"
                        height="21"
                        viewBox="0 0 21 21"
                        width="21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
                          fill="none"
                          stroke="#b99e52"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          transform="translate(3 3)"
                        ></path>
                      </svg>
                      <span class="mt-0 text-l font-semibold">PROF.</span>
                      <img src="assets/images/players-draft/country/icon-${data[i].country === "Venezuela" ? "ve" : "co"}.png" alt="country player" class="w-6 block h-auto m-auto mt-2" />
                    </div>
                    <img src="${formateImage(data[i].image)}" alt="${data[i].namePlayer}" class="object-contain object-top h-auto aspect-[204/176] xxs:aspect-[204/165] xs:aspect-[204/177] sm:aspect-[209/162] 2xl:aspect-[203/182] pl-16 pt-2 mask-images" loading="lazy" decoding="async" fetchpriority="low">
                  </div>
                  <div class="flex flex-col">
                    <h3 class="pb-2 font-bold text-center text-[1.5rem] sm:text-xl 2xl:text-[1.5rem] uppercase after:w-4/5 after:h-[1px] after:mt-1 after:opacity-20 after:bg-current after:m-auto after:block">
                      ${data[i].namePlayer}
                    </h3>
                    <div class="grid grid-cols-3 gap-3 w-full pb-1 pt-1 px-5">
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Partidos</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].partidosJugados}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1"> 
                        <p class="text-gray-400 text-[10px] text-center">Goles</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].goals}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Asist.</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].asistencias}</p>
                      </div>
                    </div>
                    <div class="flex align-center justify-center mt-1">
                      <img src="assets/images/icon/android-icon-36x36.png" class="w-7 sm:w-5 py-1" />
                    </div>
                  </div>
                </a>
              </article>`;
            } else {
              output += `<article class="card text-white w-9/12 w-9/12 top-0 sm:-top-9 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] inline-block md:block group"
                style="background-image: url(assets/images/cards/card-${data[i]?.team.toLowerCase()}-fc.webp)">
                <a
                  href="ranking"
                  class="absolute z-10 -right-3.5 top-5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-primaryColor group-hover:text-black hover:scale-105"
                >
                  <h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">
                    ${data[i].ranking.toFixed(1)}
                  </h3>
                  <span class="font-bold uppercase text-[8px]">Ranking</span>
                </a>
                <a href="#modal-player" class="popup-modal" data-info="${formatPlayer}">
                  <div class="flex pt-9">
                    <div class="flex flex-col pl-7 pt-8 sm:pl-5 sm:pt-6 2xl:pl-7 2xl:pt-8 absolute z-10">
                      <span class="mb-1">
                        <img src="assets/images/premier/second-season/team/logo-${data[i]?.team.toLowerCase()}.webp" class="w-9 block h-auto mb-1" />
                      </span>
                      <span class="mt-0 text-xl font-semibold mb-1 uppercase">${data[i].pos.slice(0, 3)}</span>
                      <span class="-mt-2 text-[0.6rem] font-semibold">POS</span>
                      <img src="assets/images/players-draft/country/icon-${data[i].country === "Venezuela" ? "ve" : "co"}.png" alt="country player" class="w-6 block h-auto m-auto mt-2" />
                    </div>
                    <img src="${formateImage(data[i].image)}" alt="${data[i].namePlayer}" class="object-contain object-top h-auto aspect-[198/157] xxs:aspect-[204/165] xs:aspect-[204/177] sm:aspect-[204/158] 2xl:aspect-[203/181] pl-16 mask-images" loading="lazy" decoding="async" fetchpriority="low">
                  </div>
                  <div class="flex flex-col">
                    <h3 class="pb-2 font-bold text-center text-[1.5rem] sm:text-xl 2xl:text-[1.5rem] uppercase after:w-4/5 after:h-[1px] after:mt-1 after:opacity-20 after:bg-current after:m-auto after:block">
                      ${data[i].namePlayer}
                    </h3>
                    <div class="grid grid-cols-3 gap-3 w-full pb-1 pt-1 px-5">
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Partidos</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].partidosJugados}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1"> 
                        <p class="text-gray-400 text-[10px] text-center">Goles</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].goals}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Asist.</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].asistencias}</p>
                      </div>
                    </div>
                    <div class="flex align-center justify-center mt-1">
                      <img src="assets/images/icon/android-icon-36x36.png" class="w-7 sm:w-5 py-1" />
                    </div>
                  </div>
                </a>
              </article>`;
            }
          }
          if (output.length > 0) {
            displayResources.append().html(output);
          } else {
            displayResources.append().html(`<h3>Proximamente...</h3>`);
          }
          // Script Modal
          initModalPlayers()
          // Clik Modal
          openDetailPayer()
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
    url: "/api/players-premier-league-2024.json?ver=2.5.4",
    type: "GET",
    success: function (result) {
      var data = calculateRankingFiveTop(result.filter((player) => player.pos !== "Mixto"));
      var outputFoul = [];
      for (var i in data) {
        var objPlayer = JSON.stringify(data[i]);
        var formatPlayer = objPlayer.replace(/"/g, '&quot;');
        // outputFoul += `<div class="swiper-slide"> <article class="card text-white w-9/12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group transition-all hover:scale-105" > <a href="javascript:void(0)" class="openDetailPayer" data-id="${data[i].id}"> <div class="absolute z-10 -right-3.5 -top-3.5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-yellow-400 group-hover:text-black hover:scale-105"> <h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">${data[i]?.average?.toFixed(1)}</h3> <span class="font-bold uppercase text-[8px]">Clasif.</span> </div> <!-- <h4 class="absolute z-10 text-left font-bold top-[41px] sm:top-[35px] left-[47px] sm:left-[40px] text-[#f3e8b9] w-[52%] uppercase shadow-name flex h-[36px] text-[15px] sm:text-[13px] items-end">Nombre Jugadora</h4> --> <img src="${data[i].image}" class="w-full" alt="${data[i].namePlayer}" /> </a> </article> </div>`
        outputFoul += `<div class="swiper-slide"> <article class="card text-white w-9/12 text-center relative rounded-sm m-auto bg-contain bg-no-repeat aspect-[489/787] col-span-1 group transition-all hover:scale-105"
                style="background-image: url(assets/images/cards/card-${data[i]?.team.toLowerCase()}-fc.webp)">
                <a
                  href="ranking"
                  class="absolute z-10 -right-3.5 top-5 p-2 bg-gray-800/90 rounded-full opacity-1 transition-all duration-500 ease-in-out shadow-xl group-hover:bg-primaryColor group-hover:text-black hover:scale-105"
                >
                  <h3 class="w-8 h-4 text-xl leading-5 font-bold tooltip-tip tooltip-up" title="Ranking">
                    ${data[i]?.average?.toFixed(1)}
                  </h3>
                  <span class="font-bold uppercase text-[8px]">Ranking</span>
                </a>
                <a href="#modal-player" class="popup-modal" data-info="${formatPlayer}">
                  <div class="flex pt-9">
                    <div class="flex flex-col pl-7 pt-8 sm:pl-5 sm:pt-6 2xl:pl-7 2xl:pt-8 absolute z-10">
                      <span class="mb-1">
                        <img src="assets/images/premier/second-season/team/logo-${data[i]?.team.toLowerCase()}.webp" class="w-9 block h-auto mb-1" />
                      </span>
                      <span class="mt-0 text-xl font-semibold mb-1 uppercase">${data[i].pos.slice(0, 3)}</span>
                      <span class="-mt-2 text-[0.6rem] font-semibold">POS</span>
                      <img src="assets/images/players-draft/country/icon-${data[i].country === "Venezuela" ? "ve" : "co"}.png" alt="country player" class="w-6 block h-auto m-auto mt-2" />
                    </div>
                    <img src="${formateImage(data[i].image)}" alt="${data[i].namePlayer}" class="object-contain object-top h-auto aspect-[198/157] xxs:aspect-[204/165] xs:aspect-[204/177] sm:aspect-[204/158] 2xl:aspect-[203/181] pl-16 mask-images" loading="lazy" decoding="async" fetchpriority="low">
                  </div>
                  <div class="flex flex-col">
                    <h3 class="pb-2 font-bold text-center text-[1.5rem] sm:text-xl 2xl:text-[1.5rem] uppercase after:w-4/5 after:h-[1px] after:mt-1 after:opacity-20 after:bg-current after:m-auto after:block">
                      ${data[i].namePlayer}
                    </h3>
                    <div class="grid grid-cols-3 gap-3 w-full pb-1 pt-1 px-5">
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Partidos</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].partidosJugados}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1"> 
                        <p class="text-gray-400 text-[10px] text-center">Goles</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].goals}</p>
                      </div>  
                      <div class="bg-gradient-to-tr from-[#202020c9] via-[#111517] to-[#cd55002a] stat-box flex flex-col items-center shadow shadow-gray-500/40 rounded-lg pt-1">
                        <p class="text-gray-400 text-[10px] text-center">Asist.</p>
                        <p class="lg:mt-auto font-bold text-lg">${data[i].asistencias}</p>
                      </div>
                    </div>
                    <div class="flex align-center justify-center mt-1">
                      <img src="assets/images/icon/android-icon-36x36.png" class="w-7 sm:w-5 py-1" />
                    </div>
                  </div>
                </a>
              </article> </div>`
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

    const targetYear = 2025;
    const targetMonth = 8; // Agosto
    const targetDate = 29;

    const live = document.querySelector('.live');
    const partido1 = document.querySelector('.partido-1');
    const partido2 = document.querySelector('.partido-2');

    // Remove the 'live' class initially
    live?.classList.remove('live-active');
    partido1?.classList.remove('live');
    partido2?.classList.remove('live');

    // Helper function to check if current time is within a range
    function isWithinTimeRange(startHour, startMinute, endHour, endMinute) {
      const start = new Date(year, month - 1, date, startHour, startMinute);
      const end = new Date(year, month - 1, date, endHour, endMinute);
      return now >= start && now <= end;
    }

    // Check date and time range for partido-1 (30 de Junio 2024, 9:00 AM - 10:30 AM)
    if (year === targetYear && month === targetMonth && date === targetDate) {
      // Check date and time range for partido-2 (30 de Junio 2024, 12:30 PM - 1:30 PM)
      if (isWithinTimeRange(18, 30, 22, 30)) {
        live?.classList.add('live-active');
      }

      // Check date and time range for partido-1 (03 de Junio 2024, 09:00 AM - 10:30 AM)          
      if (isWithinTimeRange(18, 30, 22, 30)) {
        partido1?.classList.add('live');
      }

      // Check date and time range for partido-1 (03 de Junio 2024, 09:00 AM - 10:30 AM)          
      if (isWithinTimeRange(20, 40, 22, 0)) {
        partido2?.classList.add('live');
      }
    }
  }

  // Check every minute (60000 milliseconds)
  setInterval(checkAndApplyClass, 30000);

  // Initial check
  checkAndApplyClass();


  /* 19. Action - Partner BETPLAY */
  $(".promo-betplay").on("click", function () {
    $(".nav-leagues").addClass("nav-leagues-hide");
    $(".buttons-header").addClass("buttons-header-hide");
    $(this).addClass("left-auto right-full")
    var sizeBanner = $(".betplay-banner").height();
    $(".betplay-banner").show(300);
    $(".animsition-overlay").css("padding-top", `${sizeBanner}px`);
  });
  $(".betplay-banner .mfp-close").on("click", function () {
    $(".nav-leagues").removeClass("nav-leagues-hide");
    $(".buttons-header").removeClass("buttons-header-hide");
    $(".promo-betplay").removeClass("left-auto right-full").addClass("left-0");
    $(".betplay-banner").hide(300);
    $(".animsition-overlay").css("padding-top", "0px");
  });
});