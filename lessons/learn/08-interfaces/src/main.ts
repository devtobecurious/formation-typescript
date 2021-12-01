import  * as war from './warrior';

class Character {
    constructor(public surname: string) {

    }
}

interface Warrior {
    attak(perso: Character): void;
    power?: number;
}

interface Warrior {
    shield: number | null;
}

class Wookie extends Character implements Warrior {
    shield !: number;

    constructor(public surname: string) {
        super(surname);
    }

    attak(perso: Character): void {}

    get name(): string {
        return 'chewie'
    }
    set name(value: string) {
        this.surname = value;
    }
}

class Weapon {
    constructor(power: number); // overloads
    constructor(power: number, name: string); // overloads
    constructor(power: number, name?: string) { // implementation

    }

    static shootEmAll() {
        console.info('pingggg');
    }
}
const weapon = new Weapon(1, 'Blaster');


const wookie = new Wookie('ddd');
wookie.name = 'test';

// wookie.power = 100;

Weapon.shootEmAll();



// ****** STRANGE BUT REAL IN JS/TS********
interface WookieStrange {
    name: string;
}

class Droid {
    name !: string;
}

let wookieDroid !: WookieStrange;
wookieDroid = new Droid(); // same structure !!

// encore plus loin

let otherDroide = { name: '121121', size: 12 };
wookieDroid = otherDroide;