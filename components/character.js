import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({
  imgSrc,
  name,
  status,
  species,
  origin,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("img", { src: imgSrc }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
