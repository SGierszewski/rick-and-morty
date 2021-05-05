import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("img", { className: "character-image", src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
