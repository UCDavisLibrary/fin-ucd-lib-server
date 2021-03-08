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
</style>

<h1>Dams Site Components</h1>
<p>These are site components.</p>
<section>
  <h2>Water Color</h2>
  <dams-watercolor></dams-watercolor>
</section>

`;}