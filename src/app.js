import $ from 'jquery';
import {ApplicationBase} from './framework/application-base.js';
import {product} from './product-data.js';
import {DataService} from './services/data-service.js';
import {HomePage} from './home-page.js';
import {ProductsPage} from './product-page.js';
import {SearchPage} from './search-page.js';

export class App extends ApplicationBase {

    constructor() {
        super('Product Manager');
        this.dataService = new DataService();
        this.dataService.loadData(product);

        this.addRoute('Home', new HomePage(), '/');
        this.addRoute('Product', new ProductsPage(), '/product');
        this.addRoute('Search', new SearchPage(), '/search');
    }
}

export let application = new App();
application.show($('body'));
application.setNavigationActive();