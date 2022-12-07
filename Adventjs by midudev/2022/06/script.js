function createCube(size) {
    const frontUpperModule = '/\\';
    const sideUpperModule = '_\\';
    const frontLowerModule = '\\/';
    const sideLowerModule = '_/';
    let upperHalf = '';
    let lowerHalf = '';
    for (let i = 1; i <= size; i++) {
        const startPos = size - i + 1;
        const front = new Array (size + 1);
            front.fill(' ', 1 , startPos)
            .fill(frontUpperModule, startPos)
            .shift();
        const side = new Array (size).fill(sideUpperModule);
        upperHalf += (front.join('') + side.join('')) + '\n';
    }
    for (let i = size; i >= 1; i--) {
        const lineBreak = (i !== 1) ? '\n':'';
        const startPos = size - i + 1;
        const front = new Array (size + 1);
            front.fill(' ', 1 , startPos)
            .fill(frontLowerModule, startPos)
            .shift();
        const side = new Array (size).fill(sideLowerModule);
        lowerHalf += (front.join('') + side.join('')) + lineBreak;
    }
    return upperHalf + lowerHalf;
}

  console.log(createCube(3));
  console.log(createCube(2));
  console.log(createCube(1));