import { html, render } from '../node_modules/lit-html/lit-html.js';
import { Component } from './decorators.js';

@Component
class Clock extends HTMLElement {
    private hours: Number = 0;
    private minutes: Number = 0;
    private seconds: Number = 0;

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

        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();

        render(this.template(), this.shadowRoot);
    }

    template() {
        return html`${this.hours} : ${this.minutes} : ${this.seconds}`;
    }
}

window.customElements.define('my-clock', Clock);