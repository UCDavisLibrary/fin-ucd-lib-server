import ucdCssProps from "./campus-theme-properties.css";
import ucdCss from "./campus-theme.css";
import damsCssProps from "./dams-styles-properties.css";
import damsCss from "./dams-styles.css";

// Insert campus and DAMS style properties
let styleEle = document.createElement('style');
styleEle.innerHTML = ucdCssProps + damsCssProps;
document.head.appendChild(styleEle);

// Insert campus and DAMS style rules
let templateEle = document.createElement('template');
templateEle.innerHTML = `<style>${ucdCss + damsCss}</style>`;
let dmEle = document.createElement('dom-module');
dmEle.id = 'shared-styles';
dmEle.appendChild(templateEle);
document.head.appendChild(dmEle);

/**
 * @function styles
 * @description Include this function in your Lit template to include site styles
 * <style>
 *   ${styles()}
 *   :host {
 *     display: block;
 *   }
 * </style>
 * 
 * @returns Css string
 */
export function styles() {
  return `${ucdCss + damsCss}`;
}

