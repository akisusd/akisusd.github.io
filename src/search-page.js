import {Page} from './framework/page.js';
import {application} from './app.js';
import {ProductElement} from './ui/product-element.js'

export class SearchPage extends Page {

    constructor() {
        super('Search');
    }

    createElement() {
        super.createElement();
        let query = '';
        location.pathname.includes('search') ?
            query = 'name':
            location.pathname.includes('category') ?
                query = 'category[0].taxon.name' :
                query = 'category[1].taxon.name'
        let search = location.pathname.split('=')[1];
        for (let product of application.dataService.products) {
            let item = _.get(product, query);
            if ((item === search && query != 'name') || (item.toLowerCase().includes(search) && query === 'name')) {
                let p =  new ProductElement(product.name, product.price, product.description);
                p.render(this.element);
            }
        }
    }

    getElementString() {
        return '<div class="grid__container"></div>';
    }
}