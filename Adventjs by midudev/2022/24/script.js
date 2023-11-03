export default function canExit(maze) {
    const totalRows = maze.length;
    const totalCols = maze[0].length;

    if (totalRows === 0) {
        return false;
    }
    const flatMaze = maze.flat();

    const createTree = (flatMaze) => {
        const tree = [];
        flatMaze.forEach((item, index) => {
            const value = item;
            const top = index - totalCols >= 0 ? index - totalCols : null;
            const bottom =
                index + totalCols < flatMaze.length ? index + totalCols : null;
            const left = index % totalCols === 0 ? null : index - 1;
            const right =
                index % totalCols === totalCols - 1 ? null : index + 1;

            const node = {
                value,
                top,
                bottom,
                left,
                right,
            };
            tree.push(node);
        });

        return tree;
    };

    const depthFirstSearch = (currentNode, visited = new Set()) => {
        // If the current node is the target node, return true
        if (tree[currentNode].value === 'E') {
            return true;
        }

        // If the current node has been visited, return false
        if (visited.has(currentNode)) {
            return false;
        }

        // Mark the current node as visited
        visited.add(currentNode);

        // Check each direction
        const directions = ['top', 'bottom', 'left', 'right'];
        for (let direction of directions) {
            const neighborIndex = tree[currentNode][direction];
            // If the neighbor is not null and is not a wall, perform depthFirstSearch on the neighbor
            if (neighborIndex !== null && tree[neighborIndex].value !== 'W') {
                if (depthFirstSearch(neighborIndex, visited)) {
                    return true;
                }
            }
        }

        // If the target value is not found in any direction, return false
        return false;
    };

    const tree = createTree(flatMaze);
    const startingPoint = flatMaze.indexOf('S');

    const isSolvable = depthFirstSearch(startingPoint);
    return isSolvable;
}

console.log(
    canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
    ])
);
