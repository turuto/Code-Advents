function listGifts(letter) {
    console.clear();
    const trimmedLetter = letter.trim()
        .replace(/  +/g, ' ');
    const giftsArr = trimmedLetter.split(' ')
        .filter(gift => gift.indexOf('_') !== 0);
    const result = {};

    for (const gift of giftsArr) {
        result[gift] = result[gift] ? result[gift] += 1 : 1;
    }
    return result;
}