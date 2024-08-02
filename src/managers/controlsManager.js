class ControlsManager {
  currentFontClass;
  currentMarginSize;
  
  constructor() {
    this.getFontSizeClass();
    this.currentMarginSize = document.body.style.marginLeft;

  }

  addTextControls() {
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
    this.getFontSizeClass();
    const fontSizeLevel = this.currentFontClass.substring(this.currentFontClass.length - 1, this.currentFontClass.length);
    if (fontSizeLevel >= 5) {
      return;
    }
    document.body.classList.remove(this.currentFontClass);
    document.body.classList.add(`font-size-level-${Number(fontSizeLevel) + 1}`);
  }

  decreaseFontSize() {
    this.getFontSizeClass();
    const fontSizeLevel = this.currentFontClass.substring(this.currentFontClass.length - 1, this.currentFontClass.length);
    if (fontSizeLevel <= 1) {
      return;
    }
    document.body.classList.remove(this.currentFontClass);
    document.body.classList.add(`font-size-level-${Number(fontSizeLevel) - 1}`);
  }

  toggleDarkMode() {
    document.body.classList.toggle('light-mode');
  }

  increaseMarginSpace() {
    this.currentMarginSize = document.body.style.marginLeft;
    const number = this.currentMarginSize.substring(0, currentMargin.length - 2);
    document.body.style.marginLeft = Number(number) + 50 + 'px';
    document.body.style.marginRight = Number(number) + 50 + 'px';
  }

  reduceMarginSpace() {
    this.currentMarginSize = document.body.style.marginLeft;
    const number = this.currentMarginSize.substring(0, currentMargin.length - 2);
    document.body.style.marginLeft = Number(number) - 50 + 'px';
    document.body.style.marginRight = Number(number) - 50 + 'px';
  }

  getFontSizeClass() {
    const bodyTagClasses = Array.from(document.body.classList);
    const fontSizeRegex = /^font-size-level-\d+$/;
    const fontSizeClass = bodyTagClasses.find(className => fontSizeRegex.test(className));
    this.currentFontClass = fontSizeClass;
  }

  viewOriginalPage() {
    location.reload();
  }

  hideRain() {
    const rainDiv = document.querySelector('div.rain');

    rainDiv.classList.toggle('hidden');
  }
}