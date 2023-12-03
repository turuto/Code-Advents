export default function manufacture(gifts, materials) {
    const canBeBuilt = (toy) => {
        const lettersNeeded = toy.split('');
        const isPossible = lettersNeeded.every((letter) =>
            materials.includes(letter)
        );
        return isPossible;
    };
    const possibleGifts = gifts.filter((item) => canBeBuilt(item));
    return possibleGifts;
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

console.log(manufacture(gifts, materials));
