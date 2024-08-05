class CleanupManager {
  constructor() {

  }

  cleanup() {
    this.cleanBody();
    this.cleanHead();
    this.removeIframes();
    this.removeScriptTags();
    this.stopPageLoadingFurther();
  }

  /* 
  Cleaning up the document
  */
  cleanBody() {
    document.body.innerHTML = '';
    document.body.className = '';
    document.body.style = '';
    document.body.style.marginLeft = '200px';
    document.body.style.marginRight = '200px';
    document.body.classList.add('reader-mode');
  }

  cleanHead() {
    const favicon = document.querySelector('link[sizes="32x32"]');
    const title = document.querySelector('title')

    document.head.innerHTML = '';

    document.head.append(favicon);
    document.head.append(title);
  }

  removeIframes() {
    document.querySelectorAll('iframe').forEach((iframe) => {
      iframe.remove();  
    })
  }

  removeScriptTags() {
    document.querySelectorAll('script').forEach((script) => {
      script.remove();  
    })
  }

  stopPageLoadingFurther() {
    window.stop();
  }

}