export default function dryNumber(dry, numbers) {
    const allNumbers = new Array(numbers)
        .fill(0)
        .map((item, index) => (index + 1).toString());

    const numbersWithDryCharacter = allNumbers.filter(
        (item) => item.indexOf(dry) !== -1
    );

    const result = numbersWithDryCharacter.map((item) => parseInt(item));

    return result;
}

console.log(dryNumber(1, 15));
