function getGiftsToRefill(a1, a2, a3) {
    const stores = [...new Set([...a1, ...a2, ...a3])]

    return stores.filter((gift) => {
      return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
    })
  }

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
console.log(getGiftsToRefill(a1, a2, a3));