import { html } from 'lit-element';
import UcdlibSiteFooter from "./components/site/ucdlib-site-footer"
import render from "./app-footer-new.tpl.js";


export default class AppFooterNew extends Mixin(UcdlibSiteFooter)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    //this.render = render.bind(this);
  }

}

customElements.define('app-footer-new', AppFooterNew);
