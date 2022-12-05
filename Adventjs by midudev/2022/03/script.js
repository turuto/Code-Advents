function distributeGifts(packOfGifts, reindeers) {
    const giftWeights = packOfGifts.reduce((total, gift) => total + gift.length, 0);
    const reindeersCapacity = reindeers.reduce((total, reindeer) => total + reindeer.length * 2, 0);
    const packsToDeliver = Math.floor(reindeersCapacity/giftWeights);

    return packsToDeliver;
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2