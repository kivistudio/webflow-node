import _ from "lodash";

import "./style.css";
import Icon from "./logo.svg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "colours"], " ");
  element.classList.add("kivi-red");

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("logo");
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
