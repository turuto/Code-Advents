export default function decorateTree(base) {
    const ORNAMENTS = ['B', 'R', 'P'];

    const findNextOrnament = (pair) => {
        let [a, b] = pair.split('');
        if (a === b) {
            return a;
        }
        return ORNAMENTS.filter((item) => item !== a && item !== b);
    };

    const generatePairs = (str) => {
        const letters = str.split('');
        const pairs = [];
        for (let i = 0; i < letters.length - 1; i++) {
            pairs.push(letters[i] + letters[i + 1]);
        }
        return pairs;
    };

    const createTreeRows = (str) => {
        if (str.length === 1) {
            return str;
        } else {
            const pairs = generatePairs(str);

            const newRow = pairs.map((pair) => findNextOrnament(pair)).join('');
            tree.push(newRow);
            createTreeRows(newRow);
        }
    };

    const removeSpaces = (str) => str.split(' ').join('');
    const insertSpaces = (str) => str.split('').join(' ');

    const tree = [];
    const flatBase = removeSpaces(base);
    tree.push(flatBase);
    createTreeRows(flatBase);
    const finalTree = tree.map((row) => insertSpaces(row)).reverse();
    return finalTree;
}


