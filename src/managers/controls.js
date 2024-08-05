class ControlsManager {
  currentFontClass;
  currentMarginSize;

  constructor() {
    this.increaseFontSize = this.increaseFontSize.bind(this);
    this.decreaseFontSize = this.decreaseFontSize.bind(this);
    this.updateCurrentFontClass = this.updateCurrentFontClass.bind(this);
  }

  addTextControls() {
    this.updateCurrentFontClass();
    this.currentMarginSize = document.body.style.marginLeft;

    const controlsDiv = document.createElement('div');
    controlsDiv.classList.add('controls');

    
    const controlSymbolsAndListeners = {
      'https://i.ibb.co/2WW751B/zoom-in.png': this.increaseFontSize,
      'https://i.ibb.co/7r4mLZb/zoom-out.png': this.decreaseFontSize,
      'https://i.ibb.co/wR5DhWX/lightbulb.png': this.toggleDarkMode,
      'https://i.ibb.co/ZHx37SY/reduce-margin.png': this.reduceMarginSpace,
      'https://i.ibb.co/DpDmJjZ/increase-margin.png': this.increaseMarginSpace,
      'https://i.ibb.co/ZS8573Z/view-original.png': this.viewOriginalPage,
      'https://i.ibb.co/t4XFtVJ/rain.png': this.hideRain
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

  increaseFontSize() {
    this.updateCurrentFontClass();
    const fontSizeLevel = this.currentFontClass.substring(this.currentFontClass.length - 1, this.currentFontClass.length);
    if (fontSizeLevel >= 5) {
      return;
    }
    document.body.classList.remove(this.currentFontClass);
    document.body.classList.add(`font-size-level-${Number(fontSizeLevel) + 1}`);
  }

  decreaseFontSize() {
    this.updateCurrentFontClass();
    const fontSizeLevel = this.currentFontClass.substring(this.currentFontClass.length - 1, this.currentFontClass.length);
    if (fontSizeLevel <= 1) {
      return;
    }
    document.body.classList.remove(this.currentFontClass);
    document.body.classList.add(`font-size-level-${Number(fontSizeLevel) - 1}`);
  }
  
  updateCurrentFontClass() {
    const bodyTagClasses = Array.from(document.body.classList);
    const fontSizeRegex = /^font-size-level-\d+$/;
    const fontSizeClass = bodyTagClasses.find(className => fontSizeRegex.test(className));
    this.currentFontClass = fontSizeClass;
  }

  toggleDarkMode() {
    document.body.classList.toggle('light-mode');
  }

  increaseMarginSpace() {
    this.currentMarginSize = document.body.style.marginLeft;
    const number = this.currentMarginSize.substring(0, this.currentMarginSize.length - 2);
    document.body.style.marginLeft = Number(number) + 50 + 'px';
    document.body.style.marginRight = Number(number) + 50 + 'px';
  }

  reduceMarginSpace() {
    this.currentMarginSize = document.body.style.marginLeft;
    const number = this.currentMarginSize.substring(0, this.currentMarginSize.length - 2);
    document.body.style.marginLeft = Number(number) - 50 + 'px';
    document.body.style.marginRight = Number(number) - 50 + 'px';
  }

  viewOriginalPage() {
    location.reload();
  }

  hideRain() {
    const rainDiv = document.querySelector('div.rain');

    rainDiv.classList.toggle('hidden');
  }
}