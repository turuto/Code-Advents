function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let combs = [];
    combs.push([], [giftsCities[0]]);
    giftsCities.shift()

    giftsCities.map(x => {
        const newList = combs.map(comb => {
            let _comb = [...comb]
            if (_comb.length < maxCities) {
                _comb.push(x)
            }
            return _comb
        })
        combs = combs.concat(newList)
    })

    combs.shift()

    return Math.max(
        ...combs.map(x => {
            let sum = x.reduce((total, num) => total + num)
            return sum > maxGifts ? 0 : sum
        })
    )
}


// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)) // 100