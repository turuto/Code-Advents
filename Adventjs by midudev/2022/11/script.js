export default function getCompleted(part, total) {
    const greatestCommonDivisor = function (a, b) {
        // this is following the Euclidean Algorithm
        if (a % b === 0) {
            return b;
        }

        const newNumber = a % b;
        return greatestCommonDivisor (b , newNumber);
    }

    const getSeconds = function (hour) {
        const parsedTime = hour.split(':')
            .map(item => parseInt(item));

        const multipliers = [3600, 60, 1];
        return parsedTime.reduce((accumulator, currentValue, index) => {
            return accumulator + currentValue * multipliers[index];
          }, 0);
    }

    const partInSeconds = getSeconds(part);
    const totalInSeconds = getSeconds(total);
    const commonDivisor = greatestCommonDivisor(partInSeconds, totalInSeconds);

    const numerator = partInSeconds / commonDivisor;
    const denominator = totalInSeconds / commonDivisor;
    return `${numerator}/${denominator}`;
  }
