
var btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; ++i) {
  btns[i].addEventListener("click", function () {
    alert("Button");
  });
}
