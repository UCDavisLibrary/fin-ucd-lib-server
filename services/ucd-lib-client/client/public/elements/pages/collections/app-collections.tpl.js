import { html } from 'lit-element';
import sharedStylesCss from "../../styles/shared-styles";
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style>
  :host {
    display: block;
    position: relative;
    background-color: var(--super-light-background-color);
  }

  .text-container {
    margin: 0;
    padding: 2rem 5rem 2rem 5rem ;
  }

  h1, h2 {
    color: var(--default-primary-color);
  }

  h2 {
    margin: 15px 0 0 0px;
  }

  .yellow-line {
    margin: 0 auto 0 0;
    text-align: left;
    width: 50px;
    height: 4px;

    border-color: var(--default-secondary-color);
    background-color: var(--default-secondary-color);
  }
  
  .rasterImage{
    height:100px;
    max-width: 20%;    
    background-color: var(--color-aggie-blue-50);
    margin: 0 auto;
    text-align:center;
  }
  .headerText {
    text-align: center;
    font-size: 2.94rem;
    color: var(--color-aggie-blue);
  }
  fieldset {
    text-align:center;
  }
  .radioMenu {
    text-align:center;
  }
  .icon{
    text-align:center;
  }

  .collection-grid-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: transparent;
    padding: 10px;
  }
  .collection-grid-item {
    padding: 20px;
    font-size: 30px;
  }
  .content {
    background-color:pink;
    margin:20px;
    width:fixed;
    padding: 0px 60px;
    text-align: left;
  }

  ${sharedStylesCss}


</style>

<div class="text-container">  
  <div class=icon>
    <dams-watercolor-overlay 
      icon="star">
    </dams-watercolor-overlay>
  </div>
  <div class="headerText"> Browse <b>Collections</b></div>
  
  <app-radio-button choices='[{"text": "Title"},
                              {"text": "Recent"},
                              {"text": "Item Quantity"}]'></app-radio-button>
  
    <!-- <div class="collection-grid-container">
      <div class="collection-outer">
        <div class="collections" id="collections-home">
          ${this.highlightedCollections.map((item) => 
            html`
            <div class="grid-item">
              <app-collection-card 
                data-id="${item._id}" 
                .collection="${item}" 
                @keyup="${this._onCollectionClicked}"
                @click="${this._onCollectionClicked}">
              </app-collection-card>
            </div>
            `
            )}
        </div>
    </div>
  </div> -->

  <div class="collection-grid-container">
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
  </div>

</div>
`;}