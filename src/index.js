import "./style.css";

let largeSize = document.getElementById("size-toggle");
largeSize.addEventListener("change", function () {
  changeTypeSize(largeSize.checked);
});

function changeTypeSize(large) {
  if (large) {
    document.body.style["font-size"] = "2em";
  } else {
    document.body.style["font-size"] = "1em";
  }
}
