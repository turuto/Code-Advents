export default function countTime(leds) {
    function checkLedsValidity(leds) {
        const isLedsAnArray = Array.isArray(leds);
        if (!isLedsAnArray) {
            throw new Error('Leds is not an Array');
        }

        const anyLedIsNotNumber = leds.some(led => typeof led !== 'number');
        if (anyLedIsNotNumber) {
            throw new Error('Not all leds are numbers');
        }

        const atLeastOneLedIsON = leds.some(led => led === 1);
        if (!atLeastOneLedIsON) {
            throw new Error('At least one led should be ON');
        }
    }
      
    function iterateLeds(leds, count) {
        const onlyOneLed = leds.length === 1;
        const allLedsAreON = leds.every(led => led === 1)
        
        if (allLedsAreON || onlyOneLed) {
            return count
        } else {
          const nextLeds = leds.map((item, index) => {
              if (item === 1) return 1;
  
              const lastLed =  leds[leds.length - 1];
              const previousLed = leds[index - 1] === undefined ? lastLed : leds[index - 1];
              return previousLed === 1 ? 1 : 0;
          });

          const nextStep = count + 1;
          return  iterateLeds(nextLeds, nextStep);
      }
    } 
    checkLedsValidity(leds);
    
    const STEP_TIME = 7;
    const initSeconds = 0;
    const seconds = iterateLeds(leds, initSeconds)
    return seconds * STEP_TIME;
}

try {
    console.log(countTime([0, 0, 0, 1]));
} catch (e) {
    console.error(e);
}