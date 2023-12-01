export default function findFirstRepeated(gifts) {
    const uniqueGifts = [...new Set(gifts)];
    if (uniqueGifts.length === gifts.length) {
        return -1;
    }

    const getOccurrencesOfGift = (item, arr) => {
        const indexes = [];
        let idx = arr.indexOf(item);
        while (idx !== -1) {
            indexes.push(idx);
            idx = arr.indexOf(item, idx + 1);
        }
        return indexes;
    };
    const occurrences = gifts.map((gift) => {
        const giftOccurrences = getOccurrencesOfGift(gift, gifts);
        return {
            giftId: gift,
            occurrences: giftOccurrences,
        };
    });
    const giftsWithSeveralOccurrences = occurrences.filter(
        (item) => item.occurrences.length > 1
    );

    const compareSecondOccurrence = (a, b) => {
        return a.occurrences[1] - b.occurrences[1];
    };

    const sortedGiftsWithSeveralOccurrences = giftsWithSeveralOccurrences.sort(
        compareSecondOccurrence
    );

    return sortedGiftsWithSeveralOccurrences[0].giftId;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
