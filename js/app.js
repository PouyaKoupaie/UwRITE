import { renderNavLinks, registerNavLinks, registerBrowserBackAndForth, renderInitialPage } from './router.js';

(function bootup(){
    renderNavLinks();
    registerNavLinks();
    registerBrowserBackAndForth();
    renderInitialPage();
})();