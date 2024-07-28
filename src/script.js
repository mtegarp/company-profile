$(document).ready(function() {
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $(".navbar").addClass("navbar-fixed");
    //   } else {
    //     $(".navbar").removeClass("navbar-fixed");
    //   }
    // });
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length && !target.is("#carouselExampleIndicators")) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
    }
    });
  });