import css from "./theme-properties.css"

let styleEle = document.createElement('style');
styleEle.innerHTML = css;
document.head.appendChild(styleEle);