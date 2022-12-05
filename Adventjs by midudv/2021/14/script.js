function missingReindeer(ids) {
    let missing;
    const hasZero = ids.includes(0);
    const add = (accumulator, item) => {
        return accumulator + item;
    }
    const sum = ids.reduce(add, 0);
    const max = ids.sort((a, b) => b - a)[0]; // Ascending sorting and get the first one
    const perfectSum = (max * (max + 1)) / 2; // the sum of all numbers between 0 and max //https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF

    if (!hasZero) {
        missing = 0; // the missing is the first
    } else if (sum === perfectSum) {
        missing = max + 1; // we miss the last
    } else {
        missing = perfectSum - sum; // the missing is in the middle
    }

    return missing
}

// console.log(missingReindeer([0, 2, 3])) // -> 1
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
// console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
// console.log(missingReindeer([3, 0, 1])) // -> 2
// console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
// console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([1])) // -> 0 (¡es el primero el que falta!)


