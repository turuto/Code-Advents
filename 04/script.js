function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    const space = '_',
        leaf = '*',
        trunk = '#',
        br = '\n';
    const longestLine = 1 + (height - 1) * 2;
    let tree = '';

    for (let i = 1; i <= height; i++) {
        tree += drawLine(i);
    }

    tree += drawBase();

    function drawLine(level) {
        const lineLength = 1 + (level - 1) * 2;
        const numberOfSpaces = (longestLine - lineLength) / 2;
        const line = drawChars(space, numberOfSpaces) + drawChars(leaf, lineLength) + drawChars(space, numberOfSpaces);
        return line + br;
    }
    function drawBase() {
        const numberOfSpaces = (longestLine - 1) / 2;
        const baseLine = drawChars(space, numberOfSpaces) + trunk + drawChars(space, numberOfSpaces);

        return baseLine + br + baseLine;
    }

    function drawChars(char, amount) {
        let str = '';

        for (let i = 1; i <= amount; i++) {
            str += char;
        }
        //
        return str;
    }

    return tree;
}

console.log(createXmasTree(5));