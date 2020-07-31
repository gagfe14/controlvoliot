class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Fernando García García IC-51.`;
    }
}
customElements.define("mi-footer", MiFooter);