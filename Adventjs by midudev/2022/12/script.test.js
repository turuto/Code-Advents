import selectSleigh from './script';

describe('basic example', () => {
  test('selectSleigh should return Dancer', () => {
    const testData = [
      {
        expected: 'Dancer',
        distance: 30,
        sleighs: [
          { name: 'Dasher', consumption: 0.3 },
          { name: 'Dancer', consumption: 0.5 },
          { name: 'Rudolph', consumption: 0.7 },
          { name: 'Midu', consumption: 1 },
        ],
      },
      {
        expected: 'TMChein',
        distance: 1,
        sleighs: [
          { name: 'pheralb', consumption: 0.3 },
          { name: 'TMChein', consumption: 0.5 },
        ],
      },
    ];
    testData.forEach((data) => {
      expect(selectSleigh(data.distance, data.sleighs)).toBe(data.expected);
    });
    //expect(selectSleigh(testData.distance, testData.sleighs)).toBe('Dancer');
  });
});
