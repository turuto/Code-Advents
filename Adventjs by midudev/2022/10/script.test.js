import  checkJump from './script';

describe('input Validity', () => {
    test('input is an array', () => {
        expect(() => checkJump(10)).toThrowError('Data is not an Array');
    });
    test('Every item is a number', () => {
        expect(() => checkJump([1,'2', 3])).toThrowError('Not all items are numbers');
    });
});

describe('valid jumps', () => {
    test('single peak', () => {
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
                expected: false,
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

        testData.forEach(data => {
            expect(checkJump(data.input)).toBe(data.expected);
          });
    });
    
    test ('prolongued peak', () => {
        const testData = [
            {
                input: [1, 2, 2, 2, 1],
                expected: true
            },
            {
                input: [2, 2, 2, 2],
                expected: false
            },
            {
                input: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                expected: true
            },
        ]
    
        testData.forEach(data => {
            expect(checkJump(data.input)).toBe(data.expected);
        });
    })

    test('floating and down cases', () => {
        let jump = [2,2,2,2,2,1];
        expect(checkJump(jump)).toBe(true);
        
        jump = [3,3,3,3,3,2,2,1];
        expect(checkJump(jump)).toBe(false);
    })

});