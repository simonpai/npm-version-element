import { fetchPackageVersion } from './npm.js';

export default class NpmVersionElement extends HTMLElement {

  static get observedAttributes() {
    return ['package', 'tag', 'format'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  async render() {
    const packageName = this.getAttribute('package') || undefined;
    const tag = this.getAttribute('tag') || undefined;
    const format = this.getAttribute('format') || '$';
    const value = packageName ? await fetchPackageVersion(packageName, { tag }) : '';
    this.innerHTML = format.replace('$', value);
  }

}
