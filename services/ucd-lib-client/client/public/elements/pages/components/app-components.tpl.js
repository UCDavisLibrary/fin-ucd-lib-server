import { html } from 'lit-element';
import { styles } from "../../styles/shared-styles";
import SharedHtml from '../../utils/shared-html';

export default function render() { 
return html`

<style>
  ${styles()}
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
</style>

<h1>Dams Site Components</h1>
<p>These are site components.</p>

<div class="sections">
  <section>
    <h2>Water Color</h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor</code> element to display raster watercolor images.</p>
    <dams-watercolor></dams-watercolor>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Image</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>img-src</code> attribute to overlay an image on the watercolor.</p>
    <dams-watercolor-overlay 
      wc-rotation="30"
      img-position="50% 20%"
      img-src="/images/dev/everest.jpg"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Icon</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>icon</code> attribute to overlay an iron-icon on the watercolor.</p>
    <dams-watercolor-overlay 
      icon="star"></dams-watercolor-overlay>
  </section>
</div>



`;}