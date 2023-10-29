export default function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map((gift) => {
        let max = gift.weight;
        let reindeers = reindeerTypes
            .map((x) => [x.type, x.weightCapacity])
            .filter((x) => x[1] < max)
            .sort((a, b) => a[1] - b[1]); // Menor a Mayor

        let res = reindeers.map(([type]) => ({
            type,
            num: 0,
        }));

        reindeers.map((_, i) => {
            let sliced = reindeers.slice(0, reindeers.length - i);
            let sum = sliced.reduce((sum, e) => sum + e[1], 0);
            sliced.map((_, i) => {
                res[i].num += Math.floor(max / sum);
            });
            max %= sum;
        });

        return {
            country: gift.country,
            reindeers: res.reverse(),
        };
    });
}

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 },
];

const gifts = [
    { country: 'Colombia', weight: 30 },
    //{ country: 'España', weight: 20 },
];

console.log(howManyReindeers(reindeerTypes, gifts));
