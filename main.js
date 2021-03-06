import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { createCharacterElement } from "./components/character";
import { getCharacters } from "./utils/api";
import { debounce } from "./utils/timer";

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
    createElement("input", {
      className: "input",
      placeholder: "Search character",
      autofocus: true, //input field is focused after each page reload
      oninput: debounce((event) => {
        // oninput = input event for every keystroke
        removeAllChildren(characterSection); //remove children afetr each input to hinder the search results from stacking

        const search = event.target.value; //event.target = self-reference to input field; value = TEXT input
        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSection.append(...characterElements);
        });
      }, 300), // duration of 300ms is good practice
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
