import {Navigation} from '../ui/navigation.js';
import $ from 'jquery';
export class ApplicationBase {

    constructor(title) {
        this.title = title;
        this.navagation = new Navigation(this.title);
        this.routeMap = {};
        this.path = '';
    }

    activateRoute() {
        let content = this.navagation.element.find('.content__container');
        if (location.pathname === '/') {
            this.routeMap['Home'].render(content);
        } else if (location.pathname.includes('/product')) {
            this.routeMap['Product'].render(content);
        } else {
            this.routeMap['Search'].render(content);
        }
    }

    addRoute(id, pageObject,  path) {
        this.routeMap[id] = pageObject;

        if(path === '/' || path === '/Home') {
            this.path = '/';
        }
    }

    setNavigationActive() {
        let path = location.pathname.split('=')[1];
        $("."+path).addClass("sidemenu__category__link--active");
    }

    show(element) {
        this.navagation.render(element);

        this.navagation.element.find('.header__search__button').click(() => {
            let search =  this.navagation.element.find('.header__search__input');
            this.navagation.search(search);
        })

        this.navagation.element.find('.menutoggle').click(() => {
            $(".menutoggle").toggleClass( "menutoggle--open" );
            $(".sidemenu").toggleClass( "sidemenu--open" );
        })

        this.activateRoute();
    }
}