"use strict";
function printMatricule(id) {
    if (typeof id === "number") { // narrowing
        const result = id + 1;
    }
    else if (typeof id === "string") {
        const result = id.replace('1', '0');
    }
}
printMatricule('douze');
//printMatricule(true) => ne build pas
printMatricule(12);
function displayWarrior(x) {
    if (Array.isArray(x)) {
        x.forEach(item => console.info('several', item.power));
    }
    else {
        console.info(x.power, 'one');
    }
}
displayWarrior({ power: 1 });
displayWarrior([{ power: 1 }]);
