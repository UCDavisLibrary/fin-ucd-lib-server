import { LitElement, CSSResult} from 'lit-element';
// import "/../node_modules/@polymer/iron-dropdown/iron-dropdown";
import render from './button.tpl.js';
import "./icon";

/**
 * @class AppFilterButton
 * @description Styleized UI component for button. Wrapper around polymer's options.
 */
export class AppButton extends LitElement {
  static get properties() {
    return {
      themeColor: {type: String, attribute: 'theme-color'},
      choices: {type: Array},
      buttonType: {type: String, attribute: 'button-type'},
      backgroundColor: {type: CSSResult},
      test: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.choices = [];
    this.themeColor = "outline-primary";
    this.buttonType = '';
    this.backgroundColor_chevron = 'var(--default-secondary-color)';
    
  }

  /**
   * @method firstUpdated
   * @description Lit method called on first element update.
   */
  firstUpdated() {

    this.addEventListener('mouseover', e => {
      console.log(e);
      if (this.buttonType == 'chevron' ) {
        this.shadowRoot.getElementById("chevron-icon").style.visibility = 'visible';
      }
      else if (this.buttonType == 'secondary' ) {
        this.shadowRoot.getElementById("buttonSelector").style.borderColor  = 'var(--color-dams-primary)';
      }
      else {
        this.shadowRoot.getElementById("buttonSelector").style.backgroundColor = 'var(--color-dams-primary)';
        this.shadowRoot.getElementById("buttonSelector").style.color = 'var(--default-secondary-color)';  
      }
    });

    this.addEventListener('mouseleave', e => {
      console.log(e);
      if (this.buttonType == 'chevron' ) {
        this.shadowRoot.getElementById("chevron-icon").style.visibility = "hidden";
      }
      else if (this.buttonType == 'secondary' ) {
        this.shadowRoot.getElementById("buttonSelector").style.borderColor = 'var(--default-secondary-color)';
      }
      else {
        this.shadowRoot.getElementById("buttonSelector").style.backgroundColor = 'var(--default-secondary-color)';
        this.shadowRoot.getElementById("buttonSelector").style.color = 'var(--color-dams-primary)';    
      }  
    });

  }


  /**
   * @method getButtonSize
   * @description return the size of the icon depending on the 
   * assigned sizeIcon
   * @returns {Integer} 
   */
  getButtonStyles(){
    if (this.buttonType == 'chevron' )  {
      return {'padding': '20px 40px 20px 0', 'color': 'var(--color-dams-primary)', 'background-color': 'var(--default-secondary-color)'};
    }
    else if (this.buttonType == 'secondary' ) {
      return {'padding': '17px 20px','color': 'var(--color-dams-primary)', 'background-color':'white', 'border': '3px solid var(--default-secondary-color)'};
    }
    return {'padding': '20px', 'color': 'var(--color-dams-primary)', 'background-color':'var(--default-secondary-color)'};
   

  }


  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};
    if ( this.isBasic ) {
      classes['no-icon'] = true;
    }
    if ( this.themeColor ) {
      classes['color-' + this.themeColor] = true;
    }
    if(this.buttonType){
      classes[this.buttonType] = true;
    }

    return classes;
  }


  /**
   * @method _handleClick
   * @description Attached to list item click if no href present. Dispatches 'new-selection' event.
   * @param {Event} e - click event.
   */
  _handleClick(e){
    let i = e.target.getAttribute('index');
    if (i == this.chosen && !this.stickyTitle) {
      return;
    }

    this.chosen = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(new CustomEvent('new-selection', {
      detail: {
        index: i,
        selected : this.choices[i]
      }
    }));
  }
}

customElements.define('app-button', AppButton);
