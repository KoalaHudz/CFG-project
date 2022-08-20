$(window).scroll(scrollFunction);

function scrollFunction() {
  if ($(window).scrollTop() > 20) {
    $("#go-top-button").show();
  } else {
    $("#go-top-button").hide();
  }
}

function scrollToTop() {
  $(window).scrollTop(0)
}