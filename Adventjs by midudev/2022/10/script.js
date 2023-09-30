export default function checkJump(heights) {
    function checkLedsValidity(arr) {
        const isProperArray = Array.isArray(arr);
        if (!isProperArray) {
            throw new Error('Data is not an Array');
        }

        const anyItemIsNotNumber = arr.some(item => typeof item !== 'number');
        if (anyItemIsNotNumber) {
            throw new Error('Not all items are numbers');
        }
    }

    checkLedsValidity(heights);

    let result = true;
    let hasStartedToFall = false

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

    const isFloating = (currentIndex) => {
        const {prev, current} = calculateCurrentAndPrev(currentIndex);
        return current === prev;
    };

    for (let i = 1; i < heights.length; i++) {
        const isNotFalling = isAscending(i) || isFloating(i);

        if (hasStartedToFall && isNotFalling) {
            return false
        }

        hasStartedToFall = isDescending(i);   
    }

    if (!hasStartedToFall) {
        result = false;
    }

    return result;
  }

  try {
    const testData = [
        {
            input: [1, 3, 8, 5, 2],
            expected: true
        },
        {
            input: [1, 7, 3, 5],
            expected: false,
        },
        {
            input: [1, 2, 1],
            expected: true,
        },
        {
            input: [1, 2, 3, 2, 1],
            expected: true,
        },
        {
            input: [0, 1, 0],
            expected: true,
        },
        {
            input: [1, 2, 3],
            expected: true,
        },
        {
            input: [1, 2, 3, 2, 1, 2, 3],
            expected: false,
        },
        {
            input: [1, 1000, 900, 800],
            expected: true,
        },
        {
            input: [1, 1000, 100, 800],
            expected: false,
        },
        {
            input: [1, 2, 3, 1, 3, 1],
            expected: false,
        },
        {
            input: [1, 3, 2, 5, 4, 3, 2, 1],
            expected: false,
        },
    ];

    testData.forEach (item => {
        //console.log(`${item.input} should be ${item.expected}`,checkJump(item.input));
    });

    const jump = [3,3,2,2,1];
    console.log(`${jump} should be ${false}`,checkJump(jump));
    
} catch (e) {
    console.error(e);
}
