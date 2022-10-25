import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-spinner/paper-spinner-lite"
import template from "./app-pdf-viewer.html"

// use with older version 2.6.347
// const pdflib = require('pdfjs-dist/build/pdf.js');
// const pdfjsViewer = require('pdfjs-dist/web/pdf_viewer.js');

// import * as pdflib from 'pdfjs-dist/webpack';

// try with latest version
const pdflib = require('pdfjs-dist/legacy/build/pdf.js');
const pdfjsViewer = require('pdfjs-dist/legacy/web/pdf_viewer.js')


// import { AppOptions } from "../../../utils/pdfjs/app_options";
// import { PDFViewer } from "../../../utils/pdfjs/pdf_viewer";
import { PDFThumbnailViewer } from "../../../utils/pdfjs/pdf_thumbnail_viewer";
import { PDFRenderingQueue } from "../../../utils/pdfjs/pdf_rendering_queue";
// import { PDFLinkService } from "../../../utils/pdfjs/pdf_link_service";
// import { PDFPageView } from "../../../utils/pdfjs/pdf_page_view";

import { AppOptions } from "../../../utils/pdfjs/app_options";
import { PDFViewer } from "pdfjs-dist/legacy/web/pdf_viewer.js";
import { PDFLinkService } from "pdfjs-dist/legacy/web/pdf_viewer.js";

// const PDF_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
const PDF_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

// const CMAP_URL = require("pdfjs-dist/cmaps/");
// const CMAP_URL = '../../../../../node_modules/pdfjs-dist/cmaps/';

// var pdfjsWorker = require('pdfjs-dist/build/pdf.worker.js');
// pdflib.GlobalWorkerOptions.workerPort = new pdfjsWorker();

