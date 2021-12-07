/**
 * Let's make a game 🕹
 */

type DirectionsType = {
    [direction : string] : Function;
}

const position = { x : 0, y : 0 };

function move(direction : 'up' | 'down' | 'left' | 'right') : void {
    const directions: DirectionsType = {
        'up' : () => position.y += 1,
        'down' : () => position.y -= 1,
        'left' : () => position.x -= 1,
        'right' : () => position.x += 1
    }

    if(directions[direction]) {
        directions[direction]()
    } else {
        throw new Error(`
        Unknown Direction : ${direction}
        Please use only Four directions (up, down, left, right)
        `);
    }
};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

