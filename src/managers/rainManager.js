class RainManager {
  constructor() {

  }

  generateRaindrop() {
    const rainDiv = document.querySelector('div.rain');

    var drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = (Math.floor(Math.random() * 90 + 5)) + '%';
    drop.style.animationDuration = Math.floor(Math.random() * 4) + 1 + 's';
    rainDiv.appendChild(drop)
  };

  removeRaindrop() {
    const rainDiv = document.querySelector('div.rain');

    if (rainDiv === undefined) {
      return;
    }

    if (rainDiv.children.length > 100) {
      rainDiv.removeChild(rainDiv.firstChild);
    }
  }

  startRain() {
    const rainDiv = document.createElement('div');

    rainDiv.classList.add('rain')
    document.body.append(rainDiv)
    setInterval(() => {
      this.generateRaindrop();
      this.removeRaindrop();
    }, 500);
  }
}