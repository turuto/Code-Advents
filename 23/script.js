function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
    return false
}

const from = 'BAL'
const to = 'LIB'
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from = 'CON'
const to = 'JUU'
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from = 'MMM'
const to = 'MID'
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from = 'AA'
const to = 'MID'
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud