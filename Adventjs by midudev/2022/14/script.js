export default function getOptimalPath(path) {
    if (path.length === 0) {
        return 0;
    }

    //Creates a Binary Tree from an array
    const buildBinaryTree = (arr, row = 0, col = 0) => {
        if (row >= arr.length || col >= arr[row].length) {
            return null;
        }

        const node = {
            val: arr[row][col],
            left: buildBinaryTree(arr, row + 1, col),
            right: buildBinaryTree(arr, row + 1, col + 1),
        };
        return node;
    };

    // Perform depth-first search to find the minimal path
    const depthFirstSearch = (node, sum) => {
        if (!node) {
            return;
        }

        sum += node.val;
        if (!node.left && !node.right) {
            minSum = Math.min(minSum, sum);
        }

        depthFirstSearch(node.left, sum);
        depthFirstSearch(node.right, sum);
    };

    const root = buildBinaryTree(path);
    // Initialize the minimum sum to a large value
    let minSum = Infinity;
    // Perform depth-first search to find the minimal path sum
    depthFirstSearch(root, 0);

    return minSum;
}

// Example usage
const path = [[1], [2, 4], [10, 30, 50], [20, 40, 60, 80]];
const minimalPathSum = getOptimalPath(path);
console.log(minimalPathSum, typeof minimalPathSum); // Output: 11
