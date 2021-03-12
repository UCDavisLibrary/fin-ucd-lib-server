import { html } from 'lit-element';
import { sharedStyles } from "../../styles/shared-styles";
import SharedHtml from '../../utils/shared-html';

export default function render() { 
return html`

<style>
  ${sharedStyles}
  :host {
    display: block;
    background-color: var(--color-white);
  }
  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  section {
    padding: var(--spacing-sm);
  }
  section:nth-child(odd) {
    background-color: var(--color-white);
  }
  section:nth-child(even) {
    background-color: var(--color-dams-primary-g4);
  }
  code {
    color: var(--color-dams-primary);
    background-color: var(--color-black-10);
  }
  .collection-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }
</style>

<h1 style="text-align:center;">Dams Site Components</h1>
<p style="text-align:center;">These are site components.</p>

<div class="sections">
  <section>
    <h2>Water Color</h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor</code> element to display raster watercolor images. You can use 
    properties to change the watercolor pattern, color, size, and rotation.
    </p>
    <dams-watercolor></dams-watercolor>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Image</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>img-src</code> attribute to overlay an image on the watercolor.
      In addition to customizing the watercolor, you can adjust the image size and position using element properties.
    </p>
    <dams-watercolor-overlay 
      wc-rotation="30"
      img-position="50% 20%"
      img-src="/images/dev/everest.jpg"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Icon</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>icon</code> attribute to overlay an iron-icon on the watercolor.
    In addition to customizing the watercolor, you can adjust the icon color, size, and position using element properties.
   </p>
    <dams-watercolor-overlay 
      icon="star"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Hero Image</h2>
    ${ SharedHtml.headerDots() }
    <p>Displays a hero image.</p>
    <dams-hero></dams-hero>
  </section>

  <section>
    <h2>Collections Preview Card</h2>
    ${ SharedHtml.headerDots() }
    <p>Use the <code>.collection</code> property to populate the card.</p>
    <div class="collection-cards">
      <dams-collection-card
        href="https://google.com"
        item-ct="1"
        card-title="A Collection">
      </dams-collection-card>
      <dams-collection-card
        href="#"
        item-ct="45" 
        card-title="Pioneering Punjabis"
        img-src="/images/dev/everest.jpg">
      </dams-collection-card>
      <dams-collection-card 
        href="#"
        item-ct="809"
        card-title="Sherry Lehmann"
        img-src="/images/dev/lehmann.jpg">
      </dams-collection-card>
    </div>

  </section>

  <section>
  <h2>Filter Button</h2>
  <p>Attach a listener to activate filter button appearence and can be exited out once attached.</p>
      <app-filter-button><div slot="filter-button-text">Filter1</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter2</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter3</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter4</div></app-filter-button> 
  </section>

  <section>
  <h2>Icon</h2>
  <p>A specific icon for DAMS creation.</p>
  <p>Size Icon for an extra large size with <code>size-icon-svg='extralg' size="extralg"</code></p>
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>
  <app-icons id="option" icon="iron-dashboard" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">All Items</div></app-icons>
  <br />
  <p>Size Icon for a smaller size with <code>size-icon-svg='lg' size="lg"</code></p>
  <app-icons id="option" icon="iron-account-box" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Creators</div></app-icons>
  <app-icons id="option" icon="iron-create" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Formats</div></app-icons>
  </section>

  <section>
  <h2>Navigation Bar</h2>
  <p>Entire Navagation Bar where you can add elements with keyword <code>choices</code>.</p>
  <app-nav-bar choices='[{"text": "Browse"},
                        {"text": "About"},
                        {"text": "FAQ"}]'>
  </app-nav-bar> 
  </section>

  <section>
  <h2>Radio Button</h2>
  <p>Radio button list where you can add elements with keyword <code>choices</code>.</p>
  <p>Radio button list is horizontal but can be made vertical.</p>

  <app-radio-button choices='[{"text": "Title"},
                              {"text": "Recent"},
                              {"text": "Item Quantity"}]'></app-radio-button>
  </section>

  <section>
  <h2>Search Box</h2>
  <app-search-box 
      id="searchBox" 
      @search="${this._onSearch}" 
      placeholder="search">
      <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
    </app-search-box>
  </section>
</div>



`;}
