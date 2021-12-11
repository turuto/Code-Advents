function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    console.clear();
    const gifts = letter.split(' ');

    const isValidItem = name => {
        const hasCurly = (name.indexOf('{') >= 0) || (name.indexOf('}') >= 0);
        const hasBracket = (name.indexOf('[') >= 0) || (name.indexOf(']') >= 0);
        const leftParenthesis = name.indexOf('(');
        const RightParenthesis = name.indexOf(')');
        const hasParenthesis = (leftParenthesis >= 0) && (RightParenthesis >= 0);
        const isParenthesisWrong = (RightParenthesis < leftParenthesis) || (leftParenthesis === -1 && RightParenthesis >= 0);
        const hasWrongNumberOfParenthesis = name.split('(').length !== name.split(')').length;
        const isEmpty = (name.replace(/\(|\)/g, "").length === 0) || (RightParenthesis === (leftParenthesis + 1));

        console.log(name);

        if (hasCurly) {
            console.log(name, 'curly: ', hasCurly);
            return false;
        }

        if (hasBracket) {
            console.log(name, 'Brackets: ', hasBracket);
            return false;
        }

        if (isParenthesisWrong) {
            console.log(name, 'Parenthesis: ', isParenthesisWrong);
            return false;
        }

        if (hasWrongNumberOfParenthesis) {
            console.log(name, 'Wrong Number of Parenthesis: ', hasWrongNumberOfParenthesis);
            return false;
        }

        if (isEmpty) {
            console.log(name, 'Empty: ', isEmpty);
            return false;
        }

        return true;
    }

    const result = gifts.every(isValidItem);
    return result;
}


//console.log( isValid("bici coche (balón) bici coche peluche")); // -> ✅
// console.log(isValid("(muñeca) consola bici")); // ✅

//console.log(isValid("bici coche (balón bici coche")); // -> ❌
//console.log(isValid("peluche (bici [coche) bici coche balón")); // -> ❌
//console.log(isValid("(peluche {) bici")); // -> ❌
// console.log(isValid("(()) bici")); //❌
console.log(isValid("(a() bici (a)")); //❌