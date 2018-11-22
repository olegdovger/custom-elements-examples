var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { Component } from './decorators.js';
let Clock = class Clock extends HTMLElement {
    constructor() {
        super();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this._prerender();
    }
    _prerender() {
        const template = document.createElement('template');
        this.attachShadow({ mode: 'open' });
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
        return html `${this.hours} : ${this.minutes} : ${this.seconds}`;
    }
};
Clock = __decorate([
    Component
], Clock);
window.customElements.define('my-clock', Clock);
