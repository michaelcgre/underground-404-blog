var intervalTime = 5000; // 3 seconds

  var carousel = document.getElementById("blogCarousel");

  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: false
  });

  function autoScroll() {
    carouselInstance.next();
  }

  setInterval(autoScroll, intervalTime);