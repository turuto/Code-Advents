function getMaxGifts(giftsCities, maxGifts, maxCities) {
    // Devuelve combinaciones de k elementos sin repeticion de un array
    const getUniqueCombinations = function (arr, k) {
        // Si k es mayor que los elementos del array o menor que cero, no hay solucion
        if (k > arr.length || k <= 0) {
            return [];
        }

            // si k es el total del array, solo hay una combinacion
        if (k == arr.length) {
            return [arr];
        }

        // si K es 1 cada combinacion es el unico elemento
        const combs = []
        if (k == 1) {
            for (let i = 0; i < arr.length; i++) {
                combs.push([arr[i]]);
            }
            return combs;
        }

        // Assert {1 < k < arr.length}
        for (let i = 0; i < arr.length - k + 1; i++) {
            let head, tailcombs;
            // head es un array con solo elemento actual
            head = arr.slice(i, i + 1);
                // De manera recursiva obtenemos todas las combinaciones
                // para los subconjuntos del elemento en adelante
            tailcombs = getUniqueCombinations(arr.slice(i + 1), k - 1);
                // Y luego unimos los arrays de las combinaciones parciales con el elemento actual
            for (j = 0; j < tailcombs.length; j++) {
                combs.push(head.concat(tailcombs[j]));
            }
        }
        return combs;
    }

    console.log('EMPEZANDO',giftsCities, maxGifts);
    if (maxCities > giftsCities.length) {
        maxCities = giftsCities.length;
    }
    const combinations = getUniqueCombinations(giftsCities, maxCities);
    const combinationsWithSum = [];
    combinations.forEach(comb => {
        const sum = comb.reduce((total,item)=> total += item, 0);
        combinationsWithSum.push({sum: sum, comb: comb});
    });
    const sortedCombinationsWithSum=combinationsWithSum.sort((a,b) => a.sum - b.sum);
    // console.log(combinationsWithSum);
    console.log(sortedCombinationsWithSum)
    if (sortedCombinationsWithSum.length === 1) {
         console.log('SOLO HAY UNA COMBINACION')
        if (sortedCombinationsWithSum[0].sum <= maxGifts) {
            // console.log('EL TOPE NECESARIO ES MENOR QUE MAXGIFTS, devolvemos ', sortedCombinationsWithSum[0].sum)
            return sortedCombinationsWithSum[0].sum;
        } else {
            // console.log('EL TOPE NECESARIO ES MAYOR QUE MAXGIFTS, devolvemos')
            if (maxCities > 1) {
                return getMaxGifts(giftsCities, maxGifts, maxCities - 1);
            } else {
                return 0
            }
        }
    } else {
        console.log('HAY MUCHAS COMBINACIONES: ', sortedCombinationsWithSum)
        for (let i = 0; i < sortedCombinationsWithSum.length; i++) {
            let comb = sortedCombinationsWithSum[i];
            console.log('comprobando', comb.sum, ' con ', maxGifts)
            if (comb.sum > maxGifts) {
                console.log('LA SUM es MAYOR')
                if (i > 0) {
                    const prev = sortedCombinationsWithSum[i-1].sum;
                    return prev;
                } else {
                    if (maxCities > 1) {
                        return getMaxGifts(giftsCities, maxGifts, maxCities - 1);
                    } else {
                        return 0
                    }
                }
            } else {
                console.log('LA SUM NO ES MAYOR')
                if (i === sortedCombinationsWithSum.length - 1) {
                    console.log('estamos al final de la cola', comb.sum);
                    if (maxCities > 1) {
                        return getMaxGifts(giftsCities, maxGifts, maxCities - 1);
                    } else {
                        return comb.sum
                    }
                }
            }
        }
    }
}


// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)) // 100