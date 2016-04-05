import {computedFrom} from 'aurelia-framework';

export class Welcome {
  ship: Ship;
  components: Component[];

  constructor() {
    this.ship = new Ship();
    this.ship.name = "Scout ship Aurelia";
    
    this.ship.hull.tons = 100;
    this.ship.hull.hullPoints = 4;
    this.ship.hull.structurePoints = 4;

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
  hull: Hull;
  components: Component[];
  
  constructor() {
    this.hull = new Hull();
    this.components = new Array<Component>();
  }
}

export class Hull {
  tons: number;
  hullPoints: number;
  structurePoints: number;
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
