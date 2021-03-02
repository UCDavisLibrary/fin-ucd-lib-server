import { html, css } from 'lit-element';

export function styles() {
  const h2MarginBottom = css`var(--spacing-sm)`;
    return css`
      :host {
        display: block;
        background-color: var(--color-aggie-blue);
        color: var(--color-white);
        font-size: var(--fs-html);
      }
      a {
        color: var(--color-white);
        text-decoration: underline;
      }
      .kt {
        white-space: nowrap;
      }
      .plain {
        text-decoration: none;
      }
      h2 {
        color: var(--color-white);
        margin-bottom: ${h2MarginBottom};
        margin-top: 0;
      }
      #lib-logo {
        margin-bottom: ${h2MarginBottom};
        height: 40px;
        min-height: 40px;
      }
      #section-columns {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: var(--spacing-sm);
      }
      #section-columns > * {
        margin: 0 var(--spacing-default) var(--spacing-default);
        flex-grow: 1;
      }
      ucdlib-site-footer-column ul {
        margin: 0;
        padding: 0;
      }
      ucdlib-site-footer-column li {
        display: block;
        margin-bottom: var(--spacing-default);
        text-transform: lowercase;
      }
      .button {
        margin-top: 15px;
      }
      .button > a {
        display: inline-block !important;
        padding: 8px !important;
        font-weight: var(--fw-bold);
        border: 1px solid white;
        text-decoration: none;
        white-space: normal !important;
      }
      .button > a:hover {
        background: var(--color-a-hover);
      }
      address {
        font-style: normal;
      }
      #below-address {
        margin-top: var(--spacing-default);
      }
      #below-address:empty {
        margin: 0;
      }
      .section-aggie-logo {
        display: flex;
        justify-content: center;
        margin: var(--spacing-md) 0;
      }
      .container-aggie-logo {
        max-width: 100%;
      }
      .campus-info {
        display: flex;
        align-items: center;
        flex-flow: column wrap;
      }
      .campus-info .row {
        margin-bottom: var(--spacing-default);
        display: flex;
      }
      .campus-info a:hover {
        text-decoration: underline;
      }
      .campus-info ul {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
      }
      .campus-info ul li {
        display: inline-block;
      }
      .campus-info ul a.pipe {
        border-right: 1px solid var(--color-aggie-blue-70);
        margin-right: .5rem;
        padding-right: .5rem;
        line-height: .9;
      }
      .campus-info span {
        text-align: center;
      }
    `;
}

export function render() { 
return html`

<div class="container">
  <div id="section-columns">
    <div id="address-column">
      <div class="lib-logo-container">
        <a href="https://library.ucdavis.edu" target="_blank">${this._renderLibraryLogo()}</a>
      </div>
      <address>
        UC Davis Library <br>
        100 NW Quad <br>
        University of California, Davis <br>
        Davis, CA 95616 <br>
        <a href="tel:+1-530-752-8792" class="plain">(530) 752-8792</a><br>
        <br>
        <a href="mailto:library@ucdavis.edu" class="plain">library@ucdavis.edu</a>
      </address>
      <div id="below-address"></div>
    </div>
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