function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    const cardPrice = 250;
    const discount = 0.75;
    const ticketPrice = 12;

    const accumulatedDisc = n => {
        let accumulation = 0
        for (let i = 1; i <= n; i++) {
            accumulation += Math.pow(discount, i);
        }
        return accumulation;
    }
    const fidelityBill = cardPrice + ticketPrice * accumulatedDisc(times);

    const normalBill = ticketPrice * times;

    return fidelityBill < normalBill;
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
// console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
for (let i = 1; i <= 100; i++) {
    console.log(i, shouldBuyFidelity(i));
}