import { html, render } from './../node_modules/lit-html/lit-html.js';

class Clock extends HTMLElement {
    constructor() {
        super();

        this._prerender();
    }

    _prerender() {
        const template = document.createElement('template');

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
        setInterval(this.render.bind(this), 1000);
    }

    render() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        render(this.template({ hours, minutes, seconds }), this.shadowRoot);
    }

    template({ hours, minutes, seconds }) {
        return html`${hours} : ${minutes} : ${seconds}`;
    }
}

window.customElements.define('my-clock', Clock);