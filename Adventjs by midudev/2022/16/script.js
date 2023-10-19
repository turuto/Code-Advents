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
        return str.replace(/\s+([,.])/g, '$1');
    };
    result = removeSpaceBeforePunctuation(result);

    // Las preguntas sólo deben terminar con un signo de interrogación
    const removeMultipleQuestionMarks = (str) => str.replace(/\?+/g, '?');
    result = removeMultipleQuestionMarks(result);
    // La primera letra de cada oración debe estar en mayúscula
    // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    // Poner un punto al final de la frase si no tiene puntuación
    return result;
}

// Example usage
console.log(fixLetter('   HOLA  que   tal   '));
