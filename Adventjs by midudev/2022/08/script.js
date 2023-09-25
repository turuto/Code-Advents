export default function checkPart(part) {
    const isPalindrome = function (txt) {
        const reversed = txt.split('').reverse().join('');
        return reversed === txt;
    }

    if (isPalindrome(part)) return true;

    for (let i=0; i<part.length; i++) {
        const reduced = part.substring(0, i) + part.substring(i+1);
        if (isPalindrome(reduced)) return true;
    }

    return false
}



console.log('sdkjsdlkjds');
// console.log(checkPart("uwu")); // true
// console.log(checkPart("miidim")); // true
// console.log(checkPart("midu")); // false