function maxProfit(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let bought = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            let sold = prices[j];
            let profit = sold - bought;

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit <= 0 ? -1 : maxProfit;
}
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)
