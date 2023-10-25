export default function sortToys(toys, positions) {
    const calculateRealPositions = (positions) => {
        const minPosition = Math.min(...positions);
        const realPositions = positions.map((item) => item - minPosition);
        return realPositions;
    };

    const realPositions = calculateRealPositions(positions);
    const sortedArray = [];
    toys.forEach((toy, index) => {
        const newIndex = realPositions[index];
        sortedArray[newIndex] = toy;
    });
    return sortedArray;
}

const moreToys = ['ball', 'doll', 'car', 'puzzle'];
const morePositions = [2, 3, 1, 0];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
