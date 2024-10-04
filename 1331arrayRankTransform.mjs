function arrayRankTransform(arr) {
    const withIdx = arr.map((n, idx) => [n, idx]);
    const sorted = withIdx.sort((a, b) => a[0] - b[0]);
    const solution = [];
    let rank = 1;
    let previous = NaN;
    sorted.forEach((elem) => {
        if (previous !== elem[0]) {
            rank++;
        }
        solution[elem[1]] = rank;
        previous = elem[0];
    });
    return solution;
}
;
export {};
