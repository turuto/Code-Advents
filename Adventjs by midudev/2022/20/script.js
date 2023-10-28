export default function howManyReindeers(reindeerTypes, gifts) {
    const refineList = (list) => {
        const currentDistribution = sortedReindeerTypes.map((deer) =>
            countDeer(deer, list)
        );

        const fixedDistribution = optimizeList(currentDistribution);
        //need to format the list
        const formattedList = fixedDistribution
            .map((item, index) => {
                const finalObj = {
                    type: sortedReindeerTypes[index].type,
                    num: item,
                };
                return finalObj;
            })
            .filter((item) => item.num > 0);

        return formattedList;
    };
    const optimizeList = (arr) => {
        let isSorted = isSortedAscending(arr);
        const exchangeRates = getExchangeRates();

        while (!isSorted) {
            for (let i = 0; i < arr.length - 1; i++) {
                let item = arr[i];
                let nextItem = arr[i + 1];
                const exchangeRate = exchangeRates[i];

                if (item > nextItem) {
                    arr[i] = item - 1;
                    arr[i + 1] = nextItem + exchangeRate;
                }
            }
            isSorted = isSortedAscending(arr);
        }

        return arr;
    };
    const getExchangeRates = () => {
        const result = [];
        for (let i = 0; i < sortedReindeerTypes.length - 1; i++) {
            const rate =
                sortedReindeerTypes[i].weightCapacity /
                sortedReindeerTypes[i + 1].weightCapacity;
            result.push(rate);
        }
        return result;
    };
    const isSortedAscending = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    const countDeer = (item, list) => {
        return list.filter((value) => value === item).length;
    };

    const formatReindeerList = (reindeerList) => {
        return reindeerList;
    };

    const createCountryShipment = (data) => {
        const { country, weight: total } = data;

        const reindeerList = [];

        let remaining = total;
        // first round: getting the highest choices
        console.log('SORTED TYOES', sortedReindeerTypes);

        for (let reindeer of sortedReindeerTypes) {
            while (remaining >= reindeer.weightCapacity) {
                reindeerList.push(reindeer);
                remaining -= reindeer.weightCapacity;
            }
        }
        // second round: refine the list
        const refinedList = refineList(reindeerList);
        const finalObj = {
            country,
            reindeers: formatReindeerList(refinedList),
        };
        return finalObj;
    };
    const sortedReindeerTypes = reindeerTypes.sort((a, b) => {
        if (a.weightCapacity > b.weightCapacity) {
            return -1;
        }
        if (a.weightCapacity < b.weightCapacity) {
            return 1;
        }
        return 0;
    });
    const result = gifts.map((obj) => createCountryShipment(obj));
    return result;
}

const reindeerTypes = [
    { type: 'Diesel', weightCapacity: 1 },
    { type: 'Gasoline', weightCapacity: 8 },
];

const gifts = [
    { country: 'Colombia', weight: 50 },
    { country: 'España', weight: 20 },
];

console.log(howManyReindeers(reindeerTypes, gifts));
