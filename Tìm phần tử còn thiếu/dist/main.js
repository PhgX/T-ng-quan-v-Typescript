let findMissingElement = (a, b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
    let c = [], x, missingElement;
    let i = 0;
    i = 0;
    while (i < b.length) {
        x = a.indexOf(b[i]);
        if (x === -1) {
            c.push(b[i]);
        }
        i++;
    }
    missingElement = c.sort(function (a, b) { return a - b; });
    return missingElement;
};
console.log(findMissingElement([2, 4, 5]));
//# sourceMappingURL=main.js.map