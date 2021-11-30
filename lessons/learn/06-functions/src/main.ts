function printCoords(point: { x: number, y: number }) {
    console.info(point);
}

function printCoordsOpt(point: { x: number, y?: number }) {
    console.info(point);
}

printCoords({ x: 1, y: 2 });
printCoordsOpt({ x: 1, y: 2 });
printCoordsOpt({ x: 1 });

//-------------------------------------------------------------

function computeSumFn(values: number[], log: Function): number {
    let result: number = 0;
    values.forEach(item => result += item);

    log(result);

    return result;
}

function computeSum(values: number[], log: (message: string | number) => void): number {
    let result: number = 0;
    values.forEach(item => result += item);

    log(result);

    return result;
}

type Logger = (message: string | number) => void;
function computeSumTyped(values: number[], log: Logger): number {
    let result: number = 0;
    values.forEach(item => result += item);

    log(result);

    return result;
}


computeSumFn([1, 5, 7], console.info);
computeSum([1, 5, 7], console.info);
computeSumTyped([1, 5, 7], console.info);

interface WithString {
    name: string;
    age: number;

    sayHello(): void;
}

type SomeConstructor = { new (s: string, a: number): WithString };
   
class WookieWithString implements WithString {
    constructor(public name: string, public age: number) {}

    sayHello() {
        console.info('hello', this.age);
    }
}
   

function makeWookie(ctor: SomeConstructor) {
  return new ctor("chewie", 18);
}

const wookie = makeWookie(WookieWithString);
wookie.sayHello();


// -------- OVERLOADS --------------
function makeDate(timestamp: number): Date; // overload
function makeDate(m: number, d: number, y: number): Date; // overload
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { // implementation
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3); // pas d'overload ici à deux éléments


// Comparer les fonctions
let x = (value: number) => value * 1.2;
let y = (value: number, tva: number) => value * tva;

// x = y; // pas possible
y = x;