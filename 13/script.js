function wrapGifts(gifts) {
    const WRAPPER = '*';

    const drawChars = function (char, amount) {
        let str = '';

        for (let i = 1; i <= amount; i++) {
            str += char;
        }
        return str;
    }

    let longestLine = gifts => {
        let maxLength = gifts[0].length;
        gifts.forEach(item => {
            if (item.length > maxLength) {
                maxLength = item.length;
            }
        });
        return (maxLength);
    }

    const drawBase = drawChars(WRAPPER, longestLine(gifts) + 2);

    let wrappedGifts = [];
    wrappedGifts.push(drawBase);
    gifts.forEach(item => {
        wrappedGifts.push(WRAPPER + item + WRAPPER);
    });
    wrappedGifts.push(drawBase);

    return wrappedGifts;
}

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));