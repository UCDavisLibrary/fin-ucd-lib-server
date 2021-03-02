/**
 * @mixin ThemeUtils
 * @description Mixin to use for any element that wants to convert its children from light to shadow DOM
 * @param {class} subclass 
 * 
 * @returns 
 */
const ThemeUtils = subclass => 
  class InsertIntoShadow extends subclass {
    

    connectedCallback(){
      super.connectedCallback();
      this.childrenToRender = [...this.children];
      this.childListObserver = new MutationObserver(
        (mutationsList, observer) => this._onChildListMutation(mutationsList, observer)
      );
      this.childListObserver.observe(this, {childList: true});
    }

    disconnectedCallback(){
      this.childListObserver.disconnect();
      super.disconnectedCallback();
    }
    
    firstUpdated(){
      super.firstUpdated();
      if (this.childrenToRender) console.log("lets render existing children");
    }

    _onChildListMutation(mutationsList, observer) {
      console.log("hello!");
      for (const mutation of mutationsList) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType === 3) continue;
          let insertInto = addedNode.getAttribute('insert-into') ? addedNode.getAttribute('insert-into') : "section-columns";
          this.shadowRoot.getElementById(insertInto).appendChild(addedNode);
          console.log(addedNode);
        }
      }
    }
  };


export default ThemeUtils;