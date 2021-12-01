"use strict";
/** GENERIC INTERFACE */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortWeapon = void 0;
class ShortWeapon {
}
exports.ShortWeapon = ShortWeapon;
const power = {
    power: {
        value: 12
    }
};
/** GENERIC FUNCTION */
function setWeaponPower(weapon, power) {
    weapon.power = power;
}
setWeaponPower(power, { value: 14 });
//-----------------------------------------------------
/** GENERIC TYPE FUNCTION */
function identity(arg) {
    return arg;
}
// Déclaration d'un type générique de fonction, qui a identity comme corps
let ident = identity;
// peut s'écrire ainsi aussi  avec un object literal
let identBis = identity;
;
let identTres = identity;
;
let identQuat = identity;
