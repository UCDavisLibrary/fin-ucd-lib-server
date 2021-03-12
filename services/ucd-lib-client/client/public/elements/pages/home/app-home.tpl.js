import { html } from 'lit-element';
import { styles } from "../../styles/shared-styles";

import SharedHtml from '../../utils/shared-html';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style>
  ${styles()}

  :host {
    display: block;
    position: relative;
    background: var(--super-light-background-color);

  }

  a {
    text-decoration: none;
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

  .collection-outer {
    display: flex;
    justify-content: center;
  }

  .collections {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    max-width: var(--max-width);    
    border-bottom: 1px solid var(--light-background-color);
  }

  .collections > div:hover {
    cursor: pointer;
    margin: 13px;
    border: 2px solid var(--default-primary-color);
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
    height: auto;
    padding:2rem 4rem 0 4rem;

  }

  #options {
    height: 150px;
    background-color:white;
    width: auto;
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
    background-color:transparent;
    height: 8rem;
    margin-left:0px;
  }
  .recent{
    text-align: center;
    background-color: var(--color-white);
  }
  .featured{
    margin: 0;
    text-align: center;
    background-color: var(--color-aggie-blue-20);
  }
  .about{
    text-align: center;
    background-color: var(--color-aggie-blue-40);
  }
  section {
    padding: 40px;
  }
  
  .featured-grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: transparent;
    padding: 10px;
  }
  .featured-grid-item {
    padding: 20px;
    font-size: 30px;
    text-align:left;
    
  }
  .about-grid-container {
    display: grid;
    grid-template-columns: 55% 45%;
    background-color: transparent;
    padding: 10px;
  }
  .about-grid-item {
    padding: 20px;
    font-size: 30px;
    
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



</style>

<div id="sample">
  <div id="top-header">  
    <img style="all:unset; height: 1.5rem; " src="/images/ucd-lib-logo-white.png">
    <p style="all:unset; float:right; color:white; font-weight:var(--fw-extra-bold); float:right">About <span>&#9679;</span> FAQ</p>
  </div>

  <h1 style="color:var(--color-h1-light); margin-top:4rem; margin-bottom:1rem;" >Digital Collections</h1>
  <h4 style="color:var(--color-h4-light); font-weight:var(--fw-regular); margin-top:0;" >Explore digitized items from the <a style="text-decoration:underline;color:var(--color-aggie-gold);">UC Davis Library</a> collections.</h4>

  <app-search-box 
    id="searchBox" 
    @search="${this._onSearch}" 
    placeholder="search">
    <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
  </app-search-box>

  <div style="color:white; margin-top:.75rem; margin-bottom: 2rem; font-size:.75rem;font-weight: 800;">
    Featured Image:  <a id="subtext">Annual Winter Sale 1952</a>  |  <a id="subtext">Sherry Lehmann Wine Catalogs</a>
  </div>
  <div id="watercolor"></div>
</div>
<div id="options">
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>
  <app-icons id="option" icon="iron-dashboard" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">All Items</div></app-icons>
  <app-icons id="option" icon="iron-account-box" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Creators</div></app-icons>
  <app-icons id="option" icon="iron-create" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Formats</div></app-icons>
  <app-icons id="option" icon="fin-search" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Subjects</div></app-icons>
</div>

<section class="recent">
  <h2 style="margin-bottom:0;">Recently Digitized</h2> 
  <h2 style="margin-bottom:0; margin-top:0; font-weight:var(--fw-regular)">Collections</h2>
  ${ SharedHtml.headerDots() }
  <div class="collection-grid-container">
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
  </div>

</section>

<section class="featured">
  <h1 style="margin-bottom:0;">Featured Collections</h1>
  <dams-watercolor-overlay 
      icon="star">
  </dams-watercolor-overlay>
  
  <div class="featured-grid-container">
    <div class="featured-grid-item"><h3>The Greatest <br/> Wine Library</h3>

    </div>
    <div class="featured-grid-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam suscipit interdum dolor, vitae mattis odio convallis 
                                    vitae. Etiam erat arcu, condimentum sed sagittis id, malesuada 
                                    sit amet libero. Nullam blandit mollis commodo. Nunc in 
                                    ipsum vitae felis venenatis tristique. Donec id orci id purus 
                                    bibendum auctor. Etiam porta mi ut sem finibus, nec pellentesque 
                                    erat ultrices. Fusce et massa nec turpis pretium convallis sed ut 
                                    mi. Curabitur in dolor non justo volutpat sagittis ac ut quam.</p>
    </div>

  </div>

  <div class="collection-grid-container">
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
    <!-- <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>  -->
  </div>
</section>

<section class="about">
  <div class="about-grid-container">
    <div class="grid-item">
      <div class="content">
      </div>
    </div>
    <div class="grid-item">
      <div class="content"> 
        <h2 style="margin:0; ">About</h2>
        <h1 style="margin:0; font-weight:var(--fw-regular)">Digital Collections</h1>
        <div style="height:10px;float:left;">${ SharedHtml.headerDots() }         </div>
        <br />
        <br />

        <p style="margin:0; ">The UC Davis Digital Collections is a locally developed digital 
                              repository that was designed to store and manage the digital assets
                              of UC Davis.  These Digital Collections are intended to increase 
                              access to previously undiscoverable digital assets held by the 
                              University Library. </p>

      </div>
    </div>
  </div>
</section>



`;}