import {BaseElement} from './base-element.js';

export class ProductElement extends BaseElement {

    constructor( name, price, description) {
        super();
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getElementString() {
        return `<div class="product">
                    <a class="product__link" href="product?name=${this.name}">
                        <img class="product__img" src="../../images/sample.jpg"/>
                        <div class="product__name" class"product-name"> ${this.name}</div>
                        <div class="product__price" class"product-price"> ${this.price} $</div>
                        <div class="product__description" class"product-description"> ${this.description}</div>
                    </a>
                </div>`;
    }
}