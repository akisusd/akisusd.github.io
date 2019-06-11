import $ from 'jquery';

export class BaseElement {

    constructor() {
        this.element = null;
    }

    render(el) {
        this.createElement();
        el.append(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please ovveride getElementString() and BaseElement';
    }
}