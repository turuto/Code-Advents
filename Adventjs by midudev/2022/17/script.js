export default function carryGifts(gifts, maxWeight) {
    const bags = [];
    const shouldUseNewBag = (num, limit) => {
        if (bags.length === 0) {
            return true;
        }

        const lastBag = bags[bags.length - 1];
        const busySpace = lastBag.reduce((acc, item) => acc + item.length, 0);
        const notEnoughRoom = limit - busySpace < num;
        return notEnoughRoom;
    };

    const allItemsAreTooHeavy = gifts.every((gift) => gift.length > maxWeight);
    if (allItemsAreTooHeavy) return bags;

    gifts.forEach((gift) => {
        const newBagIsNeeded = shouldUseNewBag(gift.length, maxWeight);
        if (newBagIsNeeded) bags.push([]);

        const lastBag = bags[bags.length - 1];
        lastBag.push(gift);
    });

    const flatBags = bags.map((bag) => bag.join(' '));
    return flatBags;
}

// Example usage
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
