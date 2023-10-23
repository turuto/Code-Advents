export default function fixLetter(letter) {
    // Eliminar múltiples espacios en blanco y dejar sólo uno
    const removeMultipleSpaces = (str) => str.replace(/\s+/g, ' ');

    // Dejar un espacio después de cada coma
    const ensureOneSpaceAfterComma = (str) => str.replace(/,(?!\s)/g, ', ');

    // Quitar espacios antes de coma o punto
    const removeSpaceBeforePunctuation = (str) => {
        return str.replace(/\s+([,.?])/g, '$1');
    };

    // Las preguntas sólo deben terminar con un signo de interrogación
    const removeMultipleQuestionMarks = (str) => str.replace(/\?+/g, '?');

    // La primera letra de cada oración debe estar en mayúscula
    const beginSentenceWithUppercase = (str) => {
        let fixedStr = '';

        const firstChar = str.charAt(0).toUpperCase();
        fixedStr = firstChar + str.slice(1);

        const endOfSentencePattern = /[.!?]\s+[A-Za-z]/g;
        const occurrences = fixedStr.match(endOfSentencePattern);
        if (occurrences) {
            const fixedOccurrences = occurrences.map((item) => {
                const lastChar = item.substr(-1);
                const remainingText = item.slice(0, -1);
                return remainingText + lastChar.toUpperCase();
            });

            fixedOccurrences.forEach((fixedItem, index) => {
                fixedStr = fixedStr.replace(occurrences[index], fixedItem);
            });
        }

        return fixedStr;
    };

    // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    const writeSantaClausProperly = (str) => {
        return str.replace(/santa claus/gi, 'Santa Claus');
    };

    // Poner un punto al final de la frase si no tiene puntuación
    const addPeriodAtTheEndIfNeeded = (str) => {
        const regex = /[.?!]\s*$/;
        const punctuationNeeded = regex.test(str);
        return punctuationNeeded ? str : str + '.';
    };

    let result = letter.trim();
    result = removeMultipleSpaces(result);
    result = ensureOneSpaceAfterComma(result);
    result = removeSpaceBeforePunctuation(result);
    result = removeMultipleQuestionMarks(result);
    result = beginSentenceWithUppercase(result);
    result = writeSantaClausProperly(result);
    result = addPeriodAtTheEndIfNeeded(result);

    return result;
}

// Example usage
console.log(fixLetter('   HOLA  que   tal.    como?   exact!     '));
