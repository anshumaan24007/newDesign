document.addEventListener("DOMContentLoaded", function onAccordianClick() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display == "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
function scrollDown() {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
}
function toggleArticle() {
  if (
    document.getElementById("span").style.display == "inline" ||
    document.getElementById("span").style.display == ""
  ) {
    document.getElementById("displayText").style.display = "none";
    document.getElementById("hiddenText").style.display = "inline";
    document.getElementById("span1").style.display = "inline";
    document.getElementById("span").style.display = "none";
  } else {
    document.getElementById("displayText").style.display = "inline";
    document.getElementById("hiddenText").style.display = "none";
    document.getElementById("span1").style.display = "none";
    document.getElementById("span").style.display = "inline";
  }
}
