function checkSledJump(heights) {
    // 1. find max value
    const zenit = Math.max(...heights);

    // 2. get the ascent and descent sub arrays
    const zenitIndex = heights.indexOf(zenit);
    const ascent = heights.slice(0, zenitIndex + 1);
    const descent = heights.slice(zenitIndex);

    // 3. do both ascent and descent exist? (Zenit is the only value)
    if (ascent.length === 1 || descent.length === 1) {
        return false;
    }

    // 4. check every subarray is ordered
    let isAscentOk = true;
    let isDescentOk = true;
    ascent.forEach((item, index, arr) => {
        if (index > 0) {
            const diff = item - arr[index - 1];
            if (diff <= 0) {
                isAscentOk = false;
            }
        }
    });
    descent.forEach((item, index, arr) => {
        if (index > 0) {
            const diff = item - arr[index - 1];
            if (diff >= 0) {
                isDescentOk = false;
            }
        }
    });

    return (isAscentOk && isDescentOk);
}


console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([3, 2, 1])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!