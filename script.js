function switchThemes() {
  document.getElementById("html").classList.toggle("dark-mode");
  document.getElementById("credits").classList.toggle("invert-credits");
  const pics = document.getElementsByClassName("img");
  for (let i = 0; i < pics.length; i++) {
    pics[i].classList.toggle("change-img-border");
  }
}
