// LOADER
$(document).ready(function () {
  // Users can skip the loading process if they want.
  //   $(".skip").click(function () {
  //     $(".overlay, body").addClass("loaded");
  //   });

  // Will wait for everything on the page to load.
  $(window).bind("load", function () {
    setTimeout(function () {
      $(".overlay, body").addClass("loaded");
    }, 1000);
    setTimeout(function () {
      $(".overlay").css({ display: "none" });
    }, 2000);
  });

  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function () {
    $(".overlay, body").addClass("loaded");
  }, 60000);
});

// LOADER TEXT
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// ISOTOPE FILTER

jQuery(document).ready(function ($) {
  if ($(".iso-box-wrapper").length > 0) {
    var $container = $(".iso-box-wrapper"),
      $imgs = $(".iso-box img");

    $container.imagesLoaded(function () {
      $container.isotope({
        layoutMode: "fitRows",
        itemSelector: ".iso-box",
      });

      $imgs.load(function () {
        $container.isotope("reLayout");
      });
    });

    //filter items on button click

    $(".filter-wrapper li a").click(function () {
      var $this = $(this),
        filterValue = $this.attr("data-filter");

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });

      // don't proceed if already selected

      if ($this.hasClass("selected")) {
        return false;
      }

      var filter_wrapper = $this.closest(".filter-wrapper");
      filter_wrapper.find(".selected").removeClass("selected");
      $this.addClass("selected");

      return false;
    });
  }
});

// MAIN NAVIGATION

$(".main-navigation").onePageNav({
  scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
  scrollOffset: 75, //Height of Navigation Bar
  filter: ":not(.external)",
  changeHash: true,
});

/* NAVIGATION VISIBLE ON SCROLL */
mainNav();
$(window).scroll(function () {
  mainNav();
});

function mainNav() {
  var top =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  if (top > 40)
    $(".sticky-navigation").stop().animate({
      opacity: "1",
      top: "0",
    });
  else
    $(".sticky-navigation").stop().animate({
      opacity: "0",
      top: "-75",
    });
}

// HIDE MOBILE MENU AFTER CLIKING ON A LINK

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

//  CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
