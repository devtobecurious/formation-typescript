class Character {
    constructor(public surname: string) {

    }
}

class Wookie extends Character {
    constructor(surname: string) {
        super(surname);
    }

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
}
const weapon = new Weapon(1, 'Blaster');


const wookie = new Wookie('ddd');
wookie.name = 'test';