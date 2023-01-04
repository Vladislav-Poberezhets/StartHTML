function myFunction() {
  document.getElementById("paragraph").innerHTML = "Нашо ти нажав?";
}

function Button2() {
  alert("Може досить?");
}

$(function () {
  var div = document.getElementsByClassName("text");
  style1 = div.style;

  style1.color = "yellow";
})();

document.getElementsByClassName("text")[0].style.color = "red";

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
