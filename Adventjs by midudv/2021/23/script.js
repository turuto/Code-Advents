function canReconfigure(from, to) {
    const before = from.split('');
    const after = to.split('');
    let rosetta = new Map();

    if (before.length !== after.length) {
        // Unable to form proper key-value pairs
        return false;
    } else {
        for (const [index, item] of before.entries()) {
            const storedKey = rosetta.get(item);
            const value = after[index];

            console.log(item, value)

            if (!storedKey) {
                // The key is not yet in rosetta
                console.log('no teniamos esa key');
                const isValueAlreadyUsed = Array.from(rosetta.values()).includes(value);

                if (!isValueAlreadyUsed) {
                    // and the value is not used for another letter
                    // so we store the pair for the next iteration
                    console.log('ni esa value. Almacenamos')
                    rosetta.set(item, value);
                } else {
                    // It's not allowed to have the same value for different keys
                    console.log('ese value ya estaba para otra key')
                    return false;
                }
            } else {
                if (storedKey !== to[index]) {
                    console.log('ese key tenía otro value')
                    // It's not allowed for a key to have two different values
                    return false
                }
            }
        }
    }
    return true;
}


function decode(from, to) {
    console.log(from, to);
    return from.length === to.length && new Set([...from]).size === new Set([...to]).size;
}
console.log(decode('BAB', 'MLM'));
console.log(decode('BAB', 'MML'));
//console.log(canReconfigure('BAB', 'MLM'));


const from = 'BAL'
const to = 'LIB'
//console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from1 = 'CON'
const to1 = 'JUU'
//console.log(canReconfigure(from1, to1)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from2 = 'MMM'
const to2 = 'MID'
//console.log(canReconfigure(from2, to2)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from3 = 'AA'
const to3 = 'MID'
//console.log(canReconfigure(from3, to3)); // false -> no tiene la misma longitud