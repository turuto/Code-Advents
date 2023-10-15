export default function selectSleigh(distance, sleighs) {
  const FUEL_LIMIT = 20;
  const consumptionsNeeded = sleighs.map((item) => item.consumption * distance);
  const firstNotCapable = consumptionsNeeded.findIndex(
    (item) => item > FUEL_LIMIT
  );

  if (firstNotCapable === 0) {
    // no one is capable
    return null;
  }

  const searchedIndex =
    firstNotCapable === -1 ? sleighs.length - 1 : firstNotCapable - 1;
  return sleighs[searchedIndex].name;
}

const sleighs = [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 },
];

selectSleigh(1, sleighs);
