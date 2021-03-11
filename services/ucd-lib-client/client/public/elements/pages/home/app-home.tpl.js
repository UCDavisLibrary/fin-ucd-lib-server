import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style>
  :host {
    display: block;
    position: relative;
    background: var(--super-light-background-color);

  }

  a {
    text-decoration: none;
  }

  h2 {
    margin: 0px;
  }

  input {
    padding: 15px;
    display: block;
    width: 90%;
    border: 0;
  }

  .about-link-icon {
    position: absolute;
    z-index: 5;    
    top: 25px;
    right: 25px;
  }

  .about-link-icon > iron-icon {
    height: 30px;
    width: 30px;
  }

  #hero {
    height: 750px; /** IE 11 hack **/
    min-height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url('/images/default-home-background.jpg');
    background-size: cover;
    background-position: center;
    
  }

  .gradient {    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .7;
    background-image: url('/images/home-gradient.png');
    background-size: cover;
    background-position: center;
  }

  img {
    position: absolute;
    z-index: 5;
    height: 50px;
    top: 25px;
    left: 25px;    
  }

  .container {    
    padding: 25px 10px;
    background: white;
  }

  .search-box {
    z-index: 5;
    color: var(--inverse-text-color);    
  }

  .search-box .main {
    padding: 20px;
    background-color: rgba(0, 38, 85, .8);    
  }

  .search-box .main h1 {
    margin: 5px 0;
    line-height: 2.0rem;
  }

  .search-box .footer {  
    padding: 10px 20px;
    color: white;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: normal;
    line-height: 1.0rem;
    background-color: rgba(51, 83, 121, .8);
  }

  .search-box .footer a {
    color: var(--default-secondary-color);
  }

  .featured-collections {
    background-color: var(--color-aggie-blue-20);
    padding: var(--spacing-md) 0;
  }

  .featured-collections h1 {
    text-align: center;
    color: var(--color-aggie-blue);
  }

  .featured-collections .card-grid {
    margin: 0 auto;
    padding: 20px 0;
  }

  .card-grid {
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }


  iron-icon.search-icon {
    color: var(--default-primary-color);
  }

  iron-icon.info {
    fill: white;
  }

  #sample {
    background: linear-gradient(0deg, rgba(111,207,235,0.8), rgba(2, 40, 81, 0.8) 100%);
    background-size: cover;
    background-position: center;
    height: 500px;
    padding:2rem 4rem;

  }

  #options {
    height: 150px;
    background-color:white;
    width: 100%;
    padding: 2rem 4rem;
    vertical-align: middle;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;



  }

  #option{
    display: inline-block;
  }

  #top-header{
    display: inline-block;
    width: 100%;
  }
  span {
    color:var(--color-aggie-gold);
  }

  #subtext{
    color:white;
    text-decoration: underline;
  }
  #watercolor{
    background-color:red;
    height: 8rem;
    margin-left:0px;
  }
  h1{
    margin-top: 4rem;
    margin-bottom: 1rem; 
    color:white;
    font-size: 2.94rem;
  }
  h4{
    margin-top: .5rem; 
    margin-bottom: 2.5rem; 
    color:white; 
    font-weight: normal;
    font-size: 1.68rem;

  }


</style>

<div id="sample">
  <div id="top-header">  
    <img style="all:unset; height: 1.5rem;" src="/images/ucd-lib-logo-white.png">
    <p style="all:unset; float:right; color:white;font-size: 1.45rem; float:right">About <span>&#9679;</span> FAQ</p>
  </div>

  <h1 >Digital Collections</h1>
  <h4 >Explore digitized items from the <a style="text-decoration:underline;color:var(--color-aggie-gold);">UC Davis Library</a> collections.</h4>

  <app-search-box 
    id="searchBox" 
    @search="${this._onSearch}" 
    placeholder="search">
    <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
  </app-search-box>

  <div style="color:white; margin-top:.75rem; margin-bottom: 2rem; font-size:.75rem;font-weight: 800;">
    Featured Image:  <a id="subtext">Annual Winter Sale 1952</a>  |  <a id="subtext">Sherry Lehmann Wine Catalogs</a>
  </div>
</div>
<div id="options">
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>
  
  <a href="/search">
    <app-icons id="option" 
      icon="iron-dashboard" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">All Items</div>
    </app-icons>
  </a>
  
  <a href="/browse/creator">
    <app-icons id="option" 
      icon="iron-account-box" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Creators</div>
    </app-icons>
  </a>

  <a href="/browse/format">
    <app-icons id="option" 
      icon="iron-create" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Formats</div>
    </app-icons>
  </a>

  <a href="/browse/subject">
    <app-icons id="option" 
      icon="fin-search" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Subjects</div>
    </app-icons>
  </a>

</div>


<div class="featured-collections">
  <h1>Featured Collections</h1>
  <div class="card-grid">
    ${this.highlightedCollections.map((collection) => 
      html`
      <dams-collection-card .collection="${collection}"></dams-collection-card>

      `
      )}
  </div>
</div>
`;}