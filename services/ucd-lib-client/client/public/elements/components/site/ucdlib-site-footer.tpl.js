import { html } from 'lit-element';

export default function render() { 
return html`

<div class="container">
  <div class="section-columns">
    ${this.numberOfColumns >= 1 ? html`
      <div>
        <h2>${this.colOneHeader}</h2>
        <slot name="one" @slotchange=${this.onSlotchange}></slot>
      </div>
    ` : html``}
    ${this.numberOfColumns >= 2 ? html`
      <div>
        <h2>${this.colTwoHeader}</h2>
        <slot name="two" @slotchange=${this.onSlotchange}></slot>
      </div>
    ` : html``}
    ${this.numberOfColumns >= 3 ? html`
      <div>
        <h2>${this.colThreeHeader}</h2>
        <slot name="three" @slotchange=${this.onSlotchange}></slot>
      </div>
    ` : html``}
    ${this.numberOfColumns >= 4 ? html`
      <div>
        <h2>${this.colFourHeader}</h2>
        <slot name="four" @slotchange=${this.onSlotchange}></slot>
      </div>
    ` : html``}

  </div>
  <div class="section-aggie-logo">
    <div class="container-aggie-logo">
      <a href="https://www.ucdavis.edu">${this._renderAggieLogo()}</a>
    </div>
  </div>
  <div class="section-campus-info">
    ${this._renderCampusInfo()}
  </div>
  
</div>

`;}