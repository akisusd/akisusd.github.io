import {Page} from './framework/page.js';
import {application} from './app.js';
import {ProductElement} from './ui/product-element.js'

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        for (let product of application.dataService.products) {
            let p =  new ProductElement(product.name, product.price, product.description);
            p.render(this.element);
        }
    }

    getElementString() {
        return `<div class="grid__container"></div>`;
    }
}