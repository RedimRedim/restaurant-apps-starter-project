const template = document.createElement("template");

template.innerHTML = `Made with ❤ by Ant Design Community
    <br>
    Copyright © 2024 - Hunger Apps
`;

export class RestCustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("rest-custom-footer", RestCustomFooter);
