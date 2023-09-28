import  countTime from './script';

test("countTime should throw an error if the leds input is not valid", () => {
    expect(() => countTime(10)).toThrowError('Leds is not an Array');
    expect(() => countTime(undefined)).toThrowError('Leds is not an Array');
    expect(() => countTime('hola')).toThrowError('Leds is not an Array');
    expect(() => countTime([1,'2', 3])).toThrowError('Not all leds are numbers');
    expect(() => countTime([0,0,0])).toThrowError('At least one led should be ON');
});

test("countTime should return the proper time", () => {
    const testData = [
      {
        input: [1],
        expected: 0,
      },
      {
        input: [0, 1, 1, 0, 1],
        expected: 7,
      },
      {
        input: [0, 0, 0, 1],
        expected: 21,
      },
      {
        input: [0, 0, 1, 0, 0],
        expected: 28,
      },
    ];
    testData.forEach(data => {
      expect(countTime(data.input)).toBe(data.expected);
    });
  });
  
