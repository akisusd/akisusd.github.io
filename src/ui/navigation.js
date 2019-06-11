import {BaseElement} from './base-element.js';
import {application} from '../app.js';

export class Navigation extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
        this.query = '';
    }

    search(query) {
        location.href="search=" + query[0].value.toLowerCase();
    }

    getElementString() {
        let categories = [];
        let brands = [];
        let cat = '';
        let brand = '';

        for (let product of application.dataService.products) {
            categories.push(product.category[0].taxon.name);
            brands.push(product.category[1].taxon.name);

        }
        categories = Array.from(new Set(categories));
        brands = Array.from(new Set(brands));

        for (let category of categories)
            cat += `<a class="sidemenu__category__link ${category}" href="category=${category}">${category}</a>`

        for (let br of brands)
            brand += `<a class="sidemenu__category__link ${br}" href="brand=${br}">${br}</a>`

        return `
        <div class="page">
            <header class="header">
                <div class="header__logo">
                    <a href="/">
                        <img class="header__logo__img" src="../images/logo.png"/>
                    </a>
                </div>
                <div class="header__search">
                    <input type="search" name="keywords" id="keywords" placeholder="Search" class="header__search__input">
                    <a class="header__search__button" name="submit" id="submit">Search</a>
                </div>
                <div class="menutoggle" role="menuitem" tabIndex="0">
                    <span class="first-line" />
                    <span class="second-line" />
                    <span class="third-line" />
                </div>
            </header>
            <div class="sidemenu">
                <div class="sidemenu__category__label">
                    <h2>Shop by categories</h2>
                </div>
                <div>
                    ${cat}
                </div>
                <div class="sidemenu__category__label">
                    <h2>Shop by brand</h2>
                </div>
                <div>
                    ${brand}
                </div>
            </div>
            <main class="content">
                <div class="content__container"><!-- Your content goes here --></div>
            </main>
        </div>
        `;
    }
}