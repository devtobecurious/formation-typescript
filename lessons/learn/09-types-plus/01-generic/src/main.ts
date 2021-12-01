/** GENERIC CLASS */
export class Ship<Type> {
    power !: Type;
}

/** GENERIC INTERFACE */

export interface Weapon<Type> {
    power: Type;
}

export interface Power {
    value: number;
}

export class ShortWeapon implements Weapon<string> {
    power !: string;
}

type PowerWeapon = Weapon<Power>;
const power: PowerWeapon = {
    power: {
        value: 12
    }
}


/** GENERIC FUNCTION */
function setWeaponPower<Type>(weapon: Weapon<Type>, power: Type) {
    weapon.power = power;
}
setWeaponPower<Power>(power, { value: 14 });


//-----------------------------------------------------
/** GENERIC TYPE FUNCTION */

function identity<Type>(arg: Type): Type {
    return arg;
}

// Déclaration d'un type générique de fonction, qui a identity comme corps
let ident: <MyType>(arg: MyType) => MyType = identity;

// peut s'écrire ainsi aussi  avec un object literal
let identBis : { <Type>(arg: Type): Type } = identity;

// peut s'écrire aussi comme ça en interface
interface IdentInterface {
    <Type>(arg: Type): Type;
};

let identTres : IdentInterface = identity;

// et aller encore plus loin
interface IdentInterfaceQuat<Type> {
    (arg: Type): Type;
};

let identQuat : IdentInterfaceQuat<string> = identity;

/** CONSTRAINTS */
interface WithPower {
    power: number;
}
function setPower<Type extends WithPower>(item: Type) {
    item.power = 12;
}
setPower({ power: 15});