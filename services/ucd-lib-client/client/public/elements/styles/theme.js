import css from "./theme.css"

let templateEle = document.createElement('template');
templateEle.innerHTML = `<style>${css}</style>`;

let dmEle = document.createElement('dom-module');
dmEle.id = 'theme';
dmEle.appendChild(templateEle);

document.head.appendChild(dmEle);