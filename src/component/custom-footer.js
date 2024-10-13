const template = document.createElement("template");

template.innerHTML = `
<style>
footer {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.65);
  padding: 1em;
  background-color: rgb(240, 243, 250);
  line-height: 2em;
  text-align: center;
}
</style>
<footer>Made with ❤ by Ant Design Community
    <br>
    Copyright © 2024 - Hunger Apps
  </footer>
`;

export class RestCustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("rest-custom-footer", RestCustomFooter);
