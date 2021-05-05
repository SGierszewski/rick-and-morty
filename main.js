import "./style.css";
import { createElement } from "./utils/elements";
import { createCharacterElement } from "./components/character";
import { getCharacters } from "./utils/api";

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const characterSection = createElement("section", {
  className: "results",
});

const headerElement = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "title",
      innerText: "The Ultimate Rick and Morty Search App",
    }),
    createElement("nav", {
      innerText: "Navigation",
    }),
  ],
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h2", {
      innerText: "Find your favorite Rick and Morty character",
    }),
    characterSection,
  ],
});

const footerElement = createElement("footer", {
  className: "footer",
  children: [
    createElement("p", {
      innerText: "insert footer text here",
    }),
  ],
});

document
  .querySelector("#app")
  .append(headerElement, mainElement, footerElement);
