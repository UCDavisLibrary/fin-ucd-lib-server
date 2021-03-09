import { html } from 'lit-element';
import { styles } from "../../styles/shared-styles";

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
    margin-bottom: var(--spacing-default);
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
</style>

<h1>Dams Site Components</h1>
<p>These are site components.</p>

<div class="sections">
  <section>
    <h2>Water Color</h2>
    <dams-watercolor></dams-watercolor>
  </section>

  <section>
    <h2>Water Color with Image</h2>
    <dams-watercolor-overlay 
      wc-rotation="30"
      img-position="50% 20%"
      img-src="/images/dev/everest.jpg"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Water Color with Icon</h2>
    <dams-watercolor-overlay 
      icon="star"></dams-watercolor-overlay>
  </section>
</div>



`;}