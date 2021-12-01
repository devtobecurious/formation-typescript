function prepare() {
    console.info('0. prepare');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}

function chooseWeapon() {
    console.info('1. chooseWeapon');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}

function logIt(constructor: Function) {
    console.log(constructor);
}

type Ctor = {
    new (...args: any[]): {} 
}

function reportableClassDecorator<T extends Ctor>(constructor: T) {
    return class extends constructor {
      power = 12;
    };
  }

function uppercase (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
        enumerable: false,
        configurable: false,

        get: function() {
            return descriptor.get?.call(this).toUpperCase();
        }
    };
}

@reportableClassDecorator 
@logIt
export class Warrior {
    @prepare()
    @chooseWeapon()
    attack() {
        console.info('3. attack');
    }

    @uppercase
    get name(): string {
        return 'Aloha';
    }
}

const warrior = new Warrior();
warrior.attack();
console.log((warrior as any).power);

console.log(warrior.name);