import {Product} from '../classes/product.js';
import {DataError} from './data-error.js';

export class DataService {

    constructor() {
        this.products = [];
        this.errors = [];
    }

    loadData(product) {
        for (let data of product) {
            if (this.validateProductData(data)) {
                let product = this.loadProduct(data);
                if (product)
                    this.products.push(product);
            }
            else {
                let e = new DataError('invalid product data', data);
                this.errors.push(e);
            }
        }
    }

    loadProduct(product) {
        try {
            let p = new Product(product.name, product.price, product.description, product.classifications);
            return p;
        } catch(e) {
            this.errors.push(new DataError('error loading product', p))
        }
        return null;
    }

    validateProductData(product) {
        let requiredProps = 'name price description'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps) {
            if (!product[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, product));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }

}