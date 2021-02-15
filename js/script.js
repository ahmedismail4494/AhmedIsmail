$(function () {
  "use strict";

  // resize photo cover
  var coverH = $(".cover"),
    windowH = $(window).height();

  coverH.height(windowH);

  // *** All Body ***  trigger Nice Scroll plugenin
  $("html").niceScroll({
    cursorcolor: "#EC1D25 ",
    cursorwidth: "10px",
    cursorborder: "1px solid #EC1D25 ",
  });

  // *** The header *** scroll to features by button arrow
  $(".header li a").click(function (e) {
    e.preventDefault();
    $("html , body").animate(
      { scrollTop: $("#" + $(this).data("value")).offset().top },
      1000
    );
  });

  // links add active class
  $(".header li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // 5-   Scroll To Top (Button)

  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(".butup").fadeIn(500);
    } else {
      $(".butup").fadeOut(500);
    }

    $(".butup").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 1000);
      $(".navbar li a").firstChild().addClass("active");
      return false;
    });
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(".butup").fadeIn(500);
    } else {
      $(".butup").fadeOut(500);
    }
    $(".butup").click(function () {
      $("html , body").animate({ scrollTop: 0 }, 1000);
      $(".navbar li a").firstChild().addClass("active");
    });
  });
});
