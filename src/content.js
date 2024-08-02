let allUsefulTags

function extractUsefulTags() {
  const articlesTagsToBeExtracted = 'p,img,h1,h2,h3,h4,h5,h6,table';
  let extractedTags = document.querySelectorAll(articlesTagsToBeExtracted);
  extractedTags = Array.from(extractedTags);
  const firstH1Index = extractedTags.findIndex((tag) => tag.nodeName.toUpperCase() === 'H1');
  const filteredTags = extractedTags.slice(firstH1Index);
  allUsefulTags = filteredTags;
}


function printUsefulTags() {
  allUsefulTags.forEach((articleElement) => {
    
    tagToClassMappings = {
      'P': 'olt-paragraph',
      'IMG': 'olt-image',
      'H1': 'olt-header',
      'H2': 'olt-header',
      'H3': 'olt-header',
      'H4': 'olt-header',
      'H5': 'olt-header',
      'H6': 'olt-header', 
    }
    
    articleElement.className = '';
    articleElement.classList.add(tagToClassMappings[articleElement.tagName])
    document.body.append(articleElement);
    document.body.classList.add('font-size-level-2')
  });
}

/* 
Formatting controls
*/

function addTextControls() {
  const controlsDiv = document.createElement('div');
  controlsDiv.classList.add('controls');

  const controlSymbolsAndListeners = {
    'https://i.ibb.co/2WW751B/zoom-in.png': increaseFontSize,
    'https://i.ibb.co/7r4mLZb/zoom-out.png': decreaseFontSize,
    'https://i.ibb.co/wR5DhWX/lightbulb.png': toggleDarkMode,
    'https://i.ibb.co/ZHx37SY/reduce-margin.png': reduceMarginSpace,
    'https://i.ibb.co/DpDmJjZ/increase-margin.png': increaseMarginSpace,
    'https://i.ibb.co/ZS8573Z/view-original.png': viewOriginalPage,
    'https://i.ibb.co/t4XFtVJ/rain.png': hideRain
  }

  Object.entries(controlSymbolsAndListeners).forEach(([iconLink,event]) => {
    const control = document.createElement('img');
    control.classList.add('control');
    control.setAttribute('src', iconLink)

    control.addEventListener('click', event);

    controlsDiv.append(control);
  })
  document.body.append(controlsDiv);
}

/* 
Controls
*/

function increaseFontSize() {
  const fontSizeClass = getFontSizeClass();
  const fontSizeLevel = fontSizeClass.substring(fontSizeClass.length - 1, fontSizeClass.length);
  if (fontSizeLevel >= 5) {
    return;
  }
  document.body.classList.remove(fontSizeClass);
  document.body.classList.add(`font-size-level-${Number(fontSizeLevel) + 1}`);
}

function decreaseFontSize() {
  const fontSizeClass = getFontSizeClass();
  const fontSizeLevel = fontSizeClass.substring(fontSizeClass.length - 1, fontSizeClass.length);
  if (fontSizeLevel <= 1) {
    return;
  }
  document.body.classList.remove(fontSizeClass);
  document.body.classList.add(`font-size-level-${Number(fontSizeLevel) - 1}`);
}

function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

function increaseMarginSpace() {
  const currentMargin = document.body.style.marginLeft;
  const number = currentMargin.substring(0, currentMargin.length - 2);
  document.body.style.marginLeft = Number(number) + 50 + 'px';
  document.body.style.marginRight = Number(number) + 50 + 'px';
}

function reduceMarginSpace() {
  const currentMargin = document.body.style.marginLeft;
  const number = currentMargin.substring(0, currentMargin.length - 2);
  document.body.style.marginLeft = Number(number) - 50 + 'px';
  document.body.style.marginRight = Number(number) - 50 + 'px';
}

function getFontSizeClass() {
  const bodyTagClasses = Array.from(document.body.classList);
  const fontSizeRegex = /^font-size-level-\d+$/;
  const fontSizeClass = bodyTagClasses.find(className => fontSizeRegex.test(className));

  console.log(fontSizeClass);
  return fontSizeClass;
}

function viewOriginalPage() {
  location.reload();
}

function hideRain() {
  const rainDiv = document.querySelector('div.rain');

  rainDiv.classList.toggle('hidden');
}

/* 
Lightbox stuff
*/
function addInLightbox() {
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


/* 
Cool Raining Background
*/
function generateRaindrop() {
  const rainDiv = document.querySelector('div.rain');

  var drop = document.createElement('div');
  drop.classList.add('raindrop');
  drop.style.left = (Math.floor(Math.random() * 90 + 5)) + '%';
  drop.style.animationDuration = Math.floor(Math.random() * 4) + 1 + 's';
  rainDiv.appendChild(drop)
};

function removeRaindrop() {
  const rainDiv = document.querySelector('div.rain');

  if (rainDiv === undefined) {
    return;
  }

  if (rainDiv.children.length > 100) {
    rainDiv.removeChild(rainDiv.firstChild);
  }
}

function kickOffRain() {
  const rainDiv = document.createElement('div');

  rainDiv.classList.add('rain')
  document.body.append(rainDiv)
  setInterval(() => {
    generateRaindrop();
    removeRaindrop();
  }, 500);
}

/* 
Cleaning up the document
*/
function cleanBody() {
  document.body.innerHTML = '';
  document.body.className = '';
  document.body.style = '';
  document.body.style.marginLeft = '200px';
  document.body.style.marginRight = '200px';
  document.body.classList.add('reader-mode');
}

function cleanHead() {
  const favicon = document.querySelector('link[sizes="32x32"]');
  const title = document.querySelector('title')

  document.head.innerHTML = '';

  document.head.append(favicon);
  document.head.append(title);
}

function removeIframes() {
  document.querySelectorAll('iframe').forEach((iframe) => {
    iframe.remove();  
  })
}

function removeScriptTags() {
  document.querySelectorAll('script').forEach((script) => {
    script.remove();  
  })
}

function stopPageLoadingFurther() {
  window.stop();
}

/* 
Calling everything
*/
extractUsefulTags();

cleanBody();
cleanHead();
removeIframes();
removeScriptTags();
stopPageLoadingFurther();

kickOffRain();
printUsefulTags();
addTextControls();

addInLightbox();