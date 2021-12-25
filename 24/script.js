function checkIsSameTree(treeA, treeB) {
    let areValuesEqual,
        areLeftEqual,
        areRightEqual;

    if (treeA && treeB) {
        areValuesEqual = treeA.value === treeB.value;
        areLeftEqual = (treeA.left && treeB.left) ? checkIsSameTree(treeA.left, treeB.left) : true;
        areRightEqual = (treeA.right && treeB.right) ? checkIsSameTree(treeA.right, treeB.right) : true;
    }

    return Boolean(areValuesEqual && areLeftEqual && areRightEqual);
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree)) // true
console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true

