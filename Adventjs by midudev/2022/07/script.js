function getGiftsToRefill(a1, a2, a3) {
    const allWarehouses = a1.concat(a2).concat(a3);
    const singleProds =[... new Set(allWarehouses)];
    const objectsToRefill =[];
    const counts =singleProds.map(product => {
        let count = 0;
        let isInWare1 = a1.includes(product);
        let isInWare2 = a2.includes(product);
        let isInWare3 = a3.includes(product);
        if (isInWare1) {
            count ++;
        }
        if (isInWare2) {
            count ++;
        }
        if (isInWare3) {
            count ++;
        }
        if (count === 1) {
            objectsToRefill.push(product)
        }
    })
    return objectsToRefill;
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
console.log(getGiftsToRefill(a1, a2, a3));