export default function checkStepNumbers(systemNames, stepNumbers) {
    const systems = [...new Set(systemNames)];
    const indexes = [];
    systems.forEach((system) => {
        const result = systemNames
            .map((item, i) => (item === system ? i : ''))
            .filter(String);
        indexes.push(result);
    });

    const valuesBySteps = indexes.map((item) => {
        return item.map((element) => stepNumbers[element]);
    });
    const isSorted = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    return valuesBySteps.every((arr) => isSorted(arr));
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'];
const stepNumbers = [1, 33, 10, 2, 33, 20];

console.log(checkStepNumbers(systemNames, stepNumbers));
