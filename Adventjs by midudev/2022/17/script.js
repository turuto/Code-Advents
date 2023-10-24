export default function carryGifts(gifts, maxWeight) {
    const bags = [];
    const canuseLastBag = (num, limit) => {
        if (bags.length === 0) {
            return false;
        }
        const lastBag = bags[bags.length - 1];
        const spaceOccupied = lastBag.reduce(
            (acc, item) => acc + item.length,
            0
        );
        const isRoom = limit - spaceOccupied >= num;
        return isRoom;
    };

    const allItemsAreTooBig = gifts.every((gift) => gift.length > maxWeight);
    if (allItemsAreTooBig) return bags;

    gifts.forEach((gift) => {
        console.log('checking room for ', gift);
        const isRoomEnough = canuseLastBag(gift.length, maxWeight);
        if (!isRoomEnough) {
            const newBag = [];
            bags.push(newBag);
        }
        const lastBag = bags[bags.length - 1];
        lastBag.push(gift);
    });

    const flatBags = bags.map((bag) => bag.join(' '));
    return flatBags;
}

// Example usage
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
