// page loader
window.addEventListener("load", function () {
  var preloadpage = document.getElementById("preloader");
  preloadpage.style.display = "none";
});

// for common date input
$(document).ready(function () {
  $(".date")
    .datepicker({
      // minDate: "+30d",
      format: "dd-mm-yyyy",
      autoclose: true,
      todayHighlight: true,
      toggleActive: true,
    })
    .on("changeDate", function (e) {
      var date = new Date(e.date);
      if (date) {
        var month = date.getMonth();
        month = month + 1;
        var day = date.getDate();
        var newformattedDate = date.getFullYear() + "-" + month + "-" + day;
      }
    });
});

// scroll to top
$('[data-bs-toggle="modal"]').on("click", function () {
  $(window).scrollTop(0);
});

// rtl setup
var body = $("body");
var html = $("html");

// language
var lanBtn = $(".language-convert-select");
$(lanBtn).change(function () {
  if ($(this).val() === "ar") {
    html.attr("dir", "rtl").attr("lang", "ar");
    body.attr("direction", "rtl");
    window.localStorage.setItem("lang-version", "ar");
  } else {
    html.attr("dir", "ltr").attr("lang", "en-US");
    body.attr("direction", "ltr");
    window.localStorage.setItem("lang-version", "en");
  }
});
// languare localStorage
if (window.localStorage.getItem("lang-version") === "ar") {
  html.attr("dir", "rtl").attr("lang", "ar");
  body.attr("direction", "rtl");
  $(".language-convert-select option[value=ar]").attr("selected", "selected");
} else if (window.localStorage.getItem("lang-version") === "en") {
  html.attr("dir", "ltr").attr("lang", "en-US");
  body.attr("direction", "ltr");
}

// dark mode
$(body).attr("theme-version", "light");
var darkMode = $(".dark-mode");
$(darkMode).click(function () {
  if ($(body).attr("theme-version") == "light") {
    $(body).attr("theme-version", "dark-mode");
    $(darkMode).removeClass("active");
    window.localStorage.setItem("theme-version", "dark-mode");
  } else {
    $(body).attr("theme-version", "light");
    $(darkMode).addClass("active");
    window.localStorage.setItem("theme-version", "light");
  }
});
// dark mode localStorage
if (window.localStorage.getItem("theme-version") === "dark-mode") {
  body.attr("theme-version", "dark-mode");
  $(darkMode).removeClass("active");
} else if (window.localStorage.getItem("theme-version") === "light") {
  body.attr("theme-version", "light");
  $(darkMode).addClass("active");
}

// font size
// $('.font-slider input[type="range"]').on("input change", function () {
//   var newSize = $(this).val(),
//     minSize = 7,
//     maxSize = 9;

//   if (newSize <= maxSize && newSize >= minSize) {
//     $("html").css("font-size", newSize + "px");
//     window.localStorage.setItem("fontSizeUser", newSize);
//   }
// });
// function for fs localStorage
// function holdValFs(e) {
//   let holdFsVal = window.localStorage.getItem("fontSizeUser");
//   $("html").css("font-size", holdFsVal + "px");
//   $(".fs_slider").attr("value", holdFsVal);
// }
// holdValFs();

// Increase/descrease font size
$("#large-font").click(function () {
  curSize = parseInt($("html").css("font-size")) + 1;
  if (curSize <= 8) $("html").css("font-size", curSize);
  window.localStorage.setItem("fontSizeUser", curSize);
});

$("#base-font").click(function () {
  curSize = parseInt($("html").css("font-size"));
  if (curSize != 7) $("html").css("font-size", 7);
  window.localStorage.setItem("fontSizeUser", 7);
});

$("#small-font").click(function () {
  curSize = parseInt($("html").css("font-size")) - 1;
  if (curSize >= 6) $("html").css("font-size", curSize);
  window.localStorage.setItem("fontSizeUser", curSize);
});

// function for fs localStorage
function holdValFs(e) {
  let holdFsVal = window.localStorage.getItem("fontSizeUser");
  $("html").css("font-size", holdFsVal + "px");
}
holdValFs();
