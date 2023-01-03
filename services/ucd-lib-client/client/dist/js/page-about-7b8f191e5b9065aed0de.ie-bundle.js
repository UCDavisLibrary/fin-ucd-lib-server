(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(e,n,t){"use strict";var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(4),i=l(t(310));t(79);var o=l(t(19));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.active=!0,e._injectModel("AppStateModel"),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,null,[{key:"template",get:function(){var e=document.createElement("template");return e.innerHTML=i.default,e}},{key:"properties",get:function(){return{}}}]),n}(Mixin(a.PolymerElement).with(EventInterface,o.default));customElements.define("app-about",s)},310:function(e,n){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    position: relative;\n    background-color: var(--super-light-background-color);\n  }\n\n  .text-container {\n    margin: 0;\n    padding: 50px 10px 50px 10px;\n  }\n\n  h1, h2 {\n    color: var(--default-primary-color);\n  }\n\n  h2 {\n    margin: 15px 0 0 0px;\n  }\n\n  .yellow-line {\n    margin: 0 auto 0 0;\n    text-align: left;\n    width: 50px;\n    height: 4px;\n\n    border-color: var(--default-secondary-color);\n    background-color: var(--default-secondary-color);\n  }\n</style>\n\n<app-header-colorbar height="8" flipped></app-header-colorbar>\n\n<div class="text-container">  \n  <div>\n    <h1>About Digital Collections</h1>\n    <div class="yellow-line">&nbsp;</div>\n  </div>\n  \n  <p>\n    The UC Davis Digital Collections is a locally developed digital repository that \n    was designed to store and manage the digital assets of UC Davis. These Digital \n    Collections are intended to increase access to previously undiscoverable digital \n    assets held by the University Library.\n  </p>\n  \n  <p>\n    Initially launched in 2018, the repository currently stores <span>[[count]]</span> digital assets. \n    Assests will be added continually as they are ready.\n  </p>\n  \n  <h2>Platform</h2>\n  \n  <p>\n    The Digital Asset Management System is built on the Fedora Linked Data Platform. \n    Custom microservices are implemented using a Fedora (API-X) extension method as a general \n    methodology. The User Interface was built with web-components anticipating a need for \n    UI flexibility as the digital collection grows. For a more detailed explanation of \n    the development, see our \n    <a href="https://github.com/UCDavisLibrary/fin-server/wiki/Fin-Server-Overview">Fin Server Overview</a> or\n    <a href="https://github.com/UCDavisLibrary/fin-server/blob/master/docs/README.md">Developer Documentation.</a>\n  </p>\n  \n  <h2>Contact</h2>\n  <div>\n    <ul>\n      <li><a href="mailto:eanebeker@ucdavis.edu">Eric A Nebeker - Digital Assets Specialist</a></li>\n    </ul>\n  </div>\n  \n  <h2>Implementation Team</h2>\n  <div>\n    <ul>\n      <li><a href="https://www.library.ucdavis.edu/author/quinn-hart">Quinn Hart - Team Lead</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/justin-merz">Justin Merz - Lead Developer</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/kimmy-hescock">Kimmy Hescock - User Experience Designer</a></li>\n    </ul>\n  </div>\n  \n  <h2>Members of the DAMS Steering Committee</h2>\n  <div>\n    <ul>\n      <li><a href="https://www.library.ucdavis.edu/author/peter-brantley">Peter Brantley</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/vessela-ensberg">Vessela Ensberg</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/bob-heyer-gray">Robert Heyer-Gray</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/xiaoli-li">Xiaoli Li</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/kevin-miller">Kevin Miller</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/eric-nebeker">Eric Nebeker</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/dale-snapp">Dale Snapp</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/carl-stahmer">Carl Stahmer</a></li>\n      <li><a href="https://www.library.ucdavis.edu/author/neil-weingarten">Neil Weingarten</a></li>\n    </ul>\n  </div>\n  \n  <p>\n    The UC Davis Library DAMS was a project of the Library\'s \n    <a href="https://www.library.ucdavis.edu/service/online-strategy-2/">Online Strategy team.</a>\n  </p>\n</div>\n<app-header-colorbar height="8" flipped></app-header-colorbar>\n'}}]);