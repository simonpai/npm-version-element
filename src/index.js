import NpmVersionElement from './element.js';

function defineAndUpgrade(tagName, elementClass) {
  customElements.define(tagName, elementClass);
  for (const element of document.querySelectorAll(tagName)) {
    customElements.upgrade(element);
  }
}

defineAndUpgrade('npm-version', NpmVersionElement);
