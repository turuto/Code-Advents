export default function fixLetter(letter) {
    let result;
    // Eliminar espacios al inicio y al final
    result = letter.trim();

    // Eliminar múltiples espacios en blanco y dejar sólo uno
    const removeMultipleSpaces = (str) => str.replace(/\s+/g, ' ');
    result = removeMultipleSpaces(result);

    // Dejar un espacio después de cada coma
    const ensureOneSpaceAfterComma = (str) => str.replace(/,(?!\s)/g, ', ');
    result = ensureOneSpaceAfterComma(result);

    // Quitar espacios antes de coma o punto
    const removeSpaceBeforePunctuation = (str) => {
        return str.replace(/\s+([,.?])/g, '$1');
    };
    result = removeSpaceBeforePunctuation(result);

    // Las preguntas sólo deben terminar con un signo de interrogación
    const removeMultipleQuestionMarks = (str) => str.replace(/\?+/g, '?');
    result = removeMultipleQuestionMarks(result);
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

    result = beginSentenceWithUppercase(result);

    // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    const writeSantaClausProperly = (str) => {
        return str.replace(/santa claus/gi, 'Santa Claus');
    };
    result = writeSantaClausProperly(result);
    // Poner un punto al final de la frase si no tiene puntuación
    const addPeriodAtTheEndIfNeeded = (str) => {
        const regex = /[.?!]\s*$/;
        const punctuationNeeded = regex.test(str);
        return punctuationNeeded ? str : str + '.';
    };
    result = addPeriodAtTheEndIfNeeded(result);
    return result;
}

// Example usage
console.log(fixLetter('   HOLA  que   tal.    como?   exact!     '));
