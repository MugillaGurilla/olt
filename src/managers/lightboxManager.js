class LightboxManager {
  constructor() {

  }

  /* 
  Lightbox stuff
  */
  addInLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none'; 

    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    lightbox.appendChild(closeButton);

    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-content';
    lightbox.appendChild(lightboxImg);

    const caption = document.createElement('div');
    caption.className = 'caption';
    lightbox.appendChild(caption);

    document.body.appendChild(lightbox);

    document.querySelectorAll('.olt-image').forEach(img => {
      img.addEventListener('click', function() {
        lightbox.style.display = 'grid';
        lightboxImg.src = this.src;
        caption.textContent = this.alt;
      });
    });
    
    closeButton.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }
}