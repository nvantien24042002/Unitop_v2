/* ===============================
   MODULE 7 – VIDEO SLIDER
================================*/
var duration = 3000;
var bar = document.getElementById("progress");

var videoSlider = $("#video-slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: duration,
  autoplayHoverPause: true
});

// Progress bar
function startBar() {
  bar.style.transition = "none";
  bar.style.width = "0%";

  setTimeout(() => {
    bar.style.transition = `width ${duration}ms linear`;
    bar.style.width = "100%";
  }, 50);
}

startBar();

videoSlider.on("changed.owl.carousel", function () {
  startBar();
});

// Video pause slider
videoSlider.on("changed.owl.carousel", function (event) {
  let index = event.item.index;
  let video = $("#video-slider .owl-item").eq(index).find("video")[0];

  if (video) {
    videoSlider.trigger("stop.owl.autoplay");
    video.play();

    video.onended = function () {
      videoSlider.trigger("play.owl.autoplay");
    };
  }
});

// Next/Prev
$(".next-btn-3").click(() => videoSlider.trigger("next.owl.carousel"));
$(".prev-btn-3").click(() => videoSlider.trigger("prev.owl.carousel"));


/* ===============================
   MODULE 5 – INFINITE SCROLL
================================*/
$("#infinite-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 0,
  autoplaySpeed: 6000,
  slideTransition: "linear",
  margin: 10,
  items: 4
});


/* ===============================
   PRODUCT CAROUSEL (MODULE 1,2,3,6)
================================*/
$("#product-carousel").owlCarousel({
  loop: true,
  margin: 10,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 4 }
  }
});
