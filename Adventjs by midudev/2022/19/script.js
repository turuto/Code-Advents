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

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
