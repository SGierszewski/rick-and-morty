export function createElement(tagName, { children, ...props } = {}) {
  // HTML elements are created; {} = object; ... = rest operator
  const element = document.createElement(tagName); // HTML elements are created
  Object.assign(element, props); // element = target, props (properties) = sources which are applied to the target
  if (children) {
    // if children = true (optional)
    element.append(...children); // append... (spread operator) = inserts a set of DOMstring objetcs after the last child of element
  } // children = array
  return element;
}

export function removeAllChildren(element) {
  element.innerHTML = " ";
}
