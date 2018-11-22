import { html, render } from './../node_modules/lit-html/lit-html.js';

// A lit-html template uses the `html` template tag:
let sayHello = (name) => html`<h1>Hello ${name}</h1>`;

// It's rendered with the `render()` function:
render(sayHello('World'), document.body);

// And re-renders only update the data that changed, without
// VDOM diffing!

setTimeout(() => {
    render(sayHello('Everyone'), document.body);
}, 1000);