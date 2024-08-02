
const tagsManager = new TagsManager();
tagsManager.extract();
tagsManager.defineClassNames();

const cleanupManager = new CleanupManager();
cleanupManager.cleanup();

tagsManager.print();

const rainManager = new RainManager();
rainManager.startRain();

const controlsManager = new ControlsManager();
controlsManager.addTextControls();

const lightboxManager = new LightboxManager();
lightboxManager.addInLightbox();