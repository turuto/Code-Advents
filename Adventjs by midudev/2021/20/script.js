function pangram(letter) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const removeDiacritics = txt => txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // the above line is taken from https://es.stackoverflow.com/questions/62031/eliminar-signos-diacr%C3%ADticos-en-javascript-eliminar-tildes-acentos-ortogr%C3%A1ficos

    const normalicedLetter = removeDiacritics(letter).toLowerCase();
    const areAllLetterUsed = ALPHABET.every(chr => normalicedLetter.indexOf(chr) >= 0);
    const hasNTilde = letter.indexOf('ñ') >= 0

    return (areAllLetterUsed && hasNTilde);
}

// console.log(pangram('aeiouáéíóúñäëïöü')); // false
// console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')); // true

// console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
// console.log(pangram('De la a a la z, nos faltan letras')); // false