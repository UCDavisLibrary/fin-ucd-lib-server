import { html } from 'lit-element';
import sharedStylesCss from "../../styles/shared-styles";

export default function render() {
return html`

<style>
  :host {
    display: block;
    margin: 15px;
  }
  section {
    padding: 15px;
    margin-bottom: 15px;
    width: 100%;
  }
  
  ${sharedStylesCss}
</style>

<h1 class="text-primary">Site Components</h1>
<p>This is not connected to the main application but a reference for componnents found on the site.
</p>
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


`;}
