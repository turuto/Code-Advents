export default function printTable(gifts) {
    const CHARS = {
        TOP: '+',
        BOTTOM: '*',
        HORIZONTAL: '-',
        VERTICAL: '|',
    };
    const LITERALS = {
        GIFT: 'Gift',
        QUANTITY: 'Quantity',
    };
    const CELLPADDING = 1;
    const BORDERWIDTH = 1;

    const header = { name: LITERALS.GIFT, quantity: LITERALS.QUANTITY };
    const dataToPrint = [header, ...gifts];

    const nameLengths = dataToPrint.map((gift) => gift.name.length);
    const maxNameLength = Math.max(...nameLengths);

    const quantityLengths = dataToPrint.map(
        (gift) => gift.quantity.toString().length
    );
    const maxQuantityLength = Math.max(...quantityLengths);

    const rowLength =
        maxNameLength + maxQuantityLength + CELLPADDING * 4 + BORDERWIDTH * 3;

    const borderTop = CHARS.TOP.repeat(rowLength);
    const borderBottom = CHARS.BOTTOM.repeat(rowLength);
    const separator = {
        name: CHARS.HORIZONTAL.repeat(maxNameLength),
        quantity: CHARS.HORIZONTAL.repeat(maxQuantityLength),
    };
    dataToPrint.splice(1, 0, separator);

    const createRow = (item) => {
        const SPACE = ' ';
        const spacesAfterName = maxNameLength - item.name.length;
        const nameWithSpaces = item.name + SPACE.repeat(spacesAfterName);
        const spacesAfterQuantity =
            maxQuantityLength - item.quantity.toString().length;
        const quantityWithSpaces =
            item.quantity + SPACE.repeat(spacesAfterQuantity);
        const result = `| ${nameWithSpaces} | ${quantityWithSpaces} |\n`;

        return result;
    };

    let finalTable = borderTop + '\n';
    dataToPrint.forEach((item) => {
        return (finalTable += createRow(item));
    });
    finalTable += borderBottom;

    return finalTable;
}

console.log(
    printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 },
    ])
);
