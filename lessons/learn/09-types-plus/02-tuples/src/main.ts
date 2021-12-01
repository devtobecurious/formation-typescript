// Avant tout : Notion de Array
// Il existe aussi : ReadonlyArray

interface Warrior {
    power: number;
    surname: string;
}

interface Jedi {
    power: number;
}

function displayWarrior(values: Array<Warrior>) {
    values.forEach(item => console.info(item));
}
displayWarrior(new Array<Warrior>({ power: 12, surname: '12' }, { power: 123, surname: '123' }));
displayWarrior([{ power: 12, surname: '12' }, { power: 123, surname: '123' }]);

/*** Tuples */
type WariorAndJedi = [Warrior, Jedi?];
const items: WariorAndJedi = [{ power: 12, surname: '12' }, { power: 15}]
const items2: WariorAndJedi = [{ power: 12, surname: '12' }]

const [warior, jedi] = items;
console.info(warior);
console.info(jedi);


type WariorAndJedis = [Warrior, ...Jedi[]];
const list: WariorAndJedis = [{ power: 12, surname: '12' }, { power: 15}, { power: 15}, { power: 15}, { power: 15}];
console.info(list.length);
