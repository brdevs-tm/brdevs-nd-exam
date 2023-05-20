window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
}