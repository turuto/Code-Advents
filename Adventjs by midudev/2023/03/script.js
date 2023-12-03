export default function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return '';

    const longList = original.length > modified.length ? original : modified;
    const shortList = original.length < modified.length ? original : modified;

    for (let i = 0; i < longList.length; i++) {
        if (longList[i] !== shortList[i]) return longList[i];
    }
}

const original = 'stepfor';
const modified = 'stepor';
console.log(findNaughtyStep(original, modified)); // 'f'
