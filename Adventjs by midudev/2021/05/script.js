function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const xmas = new Date('Dec 25, 2021');
    const dayInMilisecs = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((xmas.getTime() - date.getTime()) / dayInMilisecs);
    return diff
}

const date1 = new Date('Dec 1, 2021');
console.log(daysToXmas(date1)); // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
console.log(daysToXmas(date2)); // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
console.log(daysToXmas(date3)); // 1
const date4 = new Date("December 20, 2021 03:24:00");
console.log(daysToXmas(date4)); // 5
const date5 = new Date('Dec 25, 2021');
console.log(daysToXmas(date5)); // 0
const date61 = new Date('Dec 26, 2021');
console.log(daysToXmas(date61)); // -1
const date7 = new Date('Dec 31, 2021');
console.log(daysToXmas(date7)); // -6
const date8 = new Date('Jan 1, 2022 00:00:01');
// console.log(daysToXmas(date8)); // -7
const date9 = new Date('Jan 1, 2022 23:59:59');
// console.log(daysToXmas(date9)); // -7

