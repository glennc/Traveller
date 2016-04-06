import {computedFrom} from 'aurelia-framework';

export class ShipView {
  ship: Ship;
  components: Component[];

  constructor() {
    this.ship = new Ship();
    this.ship.name = "Scout ship Aurelia";
    this.ship.cargo = 4;

    this.ship.hull.tons = 100;
    this.ship.hull.hullPoints = 4;
    this.ship.hull.structurePoints = 4;

    var screen = new Screen();
    screen.name = "Nuclear Damper";
    screen.TL = 12;
    screen.effect = "Reduces Fusion gun and nuclear missile damage by 2d6, removes automatic crew hit from nuclear missle attacks.";
    screen.tons = 50;
    screen.cost = 50;

    this.ship.screens.push(screen);

    var hp = new Hardpoint();
    hp.cost = 4;
    hp.TL = 6;
    hp.tons = 1;
    hp.weapon = "Quad laser";

    this.ship.hardpoints.push(hp);

    var t = new Component();
    t.name="test1";
    t.comments = "test component";
    t.cost = 100;
    t.size = 110; 
    this.ship.components.push(t);
  }
}

export class Ship {
  name: string;
  cargo: number;
  hull: Hull;
  screens: Screen[];
  hardpoints: Hardpoint[];

  components: Component[];
  
  constructor() {
    this.hull = new Hull();
    this.components = new Array<Component>();
    this.screens = new Array<Screen>();
    this.hardpoints = new Array<Hardpoint>();
  }
}

export class Hull {
  tons: number;
  hullPoints: number;
  structurePoints: number;
}

export class Screen {
  name: string;
  TL: number;
  effect: string;
  tons: number;
  cost: number;
}

export class Hardpoint {
  weapon: string;
  TL: number;
  tons: number;
  cost: number;
}

export class Component {
  name: string;
  comments: string;
  size: number;
  cost: number;
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
