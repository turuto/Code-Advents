function fitsInOneBox(boxes) {
    const orderedBoxes = boxes.sort((boxA, boxB) => boxA.l - boxB.l);
    for (let i=0; i<orderedBoxes.length -1; i++) {
        const watchedBox = orderedBoxes[i];
        const nextBox = orderedBoxes[i+1];

        const fits = [
            watchedBox.l < nextBox.l,
            watchedBox.w < nextBox.w,
            watchedBox.h < nextBox.h
        ];

        if (fits.some(measurement => measurement===false)) {
            return false
        }
    }
    return true
}
const boxes = [
    { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
  ]

  console.log (fitsInOneBox(boxes)) // false