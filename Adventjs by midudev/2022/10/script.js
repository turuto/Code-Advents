export default function checkJump(heights) {
    function checkDataValidity(arr) {
        const isProperArray = Array.isArray(arr);
        if (!isProperArray) {
            throw new Error('Data is not an Array');
        }

        const anyItemIsNotNumber = arr.some(item => typeof item !== 'number');
        if (anyItemIsNotNumber) {
            throw new Error('Not all items are numbers');
        }
    }

    checkDataValidity(heights);

    const calculateCurrentAndPrev = (index) => {
        const prev = heights[index -1];
        const current = heights[index];

        return {prev, current}
    }

    let isAscending = (currentIndex) => {
        const {prev, current} = calculateCurrentAndPrev(currentIndex);
        return current - prev > 0;
    };

    const isDescending = (currentIndex) => {
        const {prev, current} = calculateCurrentAndPrev(currentIndex);
        return current - prev < 0;
    };

    let result = true;
    let hasStartedToFall = false
    let hasStartedToRise = false

    for (let i = 1; i < heights.length; i++) {
        hasStartedToRise = hasStartedToRise || isAscending(i);
        hasStartedToFall = hasStartedToFall || isDescending(i);
        
        if (hasStartedToFall && isAscending(i)) {
            return false;
        }
    }

    result = hasStartedToRise && hasStartedToFall;
    return result;
  }
