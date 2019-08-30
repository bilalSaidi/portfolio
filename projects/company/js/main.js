$("document").ready(function() {
  // sunc links with block

  $(window).scroll(function() {
    $(".block").each(function() {
      if ($(window).scrollTop() > $(this).offset().top) {
        var blockId = $(this).attr("id");
        $(".navbar .nav-link").removeClass("active");

        $('.navbar .nav-link[data-scroll="' + blockId + '"]').addClass(
          "active"
        );
      }
    });
  });

  //  scroll to element

  $(".navbar .nav-link").click(function(e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
      },
      1000
    );
  });

  // Adjust Home Bacjground Image

  $(".home").height($(window).height());

  $(window).resize(function() {
    $(".home").height($(window).height());
  });

  // change style

  $(window).scroll(function() {
    if ($(window).scrollTop() > 56) {
      $(".navbar").addClass("scrolled-nav");
    } else {
      $(".navbar").removeClass("scrolled-nav");
    }
  });

  // hover from left to about item

  $(".about .item-about").hover(
    function() {
      $(this)
        .children("span")
        .animate(
          {
            width: "100%"
          },
          100,
          function() {
            $(this)
              .parent()
              .addClass("hoverd");
          }
        );
    },
    function() {
      $(this)
        .children("span")
        .animate(
          {
            width: 0
          },
          100,
          function() {
            $(this)
              .parent()
              .removeClass("hoverd");
          }
        );
    }
  );

  // show and hide work content

  $(".featured-work .work").hover(
    function() {
      $(this)
        .children(".overlay-work ,.work-content")
        .css("opacity", 1);
    },
    function() {
      $(this)
        .children(".overlay-work ,.work-content")
        .css("opacity", 0);
    }
  );

  // show and hide hover our services

  $(".services .service").hover(
    function() {
      $(this)
        .children("span")
        .animate(
          {
            width: "100%"
          },
          100,
          function() {
            $(this)
              .parent()
              .addClass("hoverd");
          }
        );
    },
    function() {
      $(this)
        .children("span")
        .animate(
          {
            width: 0
          },
          100,
          function() {
            $(this)
              .parent()
              .removeClass("hoverd");
          }
        );
    }
  );

  // Start Owl carusol

  $(".features .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true
  });

  // Show And Hide Arrow When I Hover Crausol

  $(".features .owl-carousel").hover(
    function() {
      $(".features .owl-nav span").show(200);
    },
    function() {
      $(".features .owl-nav span").hide(200);
    }
  );

  // show and hide overlay-plan wheen i hover pricing-table

  $(".pracing-table .plan").hover(
    function() {
      $(this)
        .children(".overlay-plan")
        .animate(
          {
            height: "100%"
          },
          100,
          function() {
            $(this)
              .parent()
              .addClass("hoverd");
          }
        );
    },
    function() {
      $(this)
        .children(".overlay-plan")
        .animate(
          {
            height: 0
          },
          100,
          function() {
            $(this)
              .parent()
              .removeClass("hoverd");
          }
        );
    }
  );

  // start owrl carusol testmonials

  $(".testmonials .owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    nav: false,
    dots: false,
    autoplay: true
  });

  // show and hide  overlay-team-person when i hover person tam

  $(".team-person").hover(
    function() {
      $(this).addClass("hoverd");
      $(this)
        .children(".overlay-team-person")
        .animate(
          {
            height: "100%"
          },
          150,
          function() {
            $(this)
              .children("ul")
              .css("display", "block");
          }
        );
    },
    function() {
      $(this).removeClass("hoverd");
      $(this)
        .children(".overlay-team-person")
        .animate(
          {
            height: 0
          },
          150,
          function() {
            $(this)
              .children("ul")
              .css("display", "none");
          }
        );
    }
  );
});
