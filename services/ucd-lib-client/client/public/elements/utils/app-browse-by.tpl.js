import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  .header {
    display: flex;
    justify-content : center;
  }

  .sort {
    display: flex;
    align-items: center;
  }

  .body {
    display: flex;
  }

  .results {
    width: 100%;
    box-sizing: border-box;
    max-width: 400px;
  }

  .results > * {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    
  }

  .results > * > *:first-child {
    flex: 1;
  }
</style>

<div class="header">
  <div>
    <div><slot name="header-icon"></slot></div>
    <div>
      <h1>Browse <span>${this.label}s</span></h1>
    </div>

    <div class="sort">
      <div>Sort By:</div> 
      ${this.sortByOptions.map((item, index) => html`
        <div>
          <input type="radio" 
            name="browse-by-${label}" 
            index="${index}" />
          <label for="browse-by-${label}">${item.label}</label> 
        </div>
      `)}
    </div>
  </div>
</div>

<div class="body">
  <div style="flex: 1">

  </div>
  <div class="results">
    <h5>
      <div>${this.label}</div>
      <div>Items</div>
    </h5>
    ${this.results.map(item => html`
      <div>
        <div><a href="${this.getFilterUrl(item)}">${item.key}</a></div>
        <div>${item.count}</div>
      </div>
    `)}
  </div>
  <div style="flex: 1">

  </div>
</div>

<cork-pagination 
  total-results="${this.totalResults}" 
  items-per-page="${this.resultsPerPage}"
  current-index="${this.currentPage}"
  @nav="${this._onPaginationNav}">
</cork-pagination>

`;}