class Executor {
  TagsManager = new TagsManager();
  CleanupManager = new CleanupManager();
  RainManager = new RainManager();
  ControlsManager = new ControlsManager();
  LightboxManager = new LightboxManager();

  run() {
    this.TagsManager.extract();
    this.TagsManager.defineClassNames();
    this.CleanupManager.cleanup();
    this.TagsManager.print();
    this.RainManager.startRain();
    this.ControlsManager.addTextControls();
    this.LightboxManager.addInLightbox();
  }
}

const executor = new Executor();
executor.run();