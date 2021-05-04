import "./style.css";
import { createElement } from "./utils/elements";

const headerElement = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "title",
      innerText: "The ultimate Rick and Morty Search App",
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
    createElement("input", { placeholder: "Enter character name" }),
    createElement("section", { innerText: "Results" }),
  ],
});

const footerElement = createElement("footer", {
  className: "footer",
  children: [
    createElement("h3", {
      innerText: "insert footer text here",
    }),
  ],
});

document
  .querySelector("#app")
  .append(headerElement, mainElement, footerElement);
