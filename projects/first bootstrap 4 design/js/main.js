$("ducument").ready(function() {
  // Adjust Height Slider

  var windowheight = $(window).height(),
    navheight = $(".navbar").innerHeight(),
    upperheight = $(".upperBar").innerHeight();

  $(".slider , .carousel-item").height(
    windowheight - (navheight + upperheight)
  );

  // shffle images

  $(".featured-work ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    if ($(this).data("class") == "all") {
      $(".sufflie-images .col-md").css("opacity", 1);
    } else {
      $(".sufflie-images .col-md").css("opacity", "0.1");
      $($(this).data("class"))
        .parent()
        .css("opacity", 1);
    }
  });
});
