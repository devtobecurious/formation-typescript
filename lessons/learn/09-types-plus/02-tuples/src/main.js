"use strict";
// Avant tout : Notion de Array
// Il existe aussi : ReadonlyArray
function displayWarrior(values) {
    values.forEach(item => console.info(item));
}
displayWarrior(new Array({ power: 12, surname: '12' }, { power: 123, surname: '123' }));
displayWarrior([{ power: 12, surname: '12' }, { power: 123, surname: '123' }]);
const items = [{ power: 12, surname: '12' }, { power: 15 }];
const items2 = [{ power: 12, surname: '12' }];
const [warior, jedi] = items;
console.info(warior);
console.info(jedi);
const list = [{ power: 12, surname: '12' }, { power: 15 }, { power: 15 }, { power: 15 }, { power: 15 }];
console.info(list.length);
