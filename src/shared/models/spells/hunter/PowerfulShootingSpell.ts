import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class PowerfulShootingSpell extends SpellModel {

  constructor() {
    super('Powerful Shooting', 6, 2);
    this.registerCastableChild(new DamageSpell(5));
  }

}
