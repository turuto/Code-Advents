function getMinJump(obstacles) {
    const sortedObstacles = obstacles.sort((a, b) => a - b);
    const finalObstacle = sortedObstacles[sortedObstacles.length - 1];
    let jumps,
        hit,
        result;

    const computeSteps = (jump, max) => {
        let steps = [0];
        for (i = 1; i <= max + 1; i++) {
            steps[i] = steps[i - 1] + jump;
        }
        return steps;
    }

    for (let i = 1; i <= finalObstacle + 1; i++) {
        jumps = computeSteps(i, finalObstacle);
        hit = jumps.some(jump => sortedObstacles.includes(jump));
        if (!hit) {
            result = i;
            break;
        }
    }

    return result;
}

console.log(getMinJump([5, 3, 6, 7, 9])); // -> 4

console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
