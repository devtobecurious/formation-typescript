export namespace Weapons {
    export abstract class Weapon {
        power! : number;
    }

    export class SaberWeapon extends Weapon {
    }
}

const weapon = new Weapons.SaberWeapon();