import utils from "../../../../lib/utils"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppPdfViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      record : {
        type : Object,
        value : () => {}
      },
      media : {
        type : Object,
        value : () => {}
      },
      loading: {
        type : Boolean,
        value : false
      },
      height : {
        type : Number,
        value : 600
      },
      pdfDocument : {
        type : Object,
        value : () => {}
      },
      pdfThumbnailViewer : {
        type : Object,
        value : () => {}
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  async ready() {
    super.ready();

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let getMediaType = utils.getMediaType(media);
    if( getMediaType !== 'ImageList' && getMediaType !== 'ImageObject' ) return;

    this.media = media;
    this._renderPdf();
    // this._renderPdfRetry();
  }

  _renderPdfRetry() {
    this.loading = true;
    pdflib.GlobalWorkerOptions.workerSrc = PDF_WORKER;

    const loadingTask = pdflib.getDocument('https://sandbox.dams.library.ucdavis.edu/fcrepo/rest' + this.media['@id']);
    const self = this;
    const container = self.$.viewer;
    this.eventBus = new pdfjsViewer.EventBus();

    // TRY #1 - using PDFPageView, seems to render just a bunch of 0x0 canvas' for each page, 
    //    even when expanded they're entirely black
    // loadingTask.promise
    //   .then(pdfDocument => {
    //     this.pdfDocument = pdfDocument;
    //     let promise = Promise.resolve();
    //     for( let i = 0; i < pdfDocument.numPages; i++ ) {
    //       // load page by page
    //       promise = promise.then(function (id) {
    //         return pdfDocument.getPage(id + 1).then(pdfPage => {
    //           // add to page
    //           const scale = 1.0;
    //           const pdfPageView = new PDFPageView({
    //             container,
    //             id,
    //             scale,
    //             defaultViewport: pdfPage.getViewport({ scale }),
    //             eventBus: self.eventBus,
    //           });

    //           // associate page with view, and render
    //           pdfPageView.setPdfPage(pdfPage);
    //           return pdfPageView.draw();
    //         });
    //       }.bind(null, i));
    //     }
    //     return promise;
    //   })
    //   .catch(error => {
    //     console.error('Error rendering pdf: ' + error);
    //   });

    // TRY #2, just render canvas' manually but loop over all pages
    //    this works but is super slow since it's a chain of async calls
    // loadingTask.promise
    // .then(pdfDocument => {
    //   this.pdfDocument = pdfDocument;
    //   let promise = Promise.resolve();
    //   for( let i = 0; i < pdfDocument.numPages; i++ ) {
    //     // load page by page
    //     promise = promise.then(function (id) {
    //       return pdfDocument.getPage(id + 1).then(pdfPage => {
    //         // add to page
    //         const viewport = pdfPage.getViewport({ scale: 0.75 });
    //         const viewer = self.$.viewer;
            
    //         const canvas = document.createElement('canvas');
    //         canvas.width = viewport.width;
    //         canvas.height = viewport.height;
    //         const ctx = canvas.getContext("2d");
    //         const renderTask = pdfPage.render({
    //           canvasContext: ctx,
    //           viewport,
    //         });
    //         viewer.append(canvas);
    //         self.loading = false;
    //         return renderTask.promise;
    //       });
    //     }.bind(null, i));
    //   }
    //   return promise;
    // })
    // .catch(error => {
    //   console.error('Error rendering pdf: ' + error);
    // });


    // TRY #3, just render canvas' manually for first page,
    //    then loop over all pages to build array of promises
    //    then Promise.all() to retrieve the rest of the pages async
    //    might be out of order?
    loadingTask.promise
    .then(pdfDocument => {
      this.pdfDocument = pdfDocument;
      // let promise = Promise.resolve();
      let promises = [];
      for( let i = 0; i < pdfDocument.numPages; i++ ) {
        promises.push(pdfDocument.getPage(i + 1));          
      }
      return Promise.all(promises).then((pdfPages) => {
        const renderPromises = [];
        pdfPages.forEach(pdfPage => {
          const viewport = pdfPage.getViewport({ scale: 0.75 });
          const viewer = self.$.viewer;
          
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          // TODO .render() is also a promise, so it still loads page by page
          const ctx = canvas.getContext("2d");
          const renderTask = pdfPage.render({
            canvasContext: ctx,
            viewport,
          });
          viewer.append(canvas);
          renderPromises.push(renderTask.promise);
        });
        debugger;
        Promise.all(renderPromises);
        self.loading = false;

      });
    })
    .catch(error => {
      console.error('Error rendering pdf: ' + error);
    });
  }

  _renderPdf() {
    this.loading = true;
    debugger;
    pdflib.GlobalWorkerOptions.workerSrc = PDF_WORKER;

    const loadingTask = pdflib.getDocument('https://sandbox.dams.library.ucdavis.edu/fcrepo/rest' + this.media['@id']);
    const self = this;


    // TRY #1 trying to follow the example viewer.html implementation closely, 
    //    however this renders the divs for each page but doesn't draw the canvas because 
    //    the loaded callback in pdf_viewer which actually draws the canvas is never called
    
    loadingTask.promise
      .then(pdfDocument => {
        this.pdfDocument = pdfDocument;

        
        // build thumbnail viewer navigation
        this.eventBus = new pdfjsViewer.EventBus();
        
        const pdfRenderingQueue = new PDFRenderingQueue();
        pdfRenderingQueue.onIdle = this._cleanup.bind(this);
        this.pdfRenderingQueue = pdfRenderingQueue;

        const pdfLinkService = new PDFLinkService({
          eventBus: this.eventBus,
          externalLinkTarget: AppOptions.get("externalLinkTarget"),
          externalLinkRel: AppOptions.get("externalLinkRel"),
          ignoreDestinationZoom: AppOptions.get("ignoreDestinationZoom"),
        });
        this.pdfLinkService = pdfLinkService;
        const baseDocumentUrl = ''; //location.href.split("#")[0];
        this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl);

        this.pdfThumbnailViewer = new PDFThumbnailViewer({
          container: self.$.thumbnailView,
          eventBus: this.eventBus,
          renderingQueue: pdfRenderingQueue,
          linkService: pdfLinkService,
          // l10n: this.l10n,
          // pageColors,
        });
        this.pdfRenderingQueue.setThumbnailViewer(this.pdfThumbnailViewer);
        this.pdfThumbnailViewer.setDocument(pdfDocument);
        

        this.pdfViewer = new PDFViewer({
          container: self.$.viewerContainer,
          viewer: self.$.viewer,
          eventBus: this.eventBus,
          renderingQueue: pdfRenderingQueue,
          linkService: pdfLinkService,
          downloadManager: null,
          findController: null,
          scriptingManager:
            null, //AppOptions.get("enableScripting") && pdfScriptingManager,
          renderer: null,
            // typeof PDFJSDev === "undefined" ||
            // PDFJSDev.test("!PRODUCTION || GENERIC")
            //   ? AppOptions.get("renderer")
            //   : null,
          // l10n: this.l10n,
          textLayerMode: null, //AppOptions.get("textLayerMode"),
          annotationMode: null, //AppOptions.get("annotationMode"),
          annotationEditorMode: null,
          imageResourcesPath: baseDocumentUrl, //AppOptions.get("imageResourcesPath"),
          enablePrintAutoRotate: null, //AppOptions.get("enablePrintAutoRotate"),
          useOnlyCssZoom: null, //AppOptions.get("useOnlyCssZoom"),
          maxCanvasPixels: null, //AppOptions.get("maxCanvasPixels"),
          enablePermissions: null, //AppOptions.get("enablePermissions"),
          // pageColors,
        });
        this.pdfViewer.setDocument(this.pdfDocument)
        this.pdfRenderingQueue.setViewer(this.pdfViewer);
        this.pdfLinkService.setViewer(this.pdfViewer);

        this.bindEvents();

        // return pdfDocument.getPage(5).then(pdfPage => {
        //   // scale
        //   const viewport = pdfPage.getViewport({ scale: 0.75 });
        //   const viewer = self.$.viewer;
          
        //   const canvas = document.createElement('canvas');
        //   canvas.width = viewport.width;
        //   canvas.height = viewport.height;
        //   const ctx = canvas.getContext("2d");
        //   const renderTask = pdfPage.render({
        //     canvasContext: ctx,
        //     viewport,
        //   });
        //   viewer.append(canvas);
          this.loading = false;
        //   return renderTask.promise;
        // });
      }).then(() => {
        // draw thumbnails
        
        // THIS IS CALLED BEFORE pdf_thumbnail_viewer.setDocument()


        // this.pdfRenderingQueue.renderView(this.pdfThumbnailViewer);
        for( let pageNum = 1; pageNum <= this.pdfDocument.numPages; ++pageNum ) {

        }


        // pdfPageView.setPdfPage(pdfPage);
        // return pdfPageView.draw();
      })
      .catch(error => {
        console.error('Error rendering pdf: ' + error);
      });
    

    // TRY #2 to render just all pages
    /*
    loadingTask.promise
      .then(pdfDocument => {
        this.pdfDocument = pdfDocument;

        const pdfLinkService = new PDFLinkService();
        
        // const pdfFindController = new pdflib.PDFFindController({
        //   linkService: pdfLinkService,
        // });

        const pdfViewer = new PDFViewer({
          container: self.$.viewerContainer,
          viewer: self.$.viewer,
          linkService: pdfLinkService,
          // findController: pdfFindController
        });
        // this throws errors in the pdf_viewer since things are missing, ie eventbus
        pdfViewer.setDocument(pdfDocument);
        pdfLinkService.setDocument(pdfDocument, null);

        // pdfViewer.onePageRendered.then(() => {
        //   pdfDocument.getOutline().then((outline) => {
        //       debugger

        //       // this.outline = outline || null;

        //       // if (!outline) {
        //       //    return;
        //       // }
        //       // this.setState({bookmarkItems: outline});
        //   });
        // });

        this.loading = false;
        
      })
      .catch(error => {
        console.error('Error rendering pdf: ' + error);
      });

*/

    // TRY #3 with simpleviewer.js example
    // const eventBus = new pdfjsViewer.EventBus();
    // const container = this.shadowRoot.querySelector('#pdfCanvas'); // this.$.pdfCanvas;

    // const DEFAULT_URL = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest' + this.media['@id'];
    // const CMAP_PACKED = true;
    // const ENABLE_XFA = true;

    // const pdfViewer = new pdfjsViewer.PDFViewer({
    //   container,
    //   eventBus,
    //   // linkService: pdfLinkService,
    //   // findController: pdfFindController,
    //   // scriptingManager: pdfScriptingManager,
    // });

    // eventBus.on("pagesinit", function () {
    //   // We can use pdfViewer now, e.g. let's change default scale.
    //   pdfViewer.currentScaleValue = "page-width";
    
    //   // We can try searching for things.
    //   if (SEARCH_FOR) {
    //     eventBus.dispatch("find", { type: "", query: SEARCH_FOR });
    //   }
    // });

    // // Loading document.
    // const loadingTask = pdfjsLib.getDocument({
    //   url: DEFAULT_URL,
    //   cMapUrl: CMAP_URL,
    //   cMapPacked: CMAP_PACKED,
    //   enableXfa: ENABLE_XFA,
    // });
    // (async function () {
    //   const pdfDocument = await loadingTask.promise;
    //   // Document loaded, specifying document for the viewer and
    //   // the (optional) linkService.
    //   pdfViewer.setDocument(pdfDocument);
    //   debugger;

    //   // pdfLinkService.setDocument(pdfDocument, null);
    // })();


  }

  _cleanup() {
    if (!this.pdfDocument) {
      return; // run cleanup when document is loaded
    }
    // this.pdfViewer.cleanup();
    this.pdfThumbnailViewer.cleanup();
  }

  bindEvents() {
    // this.eventBus._on("resize", webViewerResize);
    this.eventBus._on("pagerendered", this.webViewerPageRendered);
    // this.eventBus._on("updateviewarea", webViewerUpdateViewarea);
    // this.eventBus._on("sidebarviewchanged", webViewerSidebarViewChanged);
    // this.eventBus._on("firstpage", webViewerFirstPage);
    // this.eventBus._on("lastpage", webViewerLastPage);
    // this.eventBus._on("nextpage", webViewerNextPage);
    // this.eventBus._on("previouspage", webViewerPreviousPage);
    // this.eventBus._on("pagenumberchanged", webViewerPageNumberChanged);
  }

  unbindEvents() {
    // this.eventBus._off("resize", webViewerResize);
    this.eventBus._off("pagerendered", this.webViewerPageRendered);
    // this.eventBus._off("updateviewarea", webViewerUpdateViewarea);
    // this.eventBus._off("sidebarviewchanged", webViewerSidebarViewChanged);
    // this.eventBus._off("firstpage", webViewerFirstPage);
    // this.eventBus._off("lastpage", webViewerLastPage);
    // this.eventBus._off("nextpage", webViewerNextPage);
    // this.eventBus._off("previouspage", webViewerPreviousPage);
    // this.eventBus._off("pagenumberchanged", webViewerPageNumberChanged);
  }

  webViewerPageRendered({ pageNumber, error }) {
    // If the page is still visible when it has finished rendering,
    // ensure that the page number input loading indicator is hidden.
    if (pageNumber === PDFViewerApplication.page) {
      PDFViewerApplication.toolbar.updateLoadingIndicatorState(false);
    }
  
    // // Use the rendered page to set the corresponding thumbnail image.
    // if (PDFViewerApplication.pdfSidebar.visibleView === SidebarView.THUMBS) {
      const pageView = this.pdfViewer.getPageView(
        /* index = */ pageNumber - 1
      );
      const thumbnailView = this.pdfThumbnailViewer.getThumbnail(
        /* index = */ pageNumber - 1
      );
      if (pageView && thumbnailView) {
        thumbnailView.setImage(pageView);
      }
    // }
  
    // if (error) {
    //   PDFViewerApplication.l10n.get("rendering_error").then(msg => {
    //     PDFViewerApplication._otherError(msg, error);
    //   });
    // }
  
    // It is a good time to report stream and font types.
    // PDFViewerApplication._reportDocumentStatsTelemetry();
  }

}

customElements.define('app-pdf-viewer', AppPdfViewer);