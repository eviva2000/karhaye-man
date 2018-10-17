let buble = document.querySelector("#buble");
let image = document.querySelector(".image");

image.addEventListener("click", doThis);

function doThis() {
  console.log("AM I WORKING?");
}

// ANIMATION-->

$(window).scroll(function() {
  $(".animation-element").each(function() {
    var imagePos = $(this).offset().top;
    var imageHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();

    if (
      imagePos < topOfWindow + imageHeight &&
      imagePos + imageHeight > topOfWindow
    ) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
});

// Assign active class to nav links while scrolling

$(window)
  .scroll(function() {
    var scrollDistance = $(window).scrollTop() + 400;

    // Assign active class to nav links while scolling
    $(".pj").each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $("#myDIV a.active").removeClass("active");
        $("#myDIV a")
          .eq(i)
          .addClass("active");
      }
    });
  })
  .scroll();

//   scroll down button in other pages-->

function mySecondFunction() {
  var body = document.body; // For Safari
  var html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers

  body.scrollTop += 700;

  html.scrollTop += 700;
}

// scroll down button in first page-->

$(function() {
  $("a[href*=#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

// When the user scrolls down 600px from the top of the document, show the vertical menu
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("myDIV").style.display = "block";
  } else {
    document.getElementById("myDIV").style.display = "none";
  }
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("home-images").style.opacity = 0;
    document.getElementById("scroll-Span").style.opacity = 0;
  } else {
    document.getElementById("home-images").style.opacity = 1;
    document.getElementById("scroll-Span").style.opacity = 1;
  }
}

//burger menu
var button = document.querySelector(".burger-container");
var menutag = document.querySelector(".menuTag");

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("menu").classList.toggle("reveal");

  menutag.classList.add();
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

var linear = new SmoothScroll('[data-easing="linear"]', {
  easing: "linear"
});
