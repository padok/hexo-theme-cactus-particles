
$(document).ready(function () {
  /**
   * Sets up Justified Gallery.
   */
  if (!!$.prototype.justifiedGallery) {
    var options = {
      rowHeight: 140,
      margins: 4,
      lastRow: "justify"
    };
    $(".article-gallery").justifiedGallery(options);
  }

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function () {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    var menu = $("#menu");
    var nav = $("#menu > #nav");
    var menuIcon = $("#menu-icon, #menu-icon-tablet");

    /**
     * Display the menu on hi-res laptops and desktops.
     */
    if ($(document).width() >= 1440) {
      menu.show();
      menuIcon.addClass("active");
    }

    /**
     * Display the menu if the menu icon is clicked.
     */
    menuIcon.click(function () {
      if (menu.is(":hidden")) {
        menu.show();
        menuIcon.addClass("active");
      } else {
        menu.hide();
        menuIcon.removeClass("active");
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on("scroll", function () {
        var topDistance = menu.offset().top;

        // hide only the navigation links on desktop
        if (!nav.is(":visible") && topDistance < 50) {
          nav.show();
        } else if (nav.is(":visible") && topDistance > 100) {
          nav.hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if (!$("#menu-icon").is(":visible") && topDistance < 50) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (!$("#menu-icon").is(":visible") && topDistance > 100) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($("#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on("scroll", function () {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop) {
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu"s on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > #top").hide();
        } else if (topDistance > 100) {
          $("#actions-footer > #top").show();
        }
      });
    }
  }
  // tsParticles.load('particles', '/assets/particles.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });
  // (async () => {
  //   await loadFirePreset(tsParticles);
  //   //await tsParticles.load("particles", "/assets/particles.json");
  //   await tsParticles.load("particles", {
  //     preset: "fire",
  //   });
  //   console.log('callback - tsparticles config loaded');
  // })();

  tsParticles.loadJSON('particles', '/assets/particles.json').then(function (p) {
    // p is the loaded container, for using it later

    const strings = [
      'Why do programmers prefer dark mode?\nBecause light attracts bugs!',
      'Two bytes meet. The first byte asks, "Are you feeling okay?" The second byte responds, "No, I´m feeling a bit off."',
      '3 Errors walk into a bar. The barman says, “Normally I\'d Throw you all out, but tonight I’ll make an Exception.',
      'What’s the object-oriented way to become wealthy?\nInheritance.',
      'Why are assembly programmers always wet?\nBecause they work under C level.'
    ];
    const randomIndex = Math.floor(Math.random() * strings.length);
    console.log('One of the particles said:\n' + strings[randomIndex]);

  });
});
