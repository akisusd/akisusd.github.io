import {Page} from './framework/page.js';
import {application} from './app.js';
import {ProductElement} from './ui/product-element.js';

export class ProductsPage extends Page {

    constructor() {
        super('Product');
    }

    createElement() {
        super.createElement();
        let name = decodeURIComponent(location.search.split('=')[1]);
        for (let product of application.dataService.products) {
            if (product.name === name) {
                let p =  new ProductElement(product.name, product.price, product.description);
                p.render(this.element);
            }
        }
    }

    getElementString() {
        return '<div class="grid__container"></div>'
    }
}