import css from "./campus-brand.css"
import cssProps from "./campus-brand-properties.css"

let styleEle = document.createElement('style');
styleEle.innerHTML = cssProps;
document.head.appendChild(styleEle);

let templateEle = document.createElement('template');
templateEle.innerHTML = `<style>${css}</style>`;

let dmEle = document.createElement('dom-module');
dmEle.id = 'campus-brand';
dmEle.appendChild(templateEle);

document.head.appendChild(dmEle);