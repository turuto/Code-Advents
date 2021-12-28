function canMouseEat(direction, game) {
    const MOUSE = 'm',
        FOOD = '*';
    const columns = game[0].length,
        MOVEMENTS = {
            up: -columns,
            down: columns,
            left: -1,
            right: 1,
        }

    const flattenedGame = game.flat();

    const mousePos = flattenedGame.indexOf(MOUSE);
    const newPos = mousePos + MOVEMENTS[direction];

    return flattenedGame[newPos] === FOOD;
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]
// console.log(room);
// console.log(canMouseEat('up', room));   // false
// console.log(canMouseEat('down', room));   // true
// console.log(canMouseEat('right', room));   // false
// console.log(canMouseEat('left', room));   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

console.log(room2);
console.log(canMouseEat('up', room2));   // false
console.log(canMouseEat('down', room2));   // false
console.log(canMouseEat('right', room2));   // true
console.log(canMouseEat('left', room2));   // false