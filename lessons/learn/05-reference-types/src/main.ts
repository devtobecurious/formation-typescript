// string, number, boolean

// type array
const array = [1, 2];

function calc(arr: number[]) {
    arr[0] = 0;
}

calc(array);
console.info(array);


// type object
const wookie1 = {
    surname: 'wookie'
};
function updateWookie(wook: {surname: string}) {
    wook.surname = 'Chewie';
}
updateWookie(wookie1);

console.info(wookie1);