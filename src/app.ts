import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Traveller Data';
    config.map([
      { route: ['', 'ship'], name: 'ship',      moduleId: 'ship',      nav: true, title: 'Ship' },
    ]);

    this.router = router;
  }
}
