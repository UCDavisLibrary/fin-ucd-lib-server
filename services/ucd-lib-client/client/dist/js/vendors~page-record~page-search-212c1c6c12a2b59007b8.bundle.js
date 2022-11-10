(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(t,e,n){"use strict";n.d(e,"b",(function(){return h.d})),n.d(e,"a",(function(){return T}));var r=n(134),i=n(132);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=133;function s(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,a,null,!1);let s=l(r),o=r[s],c=-1,u=0;const p=[];let h=null;for(;i.nextNode();){c++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(p.push(t),null===h&&(h=t)),null!==h&&u++;void 0!==o&&o.index===c;)o.index=null!==h?-1:o.index-u,s=l(r,s),o=r[s]}p.forEach(t=>t.parentNode.removeChild(t))}const o=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,a,null,!1);for(;n.nextNode();)e++;return e},l=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(i.d)(e))return n}return-1};var c=n(137),u=n(136),p=n(140),h=n(133);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=(t,e)=>`${t}--${e}`;let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),f=!1);const g=t=>e=>{const n=d(e.type,t);let r=u.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,r));let a=r.stringsArray.get(e.strings);if(void 0!==a)return a;const s=e.strings.join(i.f);if(a=r.keyString.get(s),void 0===a){const n=e.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(n,t),a=new i.a(e,n),r.keyString.set(s,a)}return r.stringsArray.set(e.strings,a),a},m=["html","svg"],_=new Set,b=(t,e,n)=>{_.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:c}=i;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(r,t);const p=document.createElement("style");for(let t=0;t<c;t++){const e=i[t];e.parentNode.removeChild(e),p.textContent+=e.textContent}(t=>{m.forEach(e=>{const n=u.a.get(d(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),s(t,n)})})})(t);const h=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const s=document.createTreeWalker(r,a,null,!1);let c=l(i),u=0,p=-1;for(;s.nextNode();){for(p++,s.currentNode===n&&(u=o(e),n.parentNode.insertBefore(e,n));-1!==c&&i[c].index===p;){if(u>0){for(;-1!==c;)i[c].index+=u,c=l(i,c);return}c=l(i,c)}}}(n,p,h.firstChild):h.insertBefore(p,h.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const f=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==f)e.insertBefore(f.cloneNode(!0),e.firstChild);else if(n){h.insertBefore(p,h.firstChild);const t=new Set;t.add(p),s(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},v=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},k=1,S=4,x=8,C=16,A="finalized";class N extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||w}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(A)||t.finalize(),this[A]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=v){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||y,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||y.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=w){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|x,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~x}}_attributeToProperty(t,e){if(this._updateState&x)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=this._updateState|C,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~C}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,i=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&C||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|S;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&S}get hasUpdated(){return this._updateState&k}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(this._updateState&k||(this._updateState=this._updateState|k,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~S}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}N[A]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const E="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const P={};class T extends N{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?E?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==P&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return P}}T.finalized=!0,T.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,a=c.a.has(e),s=f&&11===e.nodeType&&!!e.host,o=s&&!_.has(i),l=o?document.createDocumentFragment():e;if(Object(c.b)(t,l,Object.assign({templateFactory:g(i)},n)),o){const t=c.a.get(l);c.a.delete(l);const n=t.value instanceof p.a?t.value.template:void 0;b(i,l,n),Object(r.b)(e,e.firstChild),e.appendChild(l),c.a.set(e,t)}!a&&s&&window.ShadyCSS.styleElement(e.host)}},130:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return g})),n.d(e,"c",(function(){return b}));var r=n(138),i=n(134),a=n(139),s=n(140),o=n(135),l=n(132);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const c=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class p{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new h(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(c(t)||!u(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a.a||c(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=a.a,t(this)}this.value!==a.a&&this.committer.commit()}}class d{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(l.c)()),this.endNode=t.appendChild(Object(l.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(l.c)()),t.__insert(this.endNode=Object(l.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(l.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}const t=this.__pendingValue;t!==a.a&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof o.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===a.b?(this.value=a.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.a&&this.value.template===e)this.value.update(t.values);else{const n=new s.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new d(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a.a}}class g extends p{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends h{}let _=!1;(()=>{try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class b{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a.a,t(this)}if(this.__pendingValue===a.a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},132:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return p}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${i}`),s="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,d=0;const{strings:f,values:{length:g}}=t;for(;d<g;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)l(e[t].name,s)&&r++;for(;r-- >0;){const e=f[d],n=p.exec(e)[2],r=n.toLowerCase()+s,i=t.getAttribute(r);t.removeAttribute(r);const o=i.split(a);this.parts.push({type:"attribute",index:h,name:n,strings:o}),d+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,i=e.split(a),o=i.length-1;for(let e=0;e<o;e++){let n,a=i[e];if(""===a)n=u();else{const t=p.exec(a);null!==t&&l(t[2],s)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-s.length)+t[3]),n=document.createTextNode(a)}r.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===i[o]?(r.insertBefore(u(),t),n.push(t)):t.data=i[o],d+=o}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(u(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const l=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,u=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},133:function(t,e,n){"use strict";n.d(e,"c",(function(){return s.a})),n.d(e,"e",(function(){return o.b})),n.d(e,"f",(function(){return o.c})),n.d(e,"a",(function(){return r.d})),n.d(e,"b",(function(){return l.c})),n.d(e,"d",(function(){return c}));var r=n(130);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(t,e,n,i){const a=e[0];if("."===a){return new r.e(t,e.slice(1),n).parts}return"@"===a?[new r.c(t,e.slice(1),i.eventContext)]:"?"===a?[new r.b(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.d(t)}};var a=n(135),s=n(138),o=n(134),l=(n(139),n(137),n(136),n(140),n(132));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const c=(t,...e)=>new a.b(t,e,"html",i)},134:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,r=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,r),e=n}},a=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},135:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(134),i=n(132);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=` ${i.f} `;class s{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const o=i.e.exec(t);e+=null===o?t+(n?a:i.g):t.substr(0,o.index)+o[1]+o[2]+i.b+o[3]+i.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},136:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(132);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=a.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},a.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r.f);return n=e.keyString.get(i),void 0===n&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const a=new Map},137:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n(134),i=n(130),a=n(136);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,o=(t,e,n)=>{let o=s.get(e);void 0===o&&(Object(r.b)(e,e.firstChild),s.set(e,o=new i.d(Object.assign({templateFactory:a.b},n))),o.appendInto(e)),o.setValue(t),o.commit()}},138:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,i=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},a=t=>"function"==typeof t&&r.has(t)},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},i={}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(134),i=n(132);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class a{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,a=document.createTreeWalker(t,133,null,!1);let s,o=0,l=0,c=a.nextNode();for(;o<n.length;)if(s=n[o],Object(i.d)(s)){for(;l<s.index;)l++,"TEMPLATE"===c.nodeName&&(e.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=e.pop(),c=a.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},141:function(t,e,n){"use strict";n(7),n(73),n(163);var r=n(9),i=n(5);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(t,e){return[t||e?"active":"",e?"cooldown":""].join(" ")},__activeChanged:function(t,e){this.__setAriaHidden(!t),this.__coolingDown=!t&&e},__altChanged:function(t){"loading"===t?this.alt=this.getAttribute("aria-label")||t:(this.__setAriaHidden(""===t),this.setAttribute("aria-label",t))},__setAriaHidden:function(t){t?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")},__reset:function(){this.active=!1,this.__coolingDown=!1}},s=i.a`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>
  </div>
`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/s.setAttribute("strip-whitespace",""),Object(r.a)({_template:s,is:"paper-spinner-lite",behaviors:[a]})},143:function(t,e,n){"use strict";n(7),n(41),n(70);var r=n(144),i=n(9);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a=n(5).a`
<dom-module id="paper-icon-button">
  <template strip-whitespace>
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]" alt\$="[[alt]]"></iron-icon>
  </template>
</dom-module>
`;a.setAttribute("style","display: none;"),document.body.appendChild(a.content),Object(i.a)({is:"paper-icon-button",hostAttributes:{role:"button",tabindex:"0"},behaviors:[r.a],properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var n=this.getAttribute("aria-label");n&&e!=n||this.setAttribute("aria-label",t)}})},144:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));n(7);var r=n(25),i=n(42),a=n(53);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const s={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=a.a._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},o=[r.a,i.a,a.a,s]},154:function(t,e,n){e.markdown=n(176),e.parse=e.markdown.toHTML},155:function(t,e,n){"use strict";var r;!function(i){if("function"!=typeof a){var a=function(t){return t};a.nonNative=!0}const s=a("plaintext"),o=a("html"),l=a("comment"),c=/<(\w*)>/g,u=/<\/?([^\s\/>]+)/;function p(t,e,n){return d(t=t||"",h(e=e||[],n=n||""))}function h(t,e){return{allowable_tags:t=function(t){let e=new Set;if("string"==typeof t){let n;for(;n=c.exec(t);)e.add(n[1])}else a.nonNative||"function"!=typeof t[a.iterator]?"function"==typeof t.forEach&&t.forEach(e.add,e):e=new Set(t);return e}(t),tag_replacement:e,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function d(t,e){let n=e.allowable_tags,r=e.tag_replacement,i=e.state,a=e.tag_buffer,c=e.depth,u=e.in_quote_char,p="";for(let e=0,h=t.length;e<h;e++){let h=t[e];if(i===s)switch(h){case"<":i=o,a+=h;break;default:p+=h}else if(i===o)switch(h){case"<":if(u)break;c++;break;case">":if(u)break;if(c){c--;break}u="",i=s,a+=">",n.has(f(a))?p+=a:p+=r,a="";break;case'"':case"'":u=h===u?"":u||h,a+=h;break;case"-":"<!-"===a&&(i=l),a+=h;break;case" ":case"\n":if("<"===a){i=s,p+="< ",a="";break}a+=h;break;default:a+=h}else if(i===l)switch(h){case">":"--"==a.slice(-2)&&(i=s),a="";break;default:a+=h}}return e.state=i,e.tag_buffer=a,e.depth=c,e.in_quote_char=u,p}function f(t){let e=u.exec(t);return e?e[1].toLowerCase():null}p.init_streaming_mode=function(t,e){let n=h(t=t||[],e=e||"");return function(t){return d(t||"",n)}},void 0===(r=function(){return p}.call(e,n,e,t))||(t.exports=r)}()},163:function(t,e){
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n=document.createElement("template");n.setAttribute("style","display: none;"),n.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper::after {\n        content: '';\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper::after {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left::after {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right::after {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper::after {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left::after {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right::after {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(n.content)},176:function(t,e,n){!function(t){var e=t.Markdown=function(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=t;break;default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'");this.dialect=e.dialects[t]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var t=n(82);return"Markdown.mk_block( "+t.inspect(this.toString())+", "+t.inspect(this.trailing)+", "+t.inspect(this.lineNumber)+" )"}t.parse=function(t,n){return new e(n).toTree(t)},t.toHTML=function(e,n,r){var i=t.toHTMLTree(e,n,r);return t.renderJsonML(i)},t.toHTMLTree=function(t,e,n){"string"==typeof t&&(t=this.parse(t,e));var r=d(t),i={};r&&r.references&&(i=r.references);var a=function t(e,n,r){var i;r=r||{};var a=e.slice(0);"function"==typeof r.preprocessTreeNode&&(a=r.preprocessTreeNode(a,n));var s=d(a);if(s){for(i in a[1]={},s)a[1][i]=s[i];s=a[1]}if("string"==typeof a)return a;switch(a[0]){case"header":a[0]="h"+a[1].level,delete a[1].level;break;case"bulletlist":a[0]="ul";break;case"numberlist":a[0]="ol";break;case"listitem":a[0]="li";break;case"para":a[0]="p";break;case"markdown":a[0]="html",s&&delete s.references;break;case"code_block":a[0]="pre",i=s?2:1;var o=["code"];o.push.apply(o,a.splice(i,a.length-i)),a[i]=o;break;case"inlinecode":a[0]="code";break;case"img":a[1].src=a[1].href,delete a[1].href;break;case"linebreak":a[0]="br";break;case"link":a[0]="a";break;case"link_ref":if(a[0]="a",!(l=n[s.ref]))return s.original;delete s.ref,s.href=l.href,l.title&&(s.title=l.title),delete s.original;break;case"img_ref":var l;if(a[0]="img",!(l=n[s.ref]))return s.original;delete s.ref,s.src=l.href,l.title&&(s.title=l.title),delete s.original}if(i=1,s){for(var c in a[1]){i=2;break}1===i&&a.splice(i,1)}for(;i<a.length;++i)a[i]=t(a[i],n,r);return a}(t,i,n);return function t(e){var n=d(e)?2:1;for(;n<e.length;)"string"==typeof e[n]?n+1<e.length&&"string"==typeof e[n+1]?e[n]+=e.splice(n+1,1)[0]:++n:(t(e[n]),++n)}(a),a};var s=e.mk_block=function(t,e,n){1==arguments.length&&(e="\n\n");var a=new String(t);return a.trailing=e,a.inspect=i,a.toSource=r,null!=n&&(a.lineNumber=n),a};function o(t){for(var e=0,n=-1;-1!==(n=t.indexOf("\n",n+1));)e++;return e}function l(t,e){var n=t+"_state",r="strong"==t?"em_state":"strong_state";function i(t){this.len_after=t,this.name="close_"+e}return function(a,s){if(this[n][0]==e)return this[n].shift(),[a.length,new i(a.length-e.length)];var o=this[r].slice(),l=this[n].slice();this[n].unshift(e);var c=this.processInline(a.substr(e.length)),u=c[c.length-1];this[n].shift();return u instanceof i?(c.pop(),[a.length-u.len_after,[t].concat(c)]):(this[r]=o,this[n]=l,[e.length,e])}}e.prototype.split_blocks=function(t,e){t=t.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],a=1;for(null!=(n=/^(\s*\n)/.exec(t))&&(a+=o(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(t));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(s(n[1],n[2],a)),a+=o(n[0]);return i},e.prototype.processBlock=function(t,e){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,t,e);for(var i=0;i<r.length;i++){var a=n[r[i]].call(this,t,e);if(a)return(!u(a)||a.length>0&&!u(a[0]))&&this.debug(r[i],"didn't return a proper array"),a}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,e){var n=t instanceof Array?t:this.split_blocks(t),r=this.tree;try{for(this.tree=e||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{e&&(this.tree=r)}},e.prototype.debug=function(){var t=Array.prototype.slice.call(arguments);t.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,t),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,t)},e.prototype.loop_re_over_block=function(t,e,n){for(var r,i=e.valueOf();i.length&&null!=(r=t.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,e){var n=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<t.length&&e.unshift(s(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[r]}},setextHeader:function(t,e){var n=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<t.length&&e.unshift(s(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[r]}},code:function(t,e){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(t.match(r)){t:for(;;){var i=this.loop_re_over_block(r,t.valueOf(),(function(t){n.push(t[1])}));if(i.length){e.unshift(s(i,t.trailing));break t}if(!e.length)break t;if(!e[0].match(r))break t;n.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=e.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(t,e){var n=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&e.unshift(s(n[3])),r}},lists:function(){var t="[*+-]|\\d+\\.",e=/[*+-]/,n=new RegExp("^( {0,3})("+t+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(t,e,n,r){if(e)t.push(["para"].concat(n));else{var i=t[t.length-1]instanceof Array&&"para"==t[t.length-1][0]?t[t.length-1]:t;r&&t.length>1&&n.unshift(r);for(var a=0;a<n.length;a++){var s=n[a];"string"==typeof s&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=s:i.push(s)}}}function a(t,e){for(var n=new RegExp("^("+r+"{"+t+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+t+"}","gm"),a=[];e.length>0&&n.exec(e[0]);){var o=e.shift(),l=o.replace(i,"");a.push(s(l,o.trailing,o.lineNumber))}return a}function o(t,e,n){var r=t.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(e+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var a=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),a)}}return function(s,l){var u=s.match(n);if(u){for(var p,h,d,f=[],g=P(u),m=!1,_=[f[0].list];;){for(var b=s.split(/(?=\n)/),y="",v=0;v<b.length;v++){var w="",k=b[v].replace(/^\n/,(function(t){return w=t,""})),S=(d=f.length,new RegExp("(?:^("+r+"{0,"+d+"} {0,3})("+t+")\\s+)|(^"+r+"{0,"+(d-1)+"}[ ]{0,4})"));if(void 0!==(u=k.match(S))[1]){y.length&&(i(p,m,this.processInline(y),w),m=!1,y=""),u[1]=u[1].replace(/ {0,3}\t/g,"    ");var x=Math.floor(u[1].length/4)+1;if(x>f.length)g=P(u),p.push(g),p=g[1]=["listitem"];else{var C=!1;for(h=0;h<f.length;h++)if(f[h].indent==u[1]){g=f[h].list,f.splice(h+1,f.length-(h+1)),C=!0;break}C||(++x<=f.length?(f.splice(x,f.length-x),g=f[x-1].list):(g=P(u),p.push(g))),p=["listitem"],g.push(p)}w=""}k.length>u[0].length&&(y+=w+k.substr(u[0].length))}y.length&&(i(p,m,this.processInline(y),w),m=!1,y="");var A=a(f.length,l);A.length>0&&(c(f,o,this),p.push.apply(p,this.toTree(A,[])));var N=l[0]&&l[0].valueOf()||"";if(!N.match(n)&&!N.match(/^ /))break;s=l.shift();var E=this.dialect.block.horizRule(s,l);if(E){_.push.apply(_,E);break}c(f,o,this),m=!0}return _}function P(t){var n=e.exec(t[2])?["bulletlist"]:["numberlist"];return f.push({list:n,indent:t[1]}),n}}}(),blockquote:function(t,e){if(t.match(/^>/m)){var n=[];if(">"!=t[0]){for(var r=t.split(/\n/),i=[],a=t.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),a++;var o=s(i.join("\n"),"\n",t.lineNumber);n.push.apply(n,this.processBlock(o,[])),t=s(r.join("\n"),t.trailing,a)}for(;e.length&&">"==e[0][0];){var l=e.shift();t=s(t+t.trailing+l,l.trailing,t.lineNumber)}var c=t.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),p=d(u);return p&&p.references&&(delete p.references,h(p)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(t,e){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(t.match(n)){d(this.tree)||this.tree.splice(1,0,{});var r=d(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,t,(function(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1));var e=r.references[t[1].toLowerCase()]={href:t[2]};void 0!==t[4]?e.title=t[4]:void 0!==t[5]&&(e.title=t[5])}));return i.length&&e.unshift(s(i,t.trailing)),[]}},para:function(t,e){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,e,n){var r,i;return e=e||this.dialect.inline.__patterns__,(r=new RegExp("([\\s\\S]*?)("+(e.source||e)+")").exec(t))?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,t.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]):[t.length,t]},__call__:function(t,e){var n,r=[];function i(t){"string"==typeof t&&"string"==typeof r[r.length-1]?r[r.length-1]+=t:r.push(t)}for(;t.length>0;)n=this.dialect.inline.__oneElement__.call(this,t,e,r),t=t.substr(n.shift()),c(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var e=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1)),e[2]=this.dialect.inline.__call__.call(this,e[2],/\\/)[0];var n={alt:e[1],href:e[2]||""};return void 0!==e[4]&&(n.title=e[4]),[e[0].length,["img",n]]}return(e=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[e[0].length,["img_ref",{alt:e[1],ref:e[2].toLowerCase(),original:e[0]}]]:[2,"!["]},"[":function(t){var n=String(t),r=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!r)return[1,"["];var i,a,s=1+r[0],o=r[1],l=(t=t.substr(s)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(l){var c=l[1];if(s+=l[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!l[3])for(var u=1,p=0;p<c.length;p++)switch(c[p]){case"(":u++;break;case")":0==--u&&(s-=c.length-p,c=c.substring(0,p))}return a={href:(c=this.dialect.inline.__call__.call(this,c,/\\/)[0])||""},void 0!==l[3]&&(a.title=l[3]),i=["link",a].concat(o),[s,i]}return(l=t.match(/^\s*\[(.*?)\]/))?(s+=l[0].length,i=["link_ref",a={ref:(l[1]||String(o)).toLowerCase(),original:n.substr(0,s)}].concat(o),[s,i]):1==o.length&&"string"==typeof o[0]?(i=["link_ref",a={ref:o[0].toLowerCase(),original:n.substr(0,s)},o[0]],[s,i]):[1,"["]},"<":function(t){var e;return null!=(e=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?e[3]?[e[0].length,["link",{href:"mailto:"+e[3]},e[3]]]:"mailto"==e[2]?[e[0].length,["link",{href:e[1]},e[1].substr("mailto:".length)]]:[e[0].length,["link",{href:e[1]},e[1]]]:[1,"<"]},"`":function(t){var e=t.match(/(`+)(([\s\S]*?)\1)/);return e&&e[2]?[e[1].length+e[2].length,["inlinecode",e[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}},e.dialects.Gruber.inline["**"]=l("strong","**"),e.dialects.Gruber.inline.__=l("strong","__"),e.dialects.Gruber.inline["*"]=l("em","*"),e.dialects.Gruber.inline._=l("em","_"),e.buildBlockOrder=function(t){var e=[];for(var n in t)"__order__"!=n&&"__call__"!=n&&e.push(n);t.__order__=e},e.buildInlinePatterns=function(t){var e=[];for(var n in t)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(1==n.length?r:"(?:"+r+")")}e=e.join("|"),t.__patterns__=e;var i=t.__call__;t.__call__=function(t,n){return null!=n?i.call(this,t,n):i.call(this,t,e)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(t,e){for(var n=0,r=[];;){if(t.charAt(n)==e)return[++n,r];if(n>=t.length)return null;var i=this.dialect.inline.__oneElement__.call(this,t.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},e.subclassDialect=function(t){function e(){}function n(){}return e.prototype=t.block,n.prototype=t.inline,{block:new e,inline:new n}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var e=function(t){var e=t.split(""),n=[""],r=!1;for(;e.length;){var i=e.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=e.shift();default:n[n.length-1]+=i}}return n}(t),n={},r=0;r<e.length;++r)if(/^#/.test(e[r]))n.id=e[r].substring(1);else if(/^\./.test(e[r]))n.class?n.class=n.class+e[r].replace(/./," "):n.class=e[r].substring(1);else if(/\=/.test(e[r])){var i=e[r].split(/\=/);n[i[0]]=i[1]}return n},e.dialects.Maruku.block.document_meta=function(t,e){if(!(t.lineNumber>1)&&t.match(/^(?:\w+:.*\n)*\w+:.*$/)){d(this.tree)||this.tree.splice(1,0,{});var n=t.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),a=r[2];this.tree[1][i]=a}return[]}},e.dialects.Maruku.block.block_meta=function(t,e){var n=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var s=this.tree[this.tree.length-1];if(r=d(s),"string"==typeof s)return;for(a in r||(r={},s.splice(1,0,r)),i)r[a]=i[a];return[]}var o=t.replace(/\n.*$/,""),l=this.processBlock(o,[]);for(a in(r=d(l[0]))||(r={},l[0].splice(1,0,r)),i)r[a]=i[a];return l}},e.dialects.Maruku.block.definition_list=function(t,e){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(o=t.match(r)){for(var a=[t];e.length&&r.exec(e[0]);)a.push(e.shift());for(var s=0;s<a.length;++s){var o,l=(o=a[s].match(r))[1].replace(/\n$/,"").split(/\n/),c=o[2].split(/\n:\s+/);for(n=0;n<l.length;++n)i.push(["dt",l[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},e.dialects.Maruku.block.table=function(t,e){var n,r,i=function(t,e){(e=e||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(e="\\"+e);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+e+"])*)"+e+"(.*)");n=t.match(i);)r.push(n[1]),t=n[2];return r.push(t),r};if(r=t.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=t.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var a=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var s=[];for(c(r[2],(function(t){t.match(/^\s*-+:\s*$/)?s.push({align:"right"}):t.match(/^\s*:-+\s*$/)?s.push({align:"left"}):t.match(/^\s*:-+:\s*$/)?s.push({align:"center"}):s.push({})})),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)a[1][1].push(["th",s[n]||{}].concat(this.processInline(r[1][n].trim())));return c(r[3].replace(/\|\s*$/gm,"").split("\n"),(function(t){var e=["tr"];for(t=i(t,"|"),n=0;n<t.length;n++)e.push(["td",s[n]||{}].concat(this.processInline(t[n].trim())));a[2].push(e)}),this),[a]},e.dialects.Maruku.inline["{:"]=function(t,e,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var a=this.dialect.processMetaHash(i[1]),s=d(r);for(var o in s||(s={},r.splice(1,0,s)),a)s[o]=a[o];return[i[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var c,u=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)};c=Array.prototype.forEach?function(t,e,n){return t.forEach(e,n)}:function(t,e,n){for(var r=0;r<t.length;r++)e.call(n||t,t[r],r,t)};var h=function(t){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0};function d(t){return u(t)&&t.length>1&&"object"==typeof t[1]&&!u(t[1])?t[1]:void 0}function f(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(t){if("string"==typeof t)return f(t);var e=t.shift(),n={},r=[];for(!t.length||"object"!=typeof t[0]||t[0]instanceof Array||(n=t.shift());t.length;)r.push(g(t.shift()));var i="";for(var a in n)i+=" "+a+'="'+f(n[a])+'"';return"img"==e||"br"==e||"hr"==e?"<"+e+i+"/>":"<"+e+i+">"+r.join("")+"</"+e+">"}t.renderJsonML=function(t,e){(e=e||{}).root=e.root||!1;var n=[];if(e.root)n.push(g(t));else for(t.shift(),!t.length||"object"!=typeof t[0]||t[0]instanceof Array||t.shift();t.length;)n.push(g(t.shift()));return n.join("\n\n")}}(e)}}]);